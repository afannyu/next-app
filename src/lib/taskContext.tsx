import { createContext, useReducer, ReactNode, useContext } from "react";
import taskReducer from "./taskReducer";
import { Task } from '@/types'

interface TasksProviderProps {
  children: ReactNode;
}

const init = [
  { id: 0, text: '你好哈哈哈', done: false }
];

const taskListContext = createContext<Task[] | undefined>(undefined);
const taskDispatchContext = createContext<React.Dispatch<any> | undefined>(undefined);

export function useTaskList() {
  return useContext(taskListContext);
};

export function useTaskDispatch() {
  return useContext(taskDispatchContext);
};

export function TasksProvider({ children }: TasksProviderProps) {
  const [taskList, dispatch] = useReducer(taskReducer, init);

  return (
    <taskListContext.Provider value={taskList}>
      <taskDispatchContext.Provider value={dispatch}>
        {children}
      </taskDispatchContext.Provider>
    </taskListContext.Provider>
  )
}