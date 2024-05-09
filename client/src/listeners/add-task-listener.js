import { addTaskHandler } from '../handlers/add-task-handler.js';

export const addTaskListener = () => {
  const addInput = document.querySelector('#add-container > input');
  const addButton = document.querySelector('#add-container > button');

  addButton.addEventListener('click', (event) => {
    addTaskHandler(event, addInput);
  });

  addInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTaskHandler(event, addInput);
    }
  });
};
