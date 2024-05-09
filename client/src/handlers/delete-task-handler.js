import { state } from '../data/state.js';
import { renderTaskList } from '../procedures/render-task-list.js';

export const deleteTaskHandler = (event, taskId) => {
  event.preventDefault();
  state.todoList = state.todoList.filter((t) => t.id !== taskId);
  renderTaskList();
};
