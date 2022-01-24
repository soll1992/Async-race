import React from 'react';

interface Props {
    inputType: string,
    value?: string,
    disabled?: boolean,
    onChange: React.ChangeEventHandler,
}

export default function CarInput(props: Props) {
  return <div>
      {
        props.disabled ? <input className='input' disabled type={props.inputType} value={props.value} onChange={props.onChange}/> :
        <input className='input' type={props.inputType} value={props.value} onChange={props.onChange}/>
      }
  </div>;
}
