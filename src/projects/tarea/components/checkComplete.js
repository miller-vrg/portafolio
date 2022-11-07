const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', (evento)=>completeTask(evento,id));
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (evento,id) => {
  const element = evento.target;
  console.log(id);
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  const tasks = JSON.parse(localStorage.getItem("task"));
  const index = tasks.findIndex(task => task.id === id);
  tasks[index].complete = !tasks[index].complete;
  localStorage.setItem("task", JSON.stringify(tasks));
};

export default checkComplete;
