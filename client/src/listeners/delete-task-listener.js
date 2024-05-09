import { DELETE_TASK, LIST_CONTAINER_ID } from '../data/constants.js';
import { deleteTaskHandler } from '../handlers/delete-task-handler.js';

export const deleteTaskListener = () => {
  document
    .getElementById(LIST_CONTAINER_ID)
    .addEventListener(DELETE_TASK, deleteTaskHandler);
};
