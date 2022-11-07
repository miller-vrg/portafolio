import { createTask } from "./addTask.js";
import { uniqueDates } from "./date.js";
import dateElement from "./dateElement.js";

export const displayTask = () => {
  const taskList = JSON.parse(localStorage.getItem("task")) || [];
  const list = document.querySelector("[data-list]");
  list.innerHTML= "";
  const date = uniqueDates(taskList);
  console.log(taskList);
  date.forEach((fecha) => {
    list.appendChild(dateElement(fecha));
    const dateMoment = moment(fecha,"DD/MM/YYYY");
    taskList.forEach((task) => {
        const taskMoment = moment(task.dateFormat,"DD/MM/YYYY");
        const diff = dateMoment.diff(taskMoment);
        if (diff == 0) {
        list.appendChild(createTask(task));
      }
    });
  });

};
