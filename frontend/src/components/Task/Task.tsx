import React, { useContext } from 'react';
import styled from 'styled-components';
import Checkbox from '../Icon/CheckboxIcon';
import DeleteIcon from '../Icon/DeleteIcon';
import Context from '../../context';

type TProps = {
  id: string;
  label: string;
  isCompleted: boolean;
};

const Text = styled.h2<{ isChecked: boolean }>`
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export default function Task({ id, label, isCompleted }: TProps) {
  const { removeHandler, checkedHandler } = useContext(Context);

  return (
    <>
      <>
        <Checkbox
          isCompleted={isCompleted}
          onComplete={checkedHandler}
          id={id}
        />
        <Text isChecked={isCompleted}>{label}</Text>
      </>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <DeleteIcon onDelete={removeHandler} id={id} />
      </div>
    </>
  );
}
