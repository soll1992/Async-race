import React from 'react';

interface Props {
    inputType: string,
    onChange: React.ChangeEventHandler,
}

export default function CarInput(props: Props) {
  return <div>
      <input type={props.inputType} onChange={props.onChange}/>
  </div>;
}
