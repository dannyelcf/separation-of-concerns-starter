import { CHECK_TASK } from '../data/constants.js';

export const checkTask = (task) => {
  return new CustomEvent(CHECK_TASK, {
    bubbles: true,
    detail: { task },
  });
};
