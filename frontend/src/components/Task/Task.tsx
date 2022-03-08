import React from 'react';
import styled from 'styled-components';
// @ts-ignore
// eslint-disable-next-line import/extensions,import/no-unresolved
import Checkbox from '../Icon/CheckboxIcon.tsx';
// @ts-ignore
// eslint-disable-next-line import/extensions,import/no-unresolved
import DeleteIcon from '../Icon/DeleteIcon.tsx';

type TProps = {
  id: string;
  label: string;
  isCompleted: boolean;
  // eslint-disable-next-line no-unused-vars
  onDelete: (id: string) => void;
  // eslint-disable-next-line no-unused-vars
  onComplete: (id: string) => void;
};

const Text = styled.h2<{ isChecked: boolean }>`
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
`;

export default function Task({
  id,
  label,
  isCompleted,
  onDelete,
  onComplete,
}: TProps) {
  return (
    <>
      <>
        <Checkbox
          isChecked={isCompleted}
          onComplete={() => onComplete(id)}
        />
        <Text isChecked={isCompleted}>{label}</Text>
      </>
      <div style={{
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
      }}
      >
        <DeleteIcon onDelete={onDelete} id={id} />
      </div>
    </>
  );
}
