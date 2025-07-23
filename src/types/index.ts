export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export type TaskAction =
  | { type: 'add'; id: number; text: string }
  | { type: 'edit'; task: Task }
  | { type: 'delete'; id: number }