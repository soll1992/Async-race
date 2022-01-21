import React, { useRef } from 'react';
import Button from '../button/button'
import './car-track.scss';
import Car from '../car/car'; 

interface Props {
    carName: string,
    id: string,
    fill: string,
    carsRefs: Array<HTMLDivElement | null>,
    setId: React.Dispatch<React.SetStateAction<string>>,
    setColor: React.Dispatch<React.SetStateAction<string>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
}

interface PatchResult {
  distance: number,
  velocity: number,
}

export default function CarTrack(props: Props) {

  const currentCar: React.MutableRefObject<HTMLDivElement | null> = useRef(null)
  const car = currentCar.current
  props.carsRefs.push(car)
  
  function onClickHandler (e: React.MouseEvent) {
    const target = e.target as HTMLElement;
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
        fetch(`http://localhost:3000/engine?id=${currentTarget.id}&status=started`, {
          method: 'PATCH',
        })
        .then((res) => res.json())
        .then((result) => startCar(result))
        .then(driveCar)
        .catch((err) => console.log('error'))
        break
      case 'B':
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
          <Button class='' textContent='A'/>
          <Button class='' textContent='B'/>
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
