"use client";

import React, { useState, useEffect } from "react";
import saveTask from "util/save";

export default function Item({ passedTasks, stateUpdate, text }) {
  let tempArr = [...passedTasks];

  function handleEditTask(task, e, tasks) {
    tempArr = [...tasks];
    tempArr.forEach((el) => {
      if (el.id === task.id) {
        el.content = e;
        return;
      }
    });
    stateUpdate(tempArr, e);
  }

  function handleCheckTask(passedTasks, task) {
    tempArr = [...passedTasks];
    tempArr.forEach((el) => {
      if (el.id === task.id) {
        el.status = !el.status;
        return;
      }
    });
    //setTasks(itemsSorting(sorting, tempArr));
    saveTask({ task: task, method: "PUT" });
    stateUpdate(tempArr);
  }

  function handleDeleteTask(task) {
    tempArr = tempArr.filter((t) => t.id !== task.id);
    stateUpdate(tempArr);
    saveTask({ task: task, method: "DELETE" });
  }

  let item = tempArr.map((element) => {
    return (
      <tr key={element.id} className="item">
        <td>
          <input
            type="checkbox"
            checked={element.status}
            onChange={(e) => handleCheckTask(tempArr, element)}
          />
        </td>
        <td>
          <input
            key={"inp" + element.id}
            type="text"
            value={element.content}
            disabled={element.status}
            onBlur={() => saveTask({ task: element, method: "PUT" })}
            onChange={(e) => {
              handleEditTask(element, e.target.value, tempArr);
            }}
            size={30}
          />
        </td>
        <td>{element.createdAt}</td>
        <td>
          <button onClick={(e) => handleDeleteTask(element)}>❌ Delete</button>
        </td>
      </tr>
    );
  });
  return item;
}
