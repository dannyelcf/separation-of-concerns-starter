import { checkTaskHandler } from '../handlers/check-task-handler.js';

export const checkTaskListener = () => {
  const taskList = document.querySelectorAll('.list-item');
  taskList.forEach((taskRow) => {
    const taskId = taskRow.getAttribute('id');
    const checkbox = taskRow.querySelector('input');
    checkbox.addEventListener('change', (event) => {
      checkTaskHandler(event, taskId);
    });
  });
};
