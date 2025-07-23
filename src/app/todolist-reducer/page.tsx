/**
 * 使用 reducer 管理状态与直接设置状态略有不同。
 * 它不是通过设置状态来告诉 React “要做什么”，而是通过事件处理程序 dispatch 一个 “action” 来指明 “用户刚刚做了什么”。
 * （而状态更新逻辑则保存在其他地方！）因此，我们不再通过事件处理器直接 “设置 task”，
 * 而是 dispatch 一个 “添加/修改/删除任务” 的 action。这更加符合用户的思维。
 */

'use client';

import React, { useReducer } from 'react';
import AddTask from './components/addTask';
import TaskList from './components/taskList';
import taskReducer from '@/lib/taskReducer';
import { Task } from '@/types';

const init: Task[] = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];

function TodoListReducer() {
  const [taskList, dispatch] = useReducer(taskReducer, init)

  const handleAdd = (text: string) => {
    dispatch({
      type: 'add',
      id: taskList.length,
      text,
    })
  };

  const handleEdit = (task: Task) => {
    dispatch({
      type: 'edit',
      task,
    })
  };

  const handleDelete = (id: number) => {
    dispatch({
      type: 'delete',
      id,
    })
  };

  return (
    <>
      <AddTask handleAdd={handleAdd} />
      <TaskList taskList={taskList} handleEdit={handleEdit} handleDelete={handleDelete} />
    </>
  );
}

export default TodoListReducer;
