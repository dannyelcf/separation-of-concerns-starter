import { deleteTaskHandler } from '../handlers/delete-task-handler.js';

export const deleteTaskListener = (taskDiv) => {
  const taskId = taskDiv.getAttribute('id');
  const deleteButton = taskDiv.querySelector('button');
  deleteButton.addEventListener('click', (event) => {
    deleteTaskHandler(event, taskId);
  });
};
