export type TTask = {
  id: string;
  label: string;
  isCompleted: number;
  createdAt: number;
};

export type TTaskMapped = {
  id: string;
  label: string;
  isCompleted: boolean;
  createdAt: number;
};

export type TParams = {
  id: string;
};

export type TBody = {
  label: string;
};
