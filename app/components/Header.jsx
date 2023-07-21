"use client";

import { useState } from "react";
import saveTask from "util/save";
import { useSession, getSession } from "next-auth/react";

export default function Header({ stateUpdate, tasks }) {
  const { data: session, status } = useSession();
  const [text, setText] = useState("Add Task");
  const [sorting, setSorting] = useState("default");
  const key = () => crypto.randomUUID();
  const [id, setId] = useState(key());

  function handleAddTask() {
    let tempArr = [...tasks];
    let task = {
      content: text,
      status: false,
    };
    delete task.createdAt;

    if(session){
      task.authorId = session.user.id;
      saveTask({ task: task, method: "POST" });
    } else {
      task.authorId = "demoUser";
      saveTask({ task: task, method: "POST" });
    }
    task.id = id;
    task.createdAt = Date();
    tempArr.unshift(task);
    itemsSorting(stateUpdate, sorting, tempArr);
    setText("");
    setId(key());
  }

  return (
    <>
      <form>
        <div className="relative">
          <input
            onKeyDown={(e) => (e.key === "Enter" ? handleAddTask() : null)}
            onChange={(e) => setText(e.target.value)}
            key={id}
            type="text"
            className="add-task"
            placeholder="Add new task"
            required
          />
          <button
            type="submit"
            className="button"
            onClick={() => {
              handleAddTask();
            }}
          >
            + Add
          </button>
        </div>
      </form>
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
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
  } else if (sorting === "name") {
    tempArr.sort((a, b) =>
      a.content.toLowerCase() > b.content.toLowerCase() ? 1 : -1
    );
  } else if (sorting === "status") {
    tempArr.sort((a, b) => a.status - b.status);
  }
  if (sorting === "default") {
    tempArr.sort((a, b) => {
      return a.id > b.id ? 1 : -1;
    });
  }
  stateUpdate(tempArr);
}
