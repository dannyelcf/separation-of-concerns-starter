import { deleteTaskHandler } from '../handlers/delete-task-handler.js';

export const deleteTaskListener = () => {
  const taskList = document.querySelectorAll('.list-item');
  taskList.forEach((taskRow) => {
    const taskId = taskRow.getAttribute('id');
    const deleteButton = taskRow.querySelector('button');
    deleteButton.addEventListener('click', (event) => {
      deleteTaskHandler(event, taskId);
    });
  });
};
