import React, { useEffect, useMemo, useState } from 'react';
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
import { AppContainer, FormContainer, TaskListContainer } from './components/Containers';
import Loader from './components/Loader';

export default function App() {
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getService().then((_tasks) => {
      setTasks(_tasks);
      setIsLoading(true);
    });
  }, []);

  const removeTask = async (id: string) => {
    setIsLoading(false);
    const status = await deleteService(id);

    if (status) {
      const newTasks = tasks.filter((task) => task.id !== id);

      setTasks(newTasks);
    }
    setIsLoading(true);
  };

  const toggleTask = async (id: string) => {
    setIsLoading(false);
    const updatedTask: TTask = await updatingService(id);

    if (updatedTask) {
      const newTasks = tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t));

      setTasks(newTasks);
    }
    setIsLoading(true);
  };

  const addTask = async (value: string) => {
    setIsLoading(false);
    const newTask: TTask = await creatingService(value);

    setTasks([newTask, ...tasks]);
    setIsLoading(true);
  };

  const initialState = useMemo(() => ({
    removeTask,
    toggleTask,
    addTask,
  }), [removeTask, toggleTask, addTask]);

  if (!isLoading) {
    return <Loader />;
  }

  return (
    <AppContainer>
      <ErrorBoundary>
        <Context.Provider value={initialState}>
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
            : (
              <>
                <TaskListContainer>
                  <h1>Empty task list. Enjoy your time</h1>
                </TaskListContainer>
                <FormContainer>
                  <Form />
                </FormContainer>
              </>
            )}
        </Context.Provider>
      </ErrorBoundary>
    </AppContainer>
  );
}
