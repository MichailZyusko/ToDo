import React from 'react';
import IMG from './components';
// @ts-ignore
import CheckedIcon from '../../assets/icons/checked.svg';
// @ts-ignore
import UncheckedIcon from '../../assets/icons/uncheked.svg';
// @ts-ignore
// eslint-disable-next-line import/extensions,import/no-unresolved
import { TOnComplete } from '../../types';

type TProps = {
  onComplete: TOnComplete;
  isChecked: boolean;
};

export default function Checkbox({
  onComplete,
  isChecked,
}: TProps) {
  return (
    <IMG
      src={isChecked ? CheckedIcon : UncheckedIcon}
      alt={isChecked ? 'checked' : 'unchecked'}
      onClick={onComplete}
      style={{
        margin: '0 20px',
        width: '30px',
        height: '30px',
      }}
    />
  );
}
