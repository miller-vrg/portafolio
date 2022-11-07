import { displayTask } from "./displayTask.js";

const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', ()=>deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const tasks = JSON.parse(localStorage.getItem("task"));
  const index = tasks.findIndex(task => task.id === id);
  tasks.splice(index,1);
  localStorage.setItem("task", JSON.stringify(tasks));
  displayTask();
};

export default deleteIcon;
