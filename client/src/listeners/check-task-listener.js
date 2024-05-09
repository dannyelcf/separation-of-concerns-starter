import { CHECK_TASK, LIST_CONTAINER_ID } from '../data/constants.js';
import { checkTaskHandler } from '../handlers/check-task-handler.js';

export const checkTaskListener = () => {
  document
    .getElementById(LIST_CONTAINER_ID)
    .addEventListener(CHECK_TASK, checkTaskHandler);
};
