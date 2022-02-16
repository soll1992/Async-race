import React from 'react';

interface Props {
    inputType: string,
    value?: string,
    disabled?: boolean,
    onChange: React.ChangeEventHandler,
}

export default function CarInput({
  inputType, value, disabled, onChange,
}: Props) {
  return (
    <div>
      {
        disabled ? <input className="input" disabled type={inputType} value={value} onChange={onChange} />
          : <input className="input" type={inputType} value={value} onChange={onChange} />
      }
    </div>
  );
}

CarInput.defaultProps = { value: null, disabled: null };
