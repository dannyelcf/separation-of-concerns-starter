import { state } from '../data/state.js';
import { renderTaskList } from '../procedures/render-task-list.js';

export const deleteTaskHandler = (customEvent) => {
  const { task } = customEvent.detail;
  if (task) {
    state.todoList = state.todoList.filter((t) => t.id !== task.id);
    renderTaskList();
  }
};
