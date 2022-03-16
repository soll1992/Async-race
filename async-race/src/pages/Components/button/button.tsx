import React from 'react';

interface Props {
    buttonClass: string;
    textContent: string | number;
    disabled?: boolean | null;
    refer?: React.MutableRefObject<HTMLButtonElement | null> | null;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button({
  disabled,
  buttonClass,
  refer,
  textContent,
  onClick,
}: Props) {
  return (
    <div>
      {disabled ? (
        <button
          ref={refer}
          disabled
          className={buttonClass}
          type="button"
          onClick={onClick}
        >
          {textContent}
        </button>
      ) : (
        <button
          ref={refer}
          className={buttonClass}
          type="button"
          onClick={onClick}
        >
          {textContent}
        </button>
      )}
    </div>
  );
}

Button.defaultProps = { disabled: null, refer: null, onClick: undefined };
