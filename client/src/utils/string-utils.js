export const isBlank = (text) => {
  return !text || /^\s*$/.test(text);
};
