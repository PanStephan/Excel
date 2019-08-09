const tableBodyEL = document.getElementById('js-table-body-blocks');

const NumbersOrWordsLenght = 15;

const cellsLenght = 25;

for(let i = 0; i < NumbersOrWordsLenght; i++) {

  let createEL = document.createElement('div');
  
  
  for(let j = 0; j < cellsLenght; j++) {

    let createСellEL = document.createElement('span');

    createСellEL.classList.add('tab');
    createСellEL.setAttribute("contenteditable", "true" );
    createСellEL.id = `js-table-body-${i}-${j}`;
    createEL.appendChild(createСellEL);
  }

  tableBodyEL.appendChild(createEL);

}

function createWordAndNumberPlate(documentSelector, classNameArray, idName, array) {

  const counterEl = document.getElementById(documentSelector);

  for(let i = 0; i < array.length; i++) {

    let createEL = document.createElement('div');

    createEL.classList.add(...classNameArray);
    createEL.id = `${idName}-${i}`;
    createEL.innerHTML = `${array[i]}`;
    counterEl.appendChild(createEL);
  }

}

createWordAndNumberPlate(
  'js-word-counter', 
  ['tab', 'tab--grey'],
  'js-word',
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"]
);

createWordAndNumberPlate(
  'js-number-counter', 
  ['tab', 'tab--small', 'tab--grey'],
  'js-number',
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
);
