/* eslint-disable no-unused-vars */

export type TOnInputChange = (value: string) => void;
export type TOnSubmit = (value: string) => void;
export type TOnDelete = (id: string) => void;
export type TOnComplete = (id: string) => void;

export type TTask = {
  id: string;
  label: string;
  isCompleted: boolean;
  createdAt: number;
};
