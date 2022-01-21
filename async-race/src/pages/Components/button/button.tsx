import React from 'react';

interface Props {
    class: string,
    textContent: string | number,
    onClick?: React.MouseEventHandler,
}

export default function Button(props: Props) {
  return <div>
      <button className={props.class} onClick={props.onClick}>{props.textContent}</button>
  </div>;
}
