import { useState } from "react";

export default function Header({ stateUpdate, tasks }) {
  const [text, setText] = useState("Add Task");
  const [sorting, setSorting] = useState("default");
  const key = () => crypto.randomUUID();
  const [id, setId] = useState(key());

  function handleAddTask() {
    let tempArr = [...tasks];
    tempArr.unshift({
      created: new Date(),
      id: key(),
      text: text,
      status: false,
    });
    itemsSorting(stateUpdate, sorting, tempArr);
    setText("");
    setId(key());
  }

  return (
    <>
      <div>
        <input
          key={id}
          type="text"
          placeholder="Add Task"
          onChange={(e) => setText(e.target.value)}
          size={30}
          onKeyDown={(e) => (e.key === "Enter" ? handleAddTask() : null)}
        />
        <button
          onClick={() => {
            handleAddTask();
          }}
        >
          Add
        </button>
      </div>
      <div className="box">
        <label className="item">Sorting by: </label>
        <select
          name="sorting"
          defaultValue={sorting}
          onChange={(e) => {
            setSorting(e.target.value);
            itemsSorting(stateUpdate, e.target.value, tasks);
          }}
        >
          <option value="default">default</option>
          <option value="status">status</option>
          <option value="age">age</option>
          <option value="name">name</option>
        </select>
      </div>
    </>
  );
}

function itemsSorting(stateUpdate, sorting, arr) {
  let tempArr = [...arr];
  if (sorting === "age") {
    tempArr.sort((a, b) => {
      return a.created - b.created;
    });
  } else if (sorting === "name") {
    tempArr.sort((a, b) =>
      a.text.toLowerCase() > b.text.toLowerCase() ? 1 : -1
    );
  } else if (sorting === "status") {
    tempArr.sort((a, b) => a.status - b.status);
  }
  if (sorting === "default") {
    tempArr.sort((a, b) => {
      return a.id - b.id;
    });
  }
  stateUpdate(tempArr);
}
