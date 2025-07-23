import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Task } from '@/types';
import { useTaskDispatch, useTaskList } from '@/lib/taskContext';

interface TaskItemProps {
  task: Task
}

const TaskItem = ({ task }: TaskItemProps) => {
  const dispatch = useTaskDispatch();
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="flex items-center space-x-2 my-4">
      <Checkbox />
      <div className="flex items-center gap-2">
        {isEditing ? (
          <Input
            className="w-64"
            value={task.text}
            onChange={(e) => {
              if (dispatch) {
                dispatch({
                  type: 'edit',
                  task: { ...task, text: e.target.value }
                });
              }
            }}
          />
        ) : (
          <div className="w-64 truncate">{task.text}</div>
        )}

        <Button onClick={() => setIsEditing(!isEditing)} variant="secondary">
          {isEditing ? '保存' : '编辑'}
        </Button>
      </div>

      <Button onClick={() => {
        if (dispatch) {
          dispatch({
            type: 'delete',
            id: task.id
          })
        }
      }} variant="secondary">删除</Button>
    </div>
  )
}

function TaskList() {
  const taskList = useTaskList();
  return (
    <>
      {
        taskList?.map(item => <TaskItem task={item} key={item.id} />)
      }
    </>
  );
}

export default TaskList;
