import React from 'react';

interface Props {
    no: string,
    id: string,
    car: string | JSX.Element
    name?: string,
    wins: string,
    time: string
    sortWins?: () => void
    sortTime?: () => void
}

export function TableRowHead(props: Props) {
    return <tr>
        <th>{props.no}</th>
        <th>{props.id}</th>
        <th>{props.car}</th>
        <th>{props.name}</th>
        <th className='sort-button' onClick={props.sortWins}>{props.wins}</th>
        <th className='sort-button' onClick={props.sortTime}>{props.time}</th>
    </tr>;
}

export function TableRow(props: Props) {
    return <tr>
        <td>{props.no}</td>
        <td>{props.id}</td>
        <td>{props.car}</td>
        <td>{props.name}</td>
        <td>{props.wins}</td>
        <td>{props.time}</td>
    </tr>;
  }
