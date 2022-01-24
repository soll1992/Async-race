import React, { useRef } from 'react';
import Button from '../button/button'
import './car-track.scss';
import Car from '../car/car'; 

interface Props {
    carName: string,
    id: string,
    fill: string,
    carsRefs: Array<React.MutableRefObject<HTMLDivElement | null>>,
    buttonARefs: Array<React.MutableRefObject<HTMLButtonElement | null>>,
    buttonBRefs: Array<React.MutableRefObject<HTMLButtonElement | null>>,
    setId: React.Dispatch<React.SetStateAction<string>>,
    setColor: React.Dispatch<React.SetStateAction<string>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    fetchCars: () => void,
}

interface PatchResult {
  distance: number,
  velocity: number,
}

export default function CarTrack(props: Props) {

  const currentCar: React.MutableRefObject<HTMLDivElement | null> = useRef(null)
  const currentA: React.MutableRefObject<HTMLButtonElement | null> = useRef(null)
  const currentB: React.MutableRefObject<HTMLButtonElement | null> = useRef(null)
  props.carsRefs.push(currentCar)
  props.buttonARefs.push(currentA)
  props.buttonBRefs.push(currentB)

  function onClickHandler (e: React.MouseEvent) {
    const car = currentCar.current
    const target = e.target as HTMLButtonElement;
    const currentTarget = e.currentTarget as HTMLElement;

    function breakEngine(res: number) {
      res === 500 && car !==null && (car.style.animationPlayState = 'paused')
    } 

    function startCar(result: PatchResult) {
      if(car !== null) {
        car.style.animationDuration = `${result.distance / result.velocity}ms`
        car !== null && car.classList.add('animation')
        car.style.animationPlayState = 'running'
      } 
    }

    function restartCar() {
      car !== null && car.classList.remove('animation')
    }

    function driveCar() {
      fetch(`http://localhost:3000/engine?id=${currentTarget.id}&status=drive`, {
        method: 'PATCH',
      })
      .then((result) => breakEngine(result.status))
      .catch((err) => console.log('error'))
    }

    switch(target.textContent) {
      case 'A': 
        target.disabled = true;
        currentB.current !==null && (currentB.current.disabled = false)
        fetch(`http://localhost:3000/engine?id=${currentTarget.id}&status=started`, {
          method: 'PATCH',
        })
        .then((res) => res.json())
        .then((result) => startCar(result))
        .then(driveCar)
        .catch((err) => console.log('error'))
        break
      case 'B':
        target.disabled = true;
        currentA.current !==null && (currentA.current.disabled = false)
        fetch(`http://localhost:3000/engine?id=${currentTarget.id}&status=stopped`, {
          method: 'PATCH',
        })
        .then(restartCar)
        .catch((err) => console.log('error'))
        break
      case 'Select':
        props.setId(currentTarget.id)
        props.setName(props.carName)
        props.setColor(props.fill)
        break 
      case 'Remove':
        fetch(`http://localhost:3000/garage/${currentTarget.id}`, {
          method: 'DELETE',
        })
        .then(props.fetchCars)
        .catch((err) => console.log('error'))
        fetch(`http://localhost:3000/winners/${currentTarget.id}`, {
          method: 'DELETE',
        })
        break      
    }

  }

  return <div className='car-track' id={props.id} onClick={(e) => onClickHandler(e)}>
      <div className="car-track__header">
        <Button class='' textContent='Select'/>
        <Button class='' textContent='Remove'/>
        <div className='car-name'>{props.carName}</div>
      </div>
      <div className="car-track__body">
        <div className="car-track__body__starter">
          <Button refer={currentA} class='' textContent='A'/>
          <Button disabled={true} refer={currentB} class='' textContent='B'/>
        </div>
        <div ref={currentCar} className="car-wrapper">
          <Car fill={props.fill}/>
        </div>
        <div className="flag-wrapper">
          <div className="flag">
          </div>
        </div>
      </div>
  </div>;
}
