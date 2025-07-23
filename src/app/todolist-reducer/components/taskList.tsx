import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Task } from '@/types';

interface TaskListProps {
  taskList?: Task[];
  handleEdit: (task: Task) => void;
  handleDelete: (id: number) => void;
}

interface TaskProps {
  task: Task;
  handleEdit: (task: Task) => void;
  handleDelete: (id: number) => void;
}

const TaskItem = ({
  task,
  handleEdit,
  handleDelete,
}: TaskProps) => {
  const [isEditing, setIsEditing] = useState(true);
  
  return (
    <div className="flex items-center space-x-2 my-4">
      <Checkbox />
      <div className="flex items-center gap-2">
        {isEditing ? (
          <Input
            className="w-64"
            value={task.text}
            onChange={(e) => handleEdit({ ...task, text: e.target.value })}
          />
        ) : (
          <div className="w-64 truncate">{task.text}</div>
        )}

        <Button onClick={() => setIsEditing(!isEditing)} variant="secondary">
          {isEditing ? '保存' : '编辑'}
        </Button>
      </div>

      <Button onClick={() => handleDelete(task.id)} variant="secondary">删除</Button>
    </div>
  )
}

function TaskList({
  taskList = [],
  handleEdit,
  handleDelete,
}: TaskListProps) {
  return (
    <>
      {
        taskList?.map(item => <TaskItem task={item} key={item.id} handleEdit={handleEdit} handleDelete={handleDelete} />)
      }
    </>
  );
}

export default TaskList;
