import React from 'react';
import { useState } from 'react';
import Item, { items }  from './Item';
import Header from './Header'

export default function Items() {
  const [tasks, setTasks] = useState(items);

  const handleStateUpdate = (arr) => {
    if(arr){
    setTasks(arr);
    }
  }
  return (
    <div>
      <Header tasks={tasks} stateUpdate={handleStateUpdate}/>
      <table className='table'>
        <thead>
        <tr className='table-header'>
          <th>Done</th>
          <th>Task description</th>
          <th>Created</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
          <Item passedTasks={tasks} stateUpdate={handleStateUpdate} />
        </tbody>
      </table>
    </div>
  );
}