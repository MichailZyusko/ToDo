import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import Button from '../Button/index';
import TextInput from '../Input/index';
import Context from '../../context';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default function Form() {
  const [value, setValue] = useState('');
  const { addTask } = useContext(Context);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <TextInput name="task" placeholder="Input your things" onChange={changeHandler} />
      <Button value={value} onSubmit={addTask}>Add Task</Button>
    </Container>
  );
}
