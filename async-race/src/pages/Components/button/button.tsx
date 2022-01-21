import React from 'react';

interface Props {
    class: string,
    textContent: string | number,
    disabled?: boolean,
    onClick?: React.MouseEventHandler,
}

export default function Button(props: Props) {
  return <div>
      {
        props.disabled ? <button disabled className={props.class} onClick={props.onClick}>{props.textContent}</button> :
        <button className={props.class} onClick={props.onClick}>{props.textContent}</button>
      }
  </div>;
}
