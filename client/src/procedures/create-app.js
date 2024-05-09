import { addTaskComponent } from '../components/add-task-component.js';
import { taskListComponent } from '../components/task-list-component.js';
import { addTaskListener } from '../listeners/add-task-listener.js';
import { checkTaskListener } from '../listeners/check-task-listener.js';
import { deleteTaskListener } from '../listeners/delete-task-listener.js';

import { renderTaskList } from './render-task-list.js';

export const createApp = (element) => {
  element.appendChild(addTaskComponent());
  element.appendChild(taskListComponent());

  renderTaskList();

  addTaskListener();
  deleteTaskListener();
  checkTaskListener();
};
