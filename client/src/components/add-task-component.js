import { addTask } from '../custom-events/add-task.js';
import { ADD_CONTAINER_ID } from '../data/constants.js';
import { isBlank } from '../utils/string-utils.js';

const dispatchAddTaskEvent = (event, element, input) => {
  if (input.value && !isBlank(input.value)) {
    event.preventDefault();
    element.dispatchEvent(
      addTask({
        id: window.crypto.randomUUID(),
        done: false,
        description: input.value,
      }),
    );
    input.value = '';
  }
};

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
  // add event listeners
  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    dispatchAddTaskEvent(event, addButton, input);
  });
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      dispatchAddTaskEvent(event, addButton, input);
    }
  });
  // put everything together
  section.appendChild(input);
  section.appendChild(addButton);
  return section;
};
