import React from 'react';
import IMG from './components';
// @ts-ignore
import DeleteIcon from '../../assets/icons/delete.svg';
// @ts-ignore
// eslint-disable-next-line import/extensions,import/no-unresolved
import { TOnDelete } from '../../types';

type TProps = {
  onDelete: TOnDelete;
  id: string;
};

export default function Icon({
  onDelete,
  id,
}: TProps) {
  return (
    <IMG
      src={DeleteIcon}
      alt="deleteIcon"
      onClick={() => onDelete(id)}
      style={{ margin: '4px 20px 0 0' }}
    />
  );
}
