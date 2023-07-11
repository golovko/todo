import React from "react";

export default function Item({ passedTasks, stateUpdate, text }) {
  let tempArr = [...passedTasks];

  function handleEditTask(id, e, tasks) {
    let tempArr = [...tasks];
    tempArr.forEach((el) => {
      if (el.id === id) {
        el.text = e;
        return;
      }
    });
    stateUpdate(tempArr, e);
  }

  function handleCheckTask(passedTasks, taskId) {
    let tempArr = [...passedTasks];
    tempArr.forEach((el) => {
      if (el.id === taskId) {
        el.status = !el.status;
        return;
      }
    });
    //setTasks(itemsSorting(sorting, tempArr));
    stateUpdate(tempArr);
  }

  function handleDeleteTask(elementId) {
    tempArr = tempArr.filter((el) => el.id !== elementId);
    stateUpdate(tempArr);
  }

  let item = tempArr.map((element) => {
    return (
      <tr key={element.id} className="item">
        <td>
          <input
            type="checkbox"
            checked={element.status}
            onChange={(e) => handleCheckTask(tempArr, element.id)}
          ></input>
        </td>
        <td>
          <input
            type="text"
            value={element.text}
            disabled={element.status}
            onChange={(e) => {
              //setText(e.target.value);
              handleEditTask(element.id, e.target.value, tempArr);
            }}
            size={30}
          />
        </td>
        <td>{element.created.toLocaleDateString("en-GB")}</td>
        <td>
          <button onClick={(e) => handleDeleteTask(element.id)}>
            ❌ Delete
          </button>
        </td>
      </tr>
    );
  });
  return item;
}

//demo data
export const items = [
  {
    id: 0,
    created: new Date("2023-06-01"),
    text: "First task text",
    status: false,
  },
  {
    id: 1,
    created: new Date("2023-06-03"),
    text: "Second super task text",
    status: true,
  },
  {
    id: 2,
    created: new Date("2023-06-11"),
    text: "Third task text",
    status: false,
  },
  {
    id: 3,
    created: new Date("2023-06-23"),
    text: "4 task text",
    status: false,
  },
  { id: 4, created: new Date("2023-07-01"), text: "5 task text", status: true },
  { id: 5, created: new Date("2023-07-07"), text: "6 task text", status: true },
];
