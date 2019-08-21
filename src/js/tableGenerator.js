import { ROWS_LENGTH, COLUMNS_LENGTH } from './variables';
import { getState } from './state';

const DEFAULT_WIDTH = 100;
const DEFAULT_HEIGHT = 20;

function createTable(rows, columns) {
  const tableBodyEL = document.getElementById('js-table-body-blocks');
  for (let i = 0; i < columns; i++) {
    const divEl = document.createElement('div');
    for (let j = 0; j < rows; j++) {
      const createCellEl = document.createElement('div');
      createCellEl.classList.add('tab');
      createCellEl.style.width = `${getState('col-state', i, DEFAULT_WIDTH)}px`;
      createCellEl.style.height = `${getState('row-state', j, DEFAULT_HEIGHT)}px`;
      createCellEl.setAttribute('contenteditable', 'true');
      createCellEl.setAttribute('data-col', i.toString());
      createCellEl.setAttribute('data-row', j.toString());
      createCellEl.id = `js-table-body-${i}-${j}`;
      divEl.appendChild(createCellEl);
    }
    tableBodyEL.appendChild(divEl);
  }
}

function createTableHead(documentSelectors, classNames, datum) {
  const counterEl = document.getElementById(documentSelectors);
  switch (datum) {
    case 'vertical-line':
      for (let i = 0; i < COLUMNS_LENGTH; i++) {
        const divEl = document.createElement('div');
        const upperCaseWords = String.fromCharCode(97 + i).toUpperCase();
        divEl.style.width = `${getState('col-state', i, DEFAULT_WIDTH)}px`;
        divEl.classList.add(...classNames);
        divEl.innerHTML = `${upperCaseWords} <div data-resize-vertical=${i} class='${datum}'></div>`;
        counterEl.appendChild(divEl);
      }
      break;
    case 'horizontal-line':
      for (let i = 0; i < ROWS_LENGTH; i++) {
        const divEl = document.createElement('div');
        divEl.classList.add(...classNames);
        divEl.style.height = `${getState('row-state', i, DEFAULT_HEIGHT)}px`;
        divEl.innerHTML = `${i
          + 1} <div data-resize-horizontal=${i} class='${datum}'></div>`;
        counterEl.appendChild(divEl);
      }
      break;
    default:
      alert('bad datum value');
      break;
  }
}

createTable(ROWS_LENGTH, COLUMNS_LENGTH);

createTableHead('js-word-counter', ['tab', 'tab--grey'], 'vertical-line');

createTableHead(
  'js-number-counter',
  ['tab', 'tab--small', 'tab--grey'],
  'horizontal-line',
);
