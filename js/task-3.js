const findBestEmployee = function(employees) {

  const names = Object.keys(employees);
  const tasks = Object.values(employees);

  let maxNumberOfTasks = tasks[0];
  let maxIndex = 0;

  for (const task of tasks) {
    if (task > maxNumberOfTasks) {
      maxNumberOfTasks = task;
      maxIndex = tasks.indexOf(task);
    }
  }
return names[maxIndex];
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux