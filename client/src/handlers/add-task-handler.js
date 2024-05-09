import { state } from '../data/state.js';
import { renderTaskList } from '../procedures/render-task-list.js';
import { isBlank } from '../utils/string-utils.js';

export const addTaskHandler = (event, input) => {
  if (input.value && !isBlank(input.value)) {
    event.preventDefault();
    state.todoList.unshift({
      id: window.crypto.randomUUID(),
      done: false,
      description: input.value,
    });
    input.value = '';

    renderTaskList();
  }
};
