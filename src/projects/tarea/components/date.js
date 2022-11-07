export const uniqueDates = (tasks) => {
  const unique = [];
  tasks.forEach((task) => {
    if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat);
  });
  return unique.sort((a,b)=>{
    const first = moment(a,"DD/MM/YYYY");
    const second = moment(b,"DD/MM/YYYY");
    return first - second;
  });
};
