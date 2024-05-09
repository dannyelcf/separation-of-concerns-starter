import { taskComponent } from '../components/task-component.js';
import { LIST_CONTAINER_ID } from '../data/constants.js';
import { state } from '../data/state.js';
import { checkTaskListener } from '../listeners/check-task-listener.js';
import { deleteTaskListener } from '../listeners/delete-task-listener.js';

export const renderTaskList = () => {
  const taskListContainer = document.getElementById(LIST_CONTAINER_ID);
  taskListContainer.innerHTML = '';
  state.todoList.forEach((task) => {
    const taskDiv = taskComponent(task);
    checkTaskListener(taskDiv);
    deleteTaskListener(taskDiv);
    taskListContainer.append(taskDiv);
  });
};
