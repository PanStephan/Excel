import { saveState } from './state';

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
      const width = curColWidth + diffX;
      columns.forEach((c) => (c.style.width = `${curColWidth + diffX}px`));
      curCol.style.width = `${width}px`;
      saveState('col-state', target.resizeVertical, width);
      // autoSave(target, width);
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
      const height = curColHeight + diffY;
      rows.forEach((c) => (c.style.height = `${curColHeight + diffY}px`));
      curCol.style.height = `${height}px`;
      saveState('row-state', target.resizeHorizontal, height);
      // autoSave(target, height);
    };
  }
}

document.addEventListener('mouseup', () => {
  document.onmousemove = null;
});

// function saveColumnState(col, value) {
//   const state = localStorage.getItem('col-state')
//     ? JSON.parse(localStorage.getItem('col-state'))
//     : {}
//   state[col] = value;
//   localStorage.setItem('col-state', JSON.stringify(state))
// }
//
// function saveRowState(row, value) {
//   const state = localStorage.getItem('row-state')
//     ? JSON.parse(localStorage.getItem('row-state'))
//     : {}
//   state[row] = value;
//   localStorage.setItem('row-state', JSON.stringify(state))
// }
