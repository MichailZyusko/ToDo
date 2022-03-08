import React from 'react';
import styled from 'styled-components';
import Task from './Task';
import { TTask } from '../../../types';

type TProps = {
  tasks: Array<TTask>;
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
  padding: 5px;

  width: 100%;
`;

const LI = styled.li<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  background: ${(props) => (props.isChecked ? 'rgba(173, 173, 173, 0.46)' : 'rgba(255, 255, 255, 0.46)')};
  box-shadow: 0 5px 7px rgba(156, 156, 156, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 30px;
  width: 100%;
  margin-bottom: 20px;
`;

export default function TaskList({ tasks }: TProps) {
  return (
    <TaskListContainer>
      <UL>
        {tasks.map((task) => (
          <LI key={task.id} isChecked={task.isCompleted}>
            <Task {...task} />
          </LI>
        ))}
      </UL>
    </TaskListContainer>
  );
}
