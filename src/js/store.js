function autoSave(target, diff) {
  if (target.resizeVertical) {
    localStorage.setItem(`Vertical-${target.resizeVertical}`, diff);
  }
  if (target.resizeHorizontal) {
    localStorage.setItem(`Horizontal-${target.resizeHorizontal}`, diff);
  }
}

export { autoSave };
