import React from 'react';

interface Props {
    class: string,
    textContent: string | number,
    disabled?: boolean,
    refer?: React.MutableRefObject<HTMLButtonElement | null>
    onClick?: React.MouseEventHandler,
}

export default function Button(props: Props) {
  return <div>
      {
        props.disabled ? <button ref={props.refer} disabled className={props.class} onClick={props.onClick}>{props.textContent}</button> :
        <button ref={props.refer} className={props.class} onClick={props.onClick}>{props.textContent}</button>
      }
  </div>;
}
