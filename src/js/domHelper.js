
const selectRole = function(selector) {
  return qs(`[data-role=${selector}]`);
};

const qs = function(selector) {
  return (document).querySelector(selector);
};

export { selectRole, qs };
