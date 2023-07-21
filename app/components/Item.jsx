"use client";

import React, { useState, useEffect } from "react";
import saveTask from "util/save";

export default function Item({ passedTasks, stateUpdate, text }) {
  let tempArr = [...passedTasks];
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };

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
        delete el.createdAt;
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
        <td><div className="flex items-center">
          <input 
            type="checkbox"
            className="checkbox"
            checked={element.status}
            onChange={(e) => handleCheckTask(tempArr, element)}
          />
          </div>
        </td>
        <td>
          <input
            key={"inp" + element.id}
            type="text"
            value={element.content}
            disabled={element.status}
            onBlur={() => {
              delete element.createdAt; 
              saveTask({ task: element, method: "PUT" })
              }
            }
            onChange={(e) => {
              handleEditTask(element, e.target.value, tempArr);
            }}
            size={30}
          />
        </td>
        <td>{new Date(element.createdAt).toLocaleDateString('en-GB', options)}</td>
        <td>
          <button  onClick={(e) => handleDeleteTask(element)}>❌ Delete</button>
        </td>
      </tr>
    );
  });
  return item;
}
