import { state } from '../data/state.js';
import { renderTaskList } from '../procedures/render-task-list.js';

export const checkTaskHandler = (customEvent) => {
  const { task } = customEvent.detail;
  if (task) {
    const taskFound = state.todoList.find((t) => t.id === task.id);
    if (taskFound) {
      taskFound.done = !taskFound.done;
      renderTaskList();
    }
  }
};
