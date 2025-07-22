'use client';

import React, { useEffect, useState } from 'react';
import AddTask from './components/addTask';
import TaskList from './components/taskList';
import { Task } from '@/types';

const init: Task[] = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];

function TodoList() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  // 新增记录
  const handleAdd = (text: string) => {
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text,
        done: false,
      }
    ])
  };

  // 编辑记录
  const handleEdit = (task: Task) => {
    const _newList = taskList?.map(item => {
      if (item.id === task.id) {
        return task
      }
      return item
    })
    setTaskList(_newList)
  };

  // 删除记录
  const handleDelete = (id: number) => {
    setTaskList(taskList.filter(item => item.id !== id));
  };

  useEffect(() => {
    setTaskList(init);
  }, []);

  return (
    <>
      <AddTask handleAdd={handleAdd} />
      <TaskList taskList={taskList} handleEdit={handleEdit} handleDelete={handleDelete} />
    </>
  );
}

export default TodoList;
