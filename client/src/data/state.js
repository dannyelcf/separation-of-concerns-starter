export const state = {
  todoList: [
    {
      id: window.crypto.randomUUID(),
      done: false,
      description: 'Lean DOM',
    },
    {
      id: window.crypto.randomUUID(),
      done: false,
      description: 'Lean Javascript',
    },
    {
      id: window.crypto.randomUUID(),
      done: true,
      description: 'Lean CSS',
    },
    {
      id: window.crypto.randomUUID(),
      done: true,
      description: 'Lean HTML',
    },
  ],
};
