import React, { useState, useEffect, useRef } from 'react';
import 'rc-slider/assets/index.css';
import './garage.scss';
import { NavLink } from '../Components/nav-link/nav-link'
import CarInput from '../Components/car-input/car-input'
import Button from '../Components/button/button'
import CarTrack from '../Components/car-track/car-track'


interface Props {
    
}

interface CarData {
  name: string,
  color: string,
  id: number,
}


export function Garage(props: Props) {

    const [carData, setCarData] = useState<Array<CarData>>([])
    const [formData, setFormData] = useState('')
    const [carName, setCarName] = useState<string>('');
    const [carColor, setCarColor] = useState<string>('');
    const [selectedCarСolor, setSelectedCarСolor] = useState('');
    const [selectedCarName, setSelectedCarName] = useState('');
    const [selectedCarId, setSelectedCarId] = useState('');
    const [carCount, setCarCount] = useState(4);
    const [page, setPage] = useState(1);
    const carsOnPage: Array<HTMLDivElement | null> = [];

    useEffect(() => {
        fetchCars()
        console.log(carsOnPage)
      }, [])


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

    console.log(carName)
    console.log(carColor)


    function fetchCars() {
        fetch(`http://localhost:3000/garage?_page=${page}&_limit=7`, {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((result) => setCarData(result))
          .catch((err) => console.log('error'))
          return false
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
        setCarCount(carCount + 1)
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

    return <section className="content">
        <NavLink textContent={'WINNERS'} link={'/winners'}/>
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
          <Button class='' textContent='Race' onClick={saveCars}/>
          <Button class='' textContent='Reset' onClick={saveCars}/>
          <Button class='' textContent='Generate cars' onClick={saveCars}/>
        </section>
        <h2 className='title'>Garage({carCount})</h2>
        <h3 className="title page">Page #{page}</h3>
        {carData.map(item => <CarTrack carName={item.name} 
                                      fill={item.color} 
                                      id={String(item.id)} 
                                      setId={setSelectedCarId} 
                                      setName={setSelectedCarName}
                                      setColor={setSelectedCarСolor}
                                      carsRefs={carsOnPage} 
                                      key={item.id}/>)}
    </section>
}