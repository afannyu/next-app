import { Task, TaskAction } from '@/types/index';

export default function taskReducer(taskList: Task[], action: TaskAction) {
  switch (action.type) {
    case 'add': {
      return [
        ...taskList,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'edit': {
      return taskList.map(item => {
        if (item.id === action.task.id) {
          return action.task
        }
        return item
      });
    }
    case 'delete': {
      return taskList.filter(item => item.id !== action.id);
    }
  }
}