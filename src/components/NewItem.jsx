import React from 'react';
import { useState } from 'react';

function Save(task, currentDay){
    //alert(task);
//todo: save task to ItemsArr
}

export default function NewItem() {
    const [text, setText] = useState("new task")

  return (
    <div>
        <input 
            type='text' 
            placeholder={text} 
            onChange={e => setText(e.target.value)} 
            onSubmit={Save(text)}
        />
        <button>Add</button>
    </div>
  );
}