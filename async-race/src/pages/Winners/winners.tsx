import React, {useState, useEffect} from 'react'
import './winners.scss';
import { NavLink } from '../Components/nav-link/nav-link'
import {TableRow, TableRowHead} from '../Components/table-row/table-row'
import Car from '../Components/car/car'
import Button from '../Components/button/button'

interface winnerData {
    wins: number,
    time: number,
    id: number,
    name?: string,
    color?: string
}

interface CarData {
    name: string,
    color: string,
    id: number,
}

export function Winners() {

    const [cars, setCars] = useState<Array<winnerData>>([]);
    const [winPage, setWinPage] = useState(1);
    const [winCarCount, setWinCarCount] = useState(10);

    useEffect(() => {
        getWinners()
      }, [winPage])

    function getWinners() {
        fetch(`http://localhost:3000/winners?_page=${winPage}_limit=10}`, {
            method: 'GET',
          })
            .then((res) => getWinHeader(res))
            .then((res) => res.json())
            .then((result) => getCars(result))
            .then((res) => Promise.all(res))
            .then((result) => setCars(result))
            .catch((err) => console.log('error'))
    }

    function addObjProperties(result: CarData, item: winnerData) {
        item.name = result.name;
        item.color = result.color
        return item
    }

    function getWinHeader(res: Response) {
        const carCount = res.headers.get('X-Total-Count')
        carCount !== null && setWinCarCount(+carCount)
        if (carCount !== null && carCount !== undefined && +carCount < 11) {
          setWinPage(1)
        }
        return res
      }

    async function getCar(id: number, item: winnerData) {

        const fetchCar = await fetch(`http://localhost:3000/garage/${id}`, {
            method: 'GET',
          })

        const carJSON = await fetchCar.json()
        return addObjProperties(carJSON, item)
    }

    function getCars(result: Array<winnerData>) {
        return result.map((item) => getCar(item.id, item))
    }

    function nextPage() {
        setWinPage(winPage + 1)
    }

    function prevPage() {
        setWinPage(winPage - 1)
    }

    return <section className="winners">
        <NavLink textContent={'GARAGE'} link={'/'}/>
        <div className="table-wrap">
            <h2 className='title'>Winners({winCarCount})</h2>
            <h3 className="title page">Page #{winPage}</h3>
            <table className='win-table'>
                <thead>
                    <TableRowHead no='№' id='ID' car='CAR' name='NAME' wins='WINS' time='BEST TIME'/>
                </thead>
                <tbody>
                    {cars.map((item, index) => <TableRow no={String(index + 1)} id={String(item.id)} car={<Car fill={item.color}/>} name={item.name} wins={String(item.wins)} time={item.time + 's'} key={item.id}/>)}
                </tbody>
            </table>
            <div className="button-wrap">
                {winPage === 1 ? <Button disabled={true} class='' textContent='Prev page' onClick={prevPage}/> :
                <Button class='' textContent='Prev page' onClick={prevPage}/>}
                {winPage === Math.ceil(+winCarCount / 10) ? <Button disabled={true} class='' textContent='Next page' onClick={nextPage}/> :
                <Button class='' textContent='Next page' onClick={nextPage}/>        
                } 
            </div>
        </div>
    </section>
}