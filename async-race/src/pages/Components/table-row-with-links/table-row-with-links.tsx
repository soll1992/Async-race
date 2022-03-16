import React from 'react';

interface Props {
    no: string;
    id: string;
    car: string | React.ReactElement;
    name?: string;
    wins: string;
    time: string;
    sortWins: () => void;
    sortTime: () => void;
}

export default function TableRowHead({
  no,
  id,
  car,
  name,
  wins,
  time,
  sortTime,
  sortWins,
}: Props) {
  return (
    <tr>
      <th>{no}</th>
      <th>{id}</th>
      <th>{car}</th>
      <th>{name}</th>
      <th className="sort-button" onClick={sortWins}>
        {wins}
      </th>
      <th className="sort-button" onClick={sortTime}>
        {time}
      </th>
    </tr>
  );
}

TableRowHead.defaultProps = { name: '' };
