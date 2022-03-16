import React, { useState, useEffect } from 'react';
import './winners.scss';
import NavLink from '../Components/nav-link/nav-link';
import TableRowHead from '../Components/table-row-with-links/table-row-with-links';
import TableRow from '../Components/table-row/table-row';
import Car from '../Components/car/car';
import Button from '../Components/button/button';

interface winnerData {
    wins: number;
    time: number;
    id: number;
    name?: string;
    color?: string;
}

interface CarData {
    name: string;
    color: string;
    id: number;
}

export default function Winners() {
  const [cars, setCars] = useState<Array<winnerData>>([]);
  const [winPage, setWinPage] = useState(() => {
    const saved = localStorage.getItem('currentWinPage');
    if (saved !== null && saved !== undefined) {
      const initialValue = +saved;
      return initialValue;
    }
    return 1;
  });
  const [winCarCount, setWinCarCount] = useState(10);
  const [winsASC, setWinsASC] = useState(() => {
    const saved = localStorage.getItem('winsASC');
    if (saved !== null && saved !== undefined) {
      const initialValue = JSON.parse(saved);
      return initialValue;
    }
    return false;
  });
  const [timeASC, setTimeASC] = useState(() => {
    const saved = localStorage.getItem('timeASC');
    if (saved !== null && saved !== undefined) {
      const initialValue = JSON.parse(saved);
      return initialValue;
    }
    return false;
  });
  const [currentSort, setCurrentSort] = useState(() => {
    const saved = localStorage.getItem('currentSort');
    if (saved !== null && saved !== undefined) {
      return saved;
    }
    return 'none';
  });

  function getWinHeader(res: Response) {
    const carCount = res.headers.get('X-Total-Count');
    if (carCount !== null) setWinCarCount(+carCount);
    if (carCount !== null && carCount !== undefined && +carCount < 11) {
      setWinPage(1);
    }
    return res;
  }

  function addObjProperties(result: CarData, item: winnerData) {
    /* eslint-disable-next-line no-param-reassign */
    item.name = result.name;
    /* eslint-disable-next-line no-param-reassign */
    item.color = result.color;
    return item;
  }

  async function getCar(id: number, item: winnerData) {
    const fetchCar = await fetch(`http://localhost:3000/garage/${id}`, {
      method: 'GET',
    });

    const carJSON = await fetchCar.json();
    return addObjProperties(carJSON, item);
  }

  function getCars(result: Array<winnerData>) {
    return result.map((item) => getCar(item.id, item));
  }

  function getWinners() {
    fetch(`http://localhost:3000/winners?_page=${winPage}_limit=10`, {
      method: 'GET',
    })
      .then((res) => getWinHeader(res))
      .then((res) => res.json())
      .then((result) => getCars(result))
      .then((res) => Promise.all(res))
      .then((result) => setCars(result))
      .catch((err) => console.log(`error: ${err}`));
  }

  function fitchWinsASC() {
    fetch(
      `http://localhost:3000/winners?_page=${winPage}&_limit=10&_sort=wins&_order=ASC`,
      {
        method: 'GET',
      },
    )
      .then((res) => getWinHeader(res))
      .then((res) => res.json())
      .then((result) => getCars(result))
      .then((res) => Promise.all(res))
      .then((result) => setCars(result))
      .catch((err) => console.log(`error: ${err}`));
  }

  function fitchWinsDESC() {
    fetch(
      `http://localhost:3000/winners?_page=${winPage}&_limit=10&_sort=wins&_order=DESC`,
      {
        method: 'GET',
      },
    )
      .then((res) => getWinHeader(res))
      .then((res) => res.json())
      .then((result) => getCars(result))
      .then((res) => Promise.all(res))
      .then((result) => setCars(result))
      .catch((err) => console.log(`error: ${err}`));
  }

  function fitchTimeASC() {
    fetch(
      `http://localhost:3000/winners?_page=${winPage}&_limit=10&_sort=time&_order=ASC`,
      {
        method: 'GET',
      },
    )
      .then((res) => getWinHeader(res))
      .then((res) => res.json())
      .then((result) => getCars(result))
      .then((res) => Promise.all(res))
      .then((result) => setCars(result))
      .catch((err) => console.log(`error: ${err}`));
  }

  function fitchTimeDESC() {
    fetch(
      `http://localhost:3000/winners?_page=${winPage}&_limit=10&_sort=time&_order=DESC`,
      {
        method: 'GET',
      },
    )
      .then((res) => getWinHeader(res))
      .then((res) => res.json())
      .then((result) => getCars(result))
      .then((res) => Promise.all(res))
      .then((result) => setCars(result))
      .catch((err) => console.log(`error: ${err}`));
  }

  useEffect(() => {
    switch (currentSort) {
      case 'none':
        getWinners();
        break;
      case 'wins':
        if (winsASC) {
          fitchWinsDESC();
        } else {
          fitchWinsASC();
        }
        break;
      case 'time':
        if (timeASC) {
          fitchTimeDESC();
        } else {
          fitchTimeASC();
        }
        break;
      default:
    }
    localStorage.setItem('currentWinPage', JSON.stringify(winPage));
    localStorage.setItem('currentSort', currentSort);
    localStorage.setItem('winsASC', JSON.stringify(winsASC));
    localStorage.setItem('timeASC', JSON.stringify(timeASC));
  }, [winPage]);

  function nextPage() {
    setWinPage(winPage + 1);
  }

  function prevPage() {
    setWinPage(winPage - 1);
  }

  function sortWinsASC() {
    setWinsASC(false);
    localStorage.setItem('winsASC', 'false');
    fitchWinsASC();
  }

  function sortWinsDESC() {
    setWinsASC(true);
    localStorage.setItem('winsASC', 'true');
    fitchWinsDESC();
  }

  function sortTimeASC() {
    setTimeASC(false);
    localStorage.setItem('timeASC', 'false');
    fitchTimeASC();
  }

  function sortTimeDESC() {
    setTimeASC(true);
    localStorage.setItem('timeASC', 'true');
    fitchTimeDESC();
  }

  function sortWins() {
    setCurrentSort('wins');
    localStorage.setItem('currentSort', 'wins');
    if (winsASC) {
      sortWinsASC();
    } else {
      sortWinsDESC();
    }
  }

  function sortTime() {
    setCurrentSort('time');
    localStorage.setItem('currentSort', 'time');
    if (timeASC) {
      sortTimeASC();
    } else {
      sortTimeDESC();
    }
  }

  function carNumber(index: number) {
    const numberInterval = (winPage - 1) * 10;
    return String(index + 1 + numberInterval);
  }

  return (
    <section className="winners">
      <NavLink textContent="GARAGE" link="/" />
      <div className="table-wrap">
        <h2 className="title">
          Winners(
          {winCarCount}
          )
        </h2>
        <h3 className="title page">
          Page #
          {winPage}
        </h3>
        <table className="win-table">
          <thead>
            <TableRowHead
              sortTime={() => sortTime()}
              sortWins={() => sortWins()}
              no="№"
              id="ID"
              car="CAR"
              name="NAME"
              wins="WINS"
              time="BEST TIME"
            />
          </thead>
          <tbody>
            {cars.map((item, index) => (
              <TableRow
                no={carNumber(index)}
                id={String(item.id)}
                car={<Car fill={item.color} />}
                name={item.name}
                wins={String(item.wins)}
                time={`${item.time}s`}
                key={item.id}
              />
            ))}
          </tbody>
        </table>
        <div className="button-wrap">
          {winPage === 1 ? (
            <Button
              disabled
              buttonClass="button button-margin blue"
              textContent="Prev page"
              onClick={() => prevPage()}
            />
          ) : (
            <Button
              buttonClass="button button-margin blue"
              textContent="Prev page"
              onClick={() => prevPage()}
            />
          )}
          {winPage === Math.ceil(+winCarCount / 10) ? (
            <Button
              disabled
              buttonClass="button button-margin blue"
              textContent="Next page"
              onClick={() => nextPage()}
            />
          ) : (
            <Button
              buttonClass="button button-margin blue"
              textContent="Next page"
              onClick={() => nextPage()}
            />
          )}
        </div>
      </div>
    </section>
  );
}
