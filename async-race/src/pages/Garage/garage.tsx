import React, { useState, useEffect, useRef } from 'react';
import 'rc-slider/assets/index.css';
import './garage.scss';
import { NavLink } from '../Components/nav-link/nav-link'
import CarInput from '../Components/car-input/car-input'
import Button from '../Components/button/button'
import CarTrack from '../Components/car-track/car-track'
import { modelsCars } from './models-cars'
import { brandsCars } from './brands-cars'


interface Props {
    
}

interface winnerData {
  wins: number,
  time: number
}

interface PatchResult {
  distance: number,
  velocity: number,
}

interface CarData {
  name: string,
  color: string,
  id: number,
}


export function Garage(props: Props) {

    const [carData, setCarData] = useState<Array<CarData>>([])
    const [carName, setCarName] = useState<string>('');
    const [carColor, setCarColor] = useState<string>('');
    const [selectedCarСolor, setSelectedCarСolor] = useState('');
    const [selectedCarName, setSelectedCarName] = useState('');
    const [selectedCarId, setSelectedCarId] = useState('');
    const [carCount, setCarCount] = useState('');
    const [winName, setWinName] = useState('');
    const [winTime, setWinTime] = useState('');
    const [page, setPage] = useState(() => {
      const saved = localStorage.getItem("currentPage");
      if(saved !== null && saved !== undefined) {
          const initialValue = +saved;
          return initialValue        
      } else {
          return  1
      }});

    let winner = true

    const carsOnPage: Array<React.MutableRefObject<HTMLDivElement | null>> = [];
    const aOnPage: Array<React.MutableRefObject<HTMLButtonElement | null>> = [];
    const bOnPage: Array<React.MutableRefObject<HTMLButtonElement | null>> = [];

    const raceButtonRef: React.MutableRefObject<HTMLButtonElement | null> = useRef(null)
    const resetButtonRef: React.MutableRefObject<HTMLButtonElement | null> = useRef(null)
    const prevRef: React.MutableRefObject<HTMLButtonElement | null> = useRef(null)
    const nextRef: React.MutableRefObject<HTMLButtonElement | null> = useRef(null)
    const winInfoRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null)

    useEffect(() => {
        fetchCars()
        localStorage.setItem("currentPage", JSON.stringify(page))
      }, [page])


    function nameInputHandler(e: React.ChangeEvent) {
        setCarName((e.target as HTMLInputElement).value)
    }

    function colorInputHandler(e: React.ChangeEvent) {
        setCarColor((e.target as HTMLInputElement).value)
    }

    function selectedNameInputHandler(e: React.ChangeEvent) {
      setSelectedCarName((e.target as HTMLInputElement).value)
    }

    function selectedColorInputHandler(e: React.ChangeEvent) {
      setSelectedCarСolor((e.target as HTMLInputElement).value)
    }

    function getRandomNumber(arr: Array<string>) {
      return Math.round(Math.random() * (arr.length - 1))
    }

    function carNameGenerator() {
      return [...Array(100)].map(item => 
        `${brandsCars[getRandomNumber(brandsCars)]} ${modelsCars[getRandomNumber(modelsCars)]}`)
    }

    function carColorGenerator() {
      return '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
    }

    function carGenerator() {
      let carsNamesArr = carNameGenerator()
      carsNamesArr.forEach(item => {
        fetch('http://localhost:3000/garage', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(  {
              name: item,
              color: carColorGenerator(),
            }),
        })
          .then(fetchCars)
          .catch((err) => console.log('error'))
    })};

    function fetchCars() {
        fetch(`http://localhost:3000/garage?_page=${page}&_limit=7`, {
          method: 'GET',
        })
          .then((res) => getHeader(res))
          .then((res) => res.json())
          .then((result) => setCarData(result))
          .catch((err) => console.log('error'))
    }

    function getHeader(res: Response) {
      const carCount = res.headers.get('X-Total-Count')
      carCount !== null && setCarCount(carCount)
      if (carCount !== null && carCount !== undefined && +carCount < 8) {
        setPage(1)
      }
      return res
    }

    function saveCars() {
      if (carName) {
        fetch('http://localhost:3000/garage', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(  {
              name: carName,
              color: carColor,
            }),
        })
        .then(fetchCars)
        .catch((err) => console.log('error'))
      } else {
        alert('Input car name!')
      }
    }


    function updateCar() {
      if(selectedCarName) {
        fetch(`http://localhost:3000/garage/${selectedCarId}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(  {
              name: selectedCarName,
              color: selectedCarСolor,
            }),
      })
          .then(fetchCars)
          .catch((err) => console.log('error'))
      } else {
        alert('Input car name!')
      }
    }

    function breakEngine(car: React.MutableRefObject<HTMLDivElement | null>, res: Response) {
      res.status === 500 && car.current !==null && (car.current.style.animationPlayState = 'paused')
      return res
    } 

    function driveCar (car: CarData, carImg: React.MutableRefObject<HTMLDivElement | null>): ((value: void) => void | PromiseLike<void>) | null | undefined {
      if(carImg.current !== null) {
        fetch(`http://localhost:3000/engine?id=${car.id}&status=drive`, {
          method: 'PATCH',
        })
        .then((res) => breakEngine(carImg, res))
        .then((res) =>  checkWiner(res, car, carImg))
        .catch((err) => console.log('error'))
      }
      return
    }

    function deActiveWinInfo(div: HTMLDivElement) {
      div.classList.remove('win-info__active')
    }

    function activeWinInfo() {
      if(winInfoRef.current!==null) {
        winInfoRef.current.classList.add('win-info__active')
        setTimeout(deActiveWinInfo, 2000, winInfoRef.current)
      } 
    }

    function checkWiner(res: Response, car: CarData, carImg: React.MutableRefObject<HTMLDivElement | null>) {
      if (res.status === 200 && winner === true) {
        winner = false
        const sec = 1000
        console.log('Winrer!')
        console.log(car)
        if (carImg.current !== null) {
          const msStr = carImg.current.style.animationDuration
          const ms = msStr.slice(0, msStr.length - 2)
          const winTime = Math.round(+ms / sec * 100) / 100 //тут
          setWinName(car.name)
          setWinTime(String(winTime))
          activeWinInfo()
          postWinner(car.id, winTime)
        }
      }
    }

    function getWinner(id: number, carTime: number) {
      fetch(`http://localhost:3000/winners/${id}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((result) => updateWinerCar(id, result, carTime))
        .catch((err) => console.log('error'))
    }

    function updateWinerCar(id: number, result: winnerData, carTime: number) {
      let bestTime = 0
      carTime >= result.time ? bestTime = result.time : bestTime = carTime
      fetch(`http://localhost:3000/winners/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(  {
          wins: result.wins + 1,
          time: bestTime
        }),
      })
    }

    function updateWinner(res: Response, id: number, carTime: number) {
      if (res.status === 500) {
        getWinner(id, carTime)
      }
    }

    function postWinner(carId: number, carTime: number) {
          fetch('http://localhost:3000/winners', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(  {
              id: carId,
              wins: 1,
              time: carTime
              }),
          })
          .then((res) => updateWinner(res, carId, carTime))
          .catch((err) => console.log('error'))
    } 
        
    function startEngine(car: React.MutableRefObject<HTMLDivElement | null>, result: PatchResult) {
      if(car.current !== null) {
        car.current.style.animationDuration = `${result.distance / result.velocity}ms`
        car.current.classList.add('animation')
        car.current.style.animationPlayState = 'running'
        resetButtonRef.current !==null && (resetButtonRef.current.disabled = false)
      } 
    }

    function restartCar(car: React.MutableRefObject<HTMLDivElement | null>) : ((value: Response) => Response | PromiseLike<Response>) | null | undefined {
      car.current !== null && car.current.classList.remove('animation')
      return
    }

    function startAllCars() {
      winner = true
      aOnPage.map(item => item.current !==null && (item.current.disabled = true))
      bOnPage.map(item => item.current !==null && (item.current.disabled = true))
      raceButtonRef.current !==null && (raceButtonRef.current.disabled = true)
      resetButtonRef.current !==null && (resetButtonRef.current.disabled = true)
      Promise.all(carData.map(item => fetch(`http://localhost:3000/engine?id=${item.id}&status=started`, {
        method: 'PATCH',
      }))).then(res => res.map((item, index) => item.json()
                                                    .then(res => startEngine(carsOnPage[index], res))
                                                    .then(driveCar(carData[index], carsOnPage[index]))
                                                    .catch((err) => console.log('error'))))
/*       for (let i = 0; i < carData.length; i += 1) {
        fetch(`http://localhost:3000/engine?id=${carData[i].id}&status=started`, {
          method: 'PATCH',
        })
        .then((res) => res.json())
        .then((result) => startEngine(carsOnPage[i], result))
        .then(driveCar(carData[i], carsOnPage[i]))
        .catch((err) => console.log('error'))
      } */
    }

    function resetAllCars() {
      winner = false
      aOnPage.map(item => item.current !==null && (item.current.disabled = false))
      bOnPage.map(item => item.current !==null && (item.current.disabled = true))
      raceButtonRef.current !==null && (raceButtonRef.current.disabled = false)
      for (let i = 0; i < carData.length; i += 1) {
        fetch(`http://localhost:3000/engine?id=${carData[i].id}&status=stopped`, {
          method: 'PATCH',
        })
        .then(restartCar(carsOnPage[i]))
        .catch((err) => console.log('error'))
      }
    }

    function nextPage() {
      let currentPage = page + 1
      setPage(currentPage)
    }

    function prevPage() {
      let currentPage = page - 1
      setPage(currentPage)
    }

    return <section className="content">
        <NavLink textContent={'WINNERS'} link={'/winners'}/>
        <div ref={winInfoRef} className="win-info">{`Winner! ${winName} came first in ${winTime}s`}</div>
        <section className='carInput'>
          <CarInput inputType={'text'} onChange={(e) => nameInputHandler(e)}/>
          <CarInput inputType={'color'} onChange={(e) => colorInputHandler(e)}/>
          <Button class='' textContent='Create' onClick={saveCars}/>
        </section>
        <section className='carInput'>
          {
            selectedCarId ? <CarInput inputType={'text'} value={selectedCarName} onChange={(e) => selectedNameInputHandler(e)}/> :
            <CarInput disabled={true} inputType={'text'} value={selectedCarName} onChange={(e) => selectedNameInputHandler(e)}/>
          }
          <CarInput inputType={'color'} value={selectedCarСolor} onChange={(e) => selectedColorInputHandler(e)}/>
          {
            selectedCarId ? <Button class='' textContent='Update' onClick={updateCar}/> :
            <Button disabled={true} class='' textContent='Update' onClick={updateCar}/>
          }
          
        </section>
        <section className='carInput'>
          <Button refer={raceButtonRef} class='' textContent='Race' onClick={startAllCars}/>
          <Button refer={resetButtonRef} class='' textContent='Reset' onClick={resetAllCars}/>
          <Button class='' textContent='Generate cars' onClick={carGenerator}/>
        </section>
        <h2 className='title'>Garage({carCount})</h2>
        <h3 className="title page">Page #{page}</h3>
        {carData.map(item => <CarTrack carName={item.name} 
                                      fill={item.color} 
                                      id={String(item.id)} 
                                      setId={setSelectedCarId} 
                                      setName={setSelectedCarName}
                                      setColor={setSelectedCarСolor}
                                      fetchCars={fetchCars}                                      
                                      carsRefs={carsOnPage}
                                      buttonARefs={aOnPage} 
                                      buttonBRefs={bOnPage}
                                      key={item.id}/>)}
        <div className="pagination">
          {page === 1 ? <Button disabled={true} refer={prevRef} class='' textContent='Prev page' onClick={prevPage}/> :
          <Button refer={prevRef} class='' textContent='Prev page' onClick={prevPage}/>}
          {page === Math.ceil(+carCount / 7) ? <Button disabled={true} refer={nextRef} class='' textContent='Next page' onClick={nextPage}/> :
          <Button refer={nextRef} class='' textContent='Next page' onClick={nextPage}/>        
          }          
        </div>
    </section>
}