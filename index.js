function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false
  };
  return task;
}

function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? ' ' : ' not '}been completed`);
}

function completeTask(task) {
  task.complete = true;
}

const task1 = newTask('Clean Cat Litter', 'Take all the 💩 out of the litter box');
const task2 = newTask('Do laundry', '🙃');
const tasks = [task1, task2];

logTaskState(task1);
completeTask(task1);
logTaskState(task1);

console.log(tasks);
