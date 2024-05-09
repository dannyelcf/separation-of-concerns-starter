import { state } from '../data/state.js';
import { renderTaskList } from '../procedures/render-task-list.js';

export const addTaskHandler = (customEvent) => {
  const { task } = customEvent.detail;
  if (task) {
    state.todoList.unshift(task);
    renderTaskList();
  }
};
