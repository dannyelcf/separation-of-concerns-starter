import { checkTaskHandler } from '../handlers/check-task-handler.js';

export const checkTaskListener = (taskDiv) => {
  const taskId = taskDiv.getAttribute('id');
  const checkbox = taskDiv.querySelector('input');
  checkbox.addEventListener('change', (event) => {
    checkTaskHandler(event, taskId);
  });
};
