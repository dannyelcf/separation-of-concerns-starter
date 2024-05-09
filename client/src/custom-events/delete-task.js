import { DELETE_TASK } from '../data/constants.js';

export const deleteTask = (task) => {
  return new CustomEvent(DELETE_TASK, {
    bubbles: true,
    detail: { task },
  });
};
