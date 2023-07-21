"use client";

import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";
import Header from "./Header";

export default function Items() {
  const [tasks, setTasks] = useState([]);

  // load tasks from DB
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("./api/tasks");
      const data = await response.json();
      if(response.status == 200){setTasks(data);
      }
    };
    fetchTasks();
  }, []);

  const handleStateUpdate = (arr) => {
    if (arr) {
      setTasks(arr);
    }
  };

  return (
    <div>
      <Header tasks={tasks} stateUpdate={handleStateUpdate} />
      <table className="table">
        <thead>
          <tr className="table-header">
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
