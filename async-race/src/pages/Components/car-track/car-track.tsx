import React, { useRef } from 'react';
import Button from '../button/button';
import './car-track.scss';
import Car from '../car/car';

interface Props {
    carName: string;
    id: string;
    fill: string;
    carsRefs: Array<React.MutableRefObject<HTMLDivElement | null>>;
    buttonARefs: Array<React.MutableRefObject<HTMLButtonElement | null>>;
    buttonBRefs: Array<React.MutableRefObject<HTMLButtonElement | null>>;
    setId: React.Dispatch<React.SetStateAction<string>>;
    setColor: React.Dispatch<React.SetStateAction<string>>;
    setName: React.Dispatch<React.SetStateAction<string>>;
    fetchCars: () => void;
}

interface PatchResult {
    distance: number;
    velocity: number;
}

export default function CarTrack({
  carName,
  id,
  fill,
  carsRefs,
  buttonARefs,
  buttonBRefs,
  setId,
  setColor,
  setName,
  fetchCars,
}: Props) {
  const currentCar: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  const currentA: React.MutableRefObject<HTMLButtonElement | null> = useRef(null);
  const currentB: React.MutableRefObject<HTMLButtonElement | null> = useRef(null);
  carsRefs.push(currentCar);
  buttonARefs.push(currentA);
  buttonBRefs.push(currentB);

  function onClickHandler(e: React.MouseEvent) {
    const car = currentCar.current;
    const target = e.target as HTMLButtonElement;
    const currentTarget = e.currentTarget as HTMLElement;

    function breakEngine(res: number) {
      if (res === 500 && car !== null) {
        car.style.animationPlayState = 'paused';
      }
    }

    function startCar(result: PatchResult) {
      if (car !== null) {
        car.style.animationDuration = `${
          result.distance / result.velocity
        }ms`;
        if (car !== null) {
          car.classList.add('animation');
        }
        car.style.animationPlayState = 'running';
      }
    }

    function restartCar() {
      if (car !== null) {
        car.classList.remove('animation');
      }
    }

    function driveCar() {
      fetch(
        `http://localhost:3000/engine?id=${currentTarget.id}&status=drive`,
        {
          method: 'PATCH',
        },
      )
        .then((result) => breakEngine(result.status))
        .catch((err) => console.log(`error: ${err}`));
    }

    switch (target.textContent) {
      case 'A':
        target.disabled = true;
        if (currentB.current !== null) {
          currentB.current.disabled = false;
        }
        fetch(
          `http://localhost:3000/engine?id=${currentTarget.id}&status=started`,
          {
            method: 'PATCH',
          },
        )
          .then((res) => res.json())
          .then((result) => startCar(result))
          .then(driveCar)
          .catch((err) => console.log(`error: ${err}`));
        break;
      case 'B':
        target.disabled = true;
        if (currentA.current !== null) {
          currentA.current.disabled = false;
        }
        fetch(
          `http://localhost:3000/engine?id=${currentTarget.id}&status=stopped`,
          {
            method: 'PATCH',
          },
        )
          .then(restartCar)
          .catch((err) => console.log(`error: ${err}`));
        break;
      case 'Select':
        setId(currentTarget.id);
        setName(carName);
        setColor(fill);
        break;
      case 'Remove':
        fetch(`http://localhost:3000/garage/${currentTarget.id}`, {
          method: 'DELETE',
        })
          .then(fetchCars)
          .catch((err) => console.log(`error: ${err}`));
        fetch(`http://localhost:3000/winners/${currentTarget.id}`, {
          method: 'DELETE',
        });
        break;
      default:
    }
  }

  return (
  /* eslint-disable-next-line */
    <div className="car-track" id={id} onClick={(e) => onClickHandler(e)}>
      <div className="car-track__header">
        <Button
          buttonClass="button button-margin"
          textContent="Select"
        />
        <Button
          buttonClass="button button-margin red"
          textContent="Remove"
        />
        <div className="car-name">{carName}</div>
      </div>
      <div className="car-track__body">
        <div className="car-track__body__starter">
          <Button
            refer={currentA}
            buttonClass="button button-margin"
            textContent="A"
          />
          <Button
            disabled
            refer={currentB}
            buttonClass="button button-margin red"
            textContent="B"
          />
        </div>
        <div ref={currentCar} className="car-wrapper">
          <Car fill={fill} />
        </div>
        <div className="flag-wrapper">
          <div className="flag">
            <img src="./svg/flag.svg" alt="flag" />
          </div>
        </div>
      </div>
    </div>
  );
}
