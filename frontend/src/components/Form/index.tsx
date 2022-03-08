import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/index';
import TextInput from '../Input/index';
// @ts-ignore
// eslint-disable-next-line import/extensions,import/no-unresolved
import { TOnSubmit } from '../../types/index';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

type TProps = {
  onSubmit: TOnSubmit;
};

export default function Form({ onSubmit }: TProps) {
  const [value, setValue] = useState('');

  const changeHandler = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <TextInput name="task" onChange={changeHandler} />
      <Button onClick={onSubmit} value={value}>Add Task</Button>
    </Container>
  );
}
