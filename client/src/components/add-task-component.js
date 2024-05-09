import { ADD_CONTAINER_ID } from '../data/constants.js';

export const addTaskComponent = () => {
  // section
  const section = document.createElement('section');
  section.setAttribute('id', ADD_CONTAINER_ID);
  section.classList.add('add-container');
  // input
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Write something here...';
  input.autofocus = true;
  // button
  const addButton = document.createElement('button');
  addButton.type = 'button';
  addButton.innerText = 'Add';
  // put everything together
  section.appendChild(input);
  section.appendChild(addButton);
  return section;
};
