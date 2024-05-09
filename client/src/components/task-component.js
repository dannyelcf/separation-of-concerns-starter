import { deleteTask } from '../custom-events/delete-task.js';
import { checkTask } from '../custom-events/check-task.js';

export const taskComponent = (task) => {
  // div
  const div = document.createElement('div');
  div.classList.add('list-item');
  // checkbox
  const input = document.createElement('input');
  input.type = 'checkbox';
  if (task.done) {
    input.checked = true;
  }
  // span
  const span = document.createElement('span');
  span.innerText = task.description;
  if (task.done) {
    span.classList.add('line-through');
  }
  // delete button
  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.innerText = 'Delete';
  // add event listeners
  input.addEventListener('change', (event) => {
    event.preventDefault();
    input.dispatchEvent(checkTask(task));
  });
  deleteButton.addEventListener('click', (event) => {
    event.preventDefault();
    deleteButton.dispatchEvent(deleteTask(task));
  });
  // put everything together
  div.appendChild(input);
  div.appendChild(span);
  div.appendChild(deleteButton);
  return div;
};