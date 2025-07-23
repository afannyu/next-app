'use client';

import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function AddTask({
  handleAdd = (value: string) => { },
}) {
  const [value, setValue] = useState('');

  const handleChange = () => {
    handleAdd(value);
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
