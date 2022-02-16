import React from 'react';

interface Props {
    no: string;
    id: string;
    car: string | React.ReactElement;
    name?: string;
    wins: string;
    time: string;
}

export default function TableRow({
  no, id, car, name, wins, time,
}: Props) {
  return (
    <tr>
      <td>{no}</td>
      <td>{id}</td>
      <td>{car}</td>
      <td>{name}</td>
      <td>{wins}</td>
      <td>{time}</td>
    </tr>
  );
}

TableRow.defaultProps = { name: '' };
