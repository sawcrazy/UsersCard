import React, {FC, ReactNode} from 'react';
import s from './style.module.css';

interface IButton {
  children: ReactNode;
  onClick(): void;
}

export const Button: FC<IButton> = ({onClick, children}) => {
  return (
    <button className={s.button} onClick={onClick}>
      {children}
    </button>
  )
}