
  const NumbersOrWordsLenght = 15,
  cellsLenght = 15;

for(let i = 0; i < NumbersOrWordsLenght; i++) {

  let numberEl = document.getElementById(`js-number-${i}`);

  resizableGrid(numberEl);

}

function createDiv(width) {

  const divEL = document.createElement('div');

  divEL.style.bottom = 0;
  divEL.style.left = 0;
  divEL.style.height = '5px';
  divEL.style.position = 'absolute';
  divEL.style.cursor = 'row-resize';
  divEL.style.userSelect = 'none';
  divEL.style.width = width + 'px';

  return divEL;

}

function resizableGrid(table) {

  const tableWidth = table.offsetWidth;

  for (let i = 0; i < NumbersOrWordsLenght; i++) {

    let numberEl = document.getElementById(`js-number-${i}`);

    let divEL = createDiv(tableWidth);

    numberEl.style.position = 'relative';
    numberEl.appendChild(divEL);

    setListeners(divEL);
  }

  function setListeners(divEL) {

    let pageY = null,
        curCol = null,
        curColHeight = null;

    divEL.addEventListener('mousedown', (e) => {

    curCol = e.target.parentElement;
    pageY = e.pageY; 


    curColHeight = curCol.offsetHeight;

  });

  divEL.addEventListener('mouseover', (e) => {
    e.target.style.borderBottom = '2px solid #0000ff';
  })

  divEL.addEventListener('mouseout', (e) => {
    e.target.style.borderBottom = '';
  })

  document.addEventListener('mousemove', (e) => {

    if (curCol) {

      let diffX = e.pageY - pageY;

      for(let i = 0; i < NumbersOrWordsLenght; i++) {
        for(let j = 0; j < cellsLenght; j++) {

          if(`js-number-${i}` == e.target.parentElement.id) {
          
            let tableBodyEl = document.getElementById(`js-table-body-${j}-${i}`);

            tableBodyEl.style.height = (curColHeight + diffX)+'px';

          }

        }

      curCol.style.height = (curColHeight + diffX)+'px';

      }
    }

  });

  document.addEventListener('mouseup', () => { 

    curCol = null;
    pageY = null;
    curColHeight = null;

  });

  }
}


