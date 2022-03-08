import React, { useCallback } from 'react';
import Img from './components';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DeleteIcon from '../../assets/icons/delete.svg';

type TProps = {
  onDelete: (id: string) => void;
  id: string;
};

export default function Icon({ onDelete, id }: TProps) {
  const onDeleteHandler = useCallback(() => onDelete(id), [id, onDelete]);

  return (
    <Img
      src={DeleteIcon}
      alt="deleteIcon"
      onClick={onDeleteHandler}
      style={{ margin: '4px 20px 0 0' }}
    />
  );
}
