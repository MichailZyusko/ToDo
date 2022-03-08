import React from 'react';
import styled from 'styled-components';
import Task from './Task';
import { TTask } from '../../../types';

type TProps = {
  tasks: Array<TTask>;
  // eslint-disable-next-line no-unused-vars
  removeHandler: (id: string) => void;
  // eslint-disable-next-line no-unused-vars
  checkedHandler: (id: string) => void;
};

const TaskListContainer = styled.div`
  display: flex;
  flex: 8;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 62vh;

  width: 100%;
`;

const UL = styled.ul`
  list-style-type: none;
  overflow-x: scroll;
  
  display: flex;
  flex: 1;
  flex-direction: column;

  width: 100%;
`;

const LI = styled.li<{ checked: boolean }>`
  display: flex;
  align-items: center;
  background: ${(props) => (props.checked ? 'rgba(173, 173, 173, 0.46)' : 'rgba(255, 255, 255, 0.46)')};
  box-shadow: 0 5px 7px rgba(156, 156, 156, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 30px;
  width: 100%;
  margin-bottom: 20px;
`;

export default function TaskList({
  tasks,
  removeHandler,
  checkedHandler,
}: TProps) {
  return (
    <TaskListContainer>
      <UL style={{
        listStyleType: 'none',
        padding: '5px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        width: '100%',
      }}
      >
        {tasks.map((task) => (
          <LI key={task.id} checked={task.isCompleted}>
            <Task {...task} onDelete={removeHandler} onComplete={checkedHandler} />
          </LI>
        ))}
      </UL>
    </TaskListContainer>
  );
}
