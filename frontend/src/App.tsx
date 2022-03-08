import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SpinnerInfinity } from 'spinners-react';

import Header from './components/Header';
import TaskList from './components/Task/TaskList';
import Form from './components/Form';
import { TTask } from '../types';
import deleteService from './services/deleteService';
import getService from './services/getService';
import creatingService from './services/creatingService';
import updatingService from './services/updateService';
import ErrorBoundary from './components/ErrorBoundary';
import Context from './context';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #E5E5E5;
`;

const TaskListContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 55%;
  max-height: 60vh;
  padding: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.46);
  box-shadow: 5px 10px 20px rgba(173, 173, 173, 0.46);
  backdrop-filter: blur(8px);
  
  width: 35%;
  height: 20vh; 
  padding: 20px;

  border-radius: 50px;
  
  @media (max-width: 768px) {
    width: 70%;
  }
`;

export default function App() {
  const [tasks, setTasks] = useState<TTask[]>([]);

  useEffect(() => {
    getService().then((_tasks) => {
      setTasks(_tasks);
    });
  }, []);

  const removeHandler = async (id: string) => {
    const status = await deleteService(id);

    if (status) {
      const newTasks = tasks.filter((task) => task.id !== id);

      setTasks(newTasks);
    }
  };

  const checkedHandler = async (id: string) => {
    const updatedTask: TTask = await updatingService(id);

    if (updatedTask) {
      const newTasks = tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t));

      setTasks(newTasks);
    }
  };

  const submitHandler = async (value: string) => {
    const newTask: TTask = await creatingService(value);

    setTasks([newTask, ...tasks]);
  };

  return (
    <AppContainer>
      <ErrorBoundary>
        {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
        <Context.Provider value={{ submitHandler, removeHandler, checkedHandler }}>
          {tasks.length
            ? (
              <>
                <TaskListContainer>
                  <Header />
                  <TaskList tasks={tasks} />
                </TaskListContainer>
                <FormContainer>
                  <Form />
                </FormContainer>
              </>
            )
            : <SpinnerInfinity size={150} />}
        </Context.Provider>
      </ErrorBoundary>
    </AppContainer>
  );
}
