'use client';

import React, { useReducer } from 'react';
import AddTask from './components/addTask';
import TaskList from './components/taskList';
import { TasksProvider } from '@/lib/taskContext';

function TodoListAll() {
  // 渲染引用内容
  const renderContent = () => {
    return (
      <blockquote className="p-4 mb-4 border-l-4 border-green-500 bg-green-50 text-gray-700">
        <p>
          Reducer 可以整合组件的状态更新逻辑。Context 可以将信息深入传递给其他组件。<br />
          目前，taskList 状态和 dispatch 函数仅在顶级组件中可用。<br />
          要让其他组件读取taskList或更改它，必须显式传递taskList和事件处理程序(dispatch)，将其作为 props。<br />
          为了优化问题解法，可以把 taskList 状态和 dispatch 函数都放入 context。<br />
          这样，所有的在顶级组件树之下的组件都不必一直往下传 props 而可以直接读取 taskList 和 dispatch 函数。
        </p>
      </blockquote>
    )
  }

  return (
    <>
      {renderContent()}
      <TasksProvider>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </>
  );
}

export default TodoListAll;
