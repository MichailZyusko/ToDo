export type TTask = {
  id: string;
  label: string;
  isCompleted: boolean;
  createdAt: number;
};

export type TContext = {
  addTask: (label: string) => void;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
};
