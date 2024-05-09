import { taskComponent } from '../components/task-component.js';
import { LIST_CONTAINER_ID } from '../data/constants.js';
import { state } from '../data/state.js';

export const renderTaskList = () => {
  const taskListContainer = document.getElementById(LIST_CONTAINER_ID);
  taskListContainer.innerHTML = '';
  state.todoList.forEach((task) => {
    taskListContainer.append(taskComponent(task));
  });
};
