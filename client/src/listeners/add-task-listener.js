import { ADD_CONTAINER_ID, ADD_TASK } from '../data/constants.js';
import { addTaskHandler } from '../handlers/add-task-handler.js';

export const addTaskListener = () => {
  document
    .getElementById(ADD_CONTAINER_ID)
    .addEventListener(ADD_TASK, addTaskHandler);
};
