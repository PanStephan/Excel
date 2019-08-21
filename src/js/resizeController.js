import { autoSave } from './store';

document.addEventListener('mousedown', onMouseDown);

function onMouseDown(event) {
  if (event.target.dataset.resizeVertical) {
    const curCol = event.target.closest('.tab');
    const coords = curCol.getBoundingClientRect();
    const target = event.target.dataset;
    const curColWidth = curCol.clientWidth;
    const columns = document.querySelectorAll(
      `[data-col='${event.target.dataset.resizeVertical}']`,
    );
    document.onmousemove = (e) => {
      const diffX = e.pageX - coords.right;
      columns.forEach((c) => (c.style.width = `${curColWidth + diffX}px`));
      curCol.style.width = `${curColWidth + diffX}px`;
      autoSave(target, diffX);
    };
  }
  if (event.target.dataset.resizeHorizontal) {
    const curCol = event.target.closest('.tab');
    const coords = curCol.getBoundingClientRect();
    const target = event.target.dataset;
    const curColHeight = curCol.clientHeight;
    const rows = document.querySelectorAll(
      `[data-row='${event.target.dataset.resizeHorizontal}']`,
    );
    document.onmousemove = (e) => {
      const diffY = e.pageY - coords.bottom;
      rows.forEach((c) => (c.style.height = `${curColHeight + diffY}px`));
      curCol.style.height = `${curColHeight + diffY}px`;
      autoSave(target, diffY);
    };
  }
}

document.addEventListener('mouseup', () => {
  document.onmousemove = null;
});
