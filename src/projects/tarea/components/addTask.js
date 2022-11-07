import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTask } from "./displayTask.js";

export const addTask = (evento) => {
  evento.preventDefault();
  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");
  const complete = false;
  const date = calendar.value;
  const dateFormat = date != "" ? moment(date).format("DD/MM/YYYY") : "";
  const value = input.value;

  if (value == "" || dateFormat == "") {
    alert("Campos basios");
    return;
  }

  input.value = "";
  calendar.value = "";
  const taskObj = {
    value,
    dateFormat,
    complete,
    id: uuid.v4(),
  };

  const taskList = JSON.parse(localStorage.getItem("task")) || [];
  taskList.push(taskObj);
  localStorage.setItem("task", JSON.stringify(taskList));
  displayTask();
};

export const createTask = ({ value, dateFormat, complete, id }) => {
  const task = document.createElement("li");
  task.classList.add("card");

  const taskContent = document.createElement("div");

  const check = checkComplete(id);
  if(complete){
    check.classList.toggle('fas');
    check.classList.toggle('completeIcon');
    check.classList.toggle('far');
  }

  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(check);
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;

  task.appendChild(taskContent);
  task.appendChild(deleteIcon(id));
  return task;
};
