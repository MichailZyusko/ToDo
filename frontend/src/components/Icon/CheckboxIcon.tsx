import React, { useCallback } from 'react';
import Img from './components';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CheckedIcon from '../../assets/icons/checked.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import UncheckedIcon from '../../assets/icons/uncheked.svg';

type TProps = {
  onComplete: (id: string) => void;
  isCompleted: boolean;
  id: string;
};

export default function Checkbox({ onComplete, isCompleted, id }: TProps) {
  const toggleHandler = useCallback(() => onComplete(id), [id, onComplete]);

  return (
    <Img
      src={isCompleted ? CheckedIcon : UncheckedIcon}
      alt={isCompleted ? 'checked' : 'unchecked'}
      onClick={toggleHandler}
      style={{
        margin: '0 20px',
        width: '30px',
        height: '30px',
      }}
    />
  );
}
