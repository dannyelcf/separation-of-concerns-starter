import { state } from '../data/state.js';
import { renderTaskList } from '../procedures/render-task-list.js';

const sortByDone = (t1, t2) => (t1.done ? 1 : 0) - (t2.done ? 1 : 0);

export const checkTaskHandler = (event, taskId) => {
  event.preventDefault();
  const taskFound = state.todoList.find((t) => t.id === taskId);
  if (taskFound) {
    taskFound.done = !taskFound.done;
    state.todoList.sort(sortByDone);
    renderTaskList();
  }
};
