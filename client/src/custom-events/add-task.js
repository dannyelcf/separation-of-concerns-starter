import { ADD_TASK } from '../data/constants.js';

export const addTask = (task) => {
  return new CustomEvent(ADD_TASK, {
    bubbles: true,
    detail: { task },
  });
};
