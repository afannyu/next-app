'use client';

import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTaskDispatch, useTaskList } from '@/lib/taskContext';

function AddTask() {
  const dispatch = useTaskDispatch();
  const taskList = useTaskList();
  const [value, setValue] = useState('');

  const handleChange = () => {
    if (dispatch) {
      dispatch({
        type: 'add',
        id: taskList?.length,
        text: value,
      });
    }
    setValue('');
  }

  return (
    <div className="flex items-center space-x-2">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={handleChange} variant="secondary">新增</Button>
    </div>
  );
}

export default AddTask;
