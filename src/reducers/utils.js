const getTimezoneOffset = () => new Date().getTimezoneOffset() * 60 * 1000;
export const offsetDate = date => new Date(+date - getTimezoneOffset());
export const removeTime = date => date.toISOString().substring(0, 10); // 1970-01-01

export default {
  offsetDate,
  removeTime
};
