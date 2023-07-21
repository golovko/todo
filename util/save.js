import { getSession } from "next-auth/react";

const saveTask = async function ({ user, task, method }) {
  switch (method) {
    case "POST":
      await fetch("/api/tasks", {
        credentials: "include",
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      return true;
    case "PUT":
      let url = "/api/tasks/"+task.id;
      await fetch(url, {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      return true;
    case "DELETE":
      await fetch("/api/tasks/" + task.id, {
        method: method
      });
      return true;
  }
};

export default saveTask;
