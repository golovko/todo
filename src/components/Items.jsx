import * as React from 'react';

import { useState } from 'react';

const items = [
  { id: 0, created: '01/06/2023', text: 'First task text', status: false },
  {
    id: 1,
    created: '02/06/2023',
    text: 'Second super task text',
    status: true,
  },
  { id: 2, created: '02/06/2023', text: 'Third task text', status: false },
  { id: 3, created: '03/06/2023', text: '4 task text', status: false },
  { id: 4, created: '04/06/2023', text: '5 task text', status: true },
  { id: 5, created: '04/06/2023', text: '6 task text', status: true },
];

export default function Items(newText, event) {
  const [text, setText] = useState('new task');
  const [tasks, setTasks] = useState(items);
  const [id, setId] = useState(items.length);

  function handleAddTask() {
    let date = new Date();
    setId(id + 1);
    let tempArr = [...tasks];
    tempArr.unshift({
      created: date.toLocaleDateString(),
      id: id,
      text: text,
      status: false,
    });
    setTasks(tempArr);
  }

  function handleCheckTask(taskId) {
    let tempArr = [...tasks];
    tempArr.forEach(el => {
      if (el.id === taskId) {
        el.status = !el.status;
        return;
      }
    });
    setTasks(tempArr);
  }

  function handleDeleteTask(elementId) {
    let tempArr = [...tasks];
    tempArr = tempArr.filter((el) => el.id !== elementId);
    setTasks(tempArr);
  }

  function handleEditTask(id, e) {
    let tempArr = [...tasks];
    tempArr.forEach(el => {
      if (el.id === id) {
        el.text = e;
        return;
      }
    });
    setTasks(tempArr);
  }

  let item = tasks.map((element) => {
    return (
      <li key={element.id}>
        <p className="item">
          <input
            type="text"
            value={element.text}
            disabled={element.status}
            onChange={(e) => {
              setText(e.target.value);
              handleEditTask(element.id, e.target.value);
            }}
            size={30}
          />
          {element.created}
          <input
            type="checkbox"
            checked={element.status}
            onChange={(e) => handleCheckTask(element.id)}
          ></input>
          <button 
            onClick={(e) => handleDeleteTask(element.id)}>
              Del
          </button>
        </p>
      </li>
    );
  });

  return (
    <div>
      <div>
        <input
          key="mainInput"
          type="text"
          placeholder="New Task"
          onChange={(e) => setText(e.target.value)}
          size={30}
          onKeyDown={(e) => (e.key === 'Enter' ? handleAddTask() : null)}
        />
        <button onClick={e=>{
          handleAddTask();
          setText('')}}>
          Add
        </button>
      </div>
      <ol>{item}</ol>
    </div>
  );
}
