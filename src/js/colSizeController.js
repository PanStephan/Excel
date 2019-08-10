

  const NUMBERS_WORDS_LENGTH = 15,
  CELLS_LENGTH = 15;

for(let i = 0; i < NUMBERS_WORDS_LENGTH; i++) {

  let wordEl = document.getElementById(`js-word-${i}`);
  resizableGrid(wordEl);

}

function resizableGrid(table) {

  const tableHeight = table.offsetHeight;

  for (let i = 0; i < NUMBERS_WORDS_LENGTH; i++){

    let wordEl = document.getElementById(`js-word-${i}`);

    const divEL = createDiv(tableHeight);


    wordEl.appendChild(divEL);
    wordEl.style.position = 'relative';
    setListeners(divEL);

  }

function setListeners(divEL) {

  let pageX = null,
      curCol = null,
      curColWidth = null;

  divEL.addEventListener('mousedown', (e) => {
  
  curCol = e.target.parentElement;
  pageX = e.pageX; 


  curColWidth = curCol.offsetWidth ;

  });

  divEL.addEventListener('mouseover', (e) => {
    e.target.style.borderRight = '2px solid #0000ff';
  })

  divEL.addEventListener('mouseout', (e) => {
    e.target.style.borderRight = '';
  })

  document.addEventListener('mousemove', (e) => {

    if (curCol) {
      let diffX = e.pageX - pageX;

      for(let i = 0; i < NUMBERS_WORDS_LENGTH; i++) {
        for(let j = 0; j < CELLS_LENGTH; j++) {

          if(`js-word-${i}` == e.target.parentElement.id) {
      
            let tableBodyEl = document.getElementById(`js-table-body-${i}-${j}`);
          
            tableBodyEl.style.width = (curColWidth + diffX)+'px';

          }

        }

          curCol.style.width = (curColWidth + diffX)+'px';

      }
    }

  });

  document.addEventListener('mouseup', () => { 

    curCol = null;
    pageX = null;
    curColWidth = null;

  });

  }
}

function createDiv(height) {

  const divEL = document.createElement('div');

  divEL.style.top = 0;
  divEL.style.right = 0;
  divEL.style.width = '5px';
  divEL.style.position = 'absolute';
  divEL.style.cursor = 'col-resize';
  divEL.style.userSelect = 'none';
  divEL.style.height = height + 'px';

  return divEL;

}


 

