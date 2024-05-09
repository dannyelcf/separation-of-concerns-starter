import { LIST_CONTAINER_ID } from '../data/constants.js';

export const taskListComponent = () => {
  // section
  const section = document.createElement('section');
  section.setAttribute('id', LIST_CONTAINER_ID);
  section.classList.add('list-container');
  return section;
};
