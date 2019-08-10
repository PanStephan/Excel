const tableBodyEL = document.getElementById('js-table-body-blocks'),
      NUMBERS_WORDS_LENGTH = 15,
      CELLS_LENGTH = 15;

for(let i = 0; i < NUMBERS_WORDS_LENGTH; i++) {

  let divEL = document.createElement('div');
  
  
  for(let j = 0; j < CELLS_LENGTH; j++) {

    let createСellEL = document.createElement('span');

    createСellEL.classList.add('tab');
    createСellEL.setAttribute('contenteditable', 'true' );
    createСellEL.id = `js-table-body-${i}-${j}`;
    divEL.appendChild(createСellEL);
  }

  tableBodyEL.appendChild(divEL);

}

function createWordAndNumberPlate(documentSelector, classNameArray, idName, array) {

  const counterEl = document.getElementById(documentSelector);

  for(let i = 0; i < array.length; i++) {

    let divEL = document.createElement('div');

    divEL.classList.add(...classNameArray);
    divEL.id = `${idName}-${i}`;
    divEL.innerHTML = `${array[i]}`;
    counterEl.appendChild(divEL);
  }

}

createWordAndNumberPlate(
  'js-word-counter', 
  ['tab', 'tab--grey'],
  'js-word',
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O']
);

createWordAndNumberPlate(
  'js-number-counter', 
  ['tab', 'tab--small', 'tab--grey'],
  'js-number',
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
);
