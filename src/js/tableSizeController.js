const tableBodyEL = document.getElementById('js-table-body-blocks');

for(let i = 0; i < 15; i++) {

  let createEL = document.createElement('div');
  
  
  for(let j = 0; j < 25; j++) {

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
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],
);

createWordAndNumberPlate(
  'js-number-counter', 
  ['tab', 'tab--small', 'tab--grey'],
  'js-number',
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
);




for(j = 0; j < 15; j++) {
  
  let wordEl = document.getElementById(`js-word-${j}`);

  // console.log(wordEl);
    resizableGrid(wordEl);
}

function createDiv(height){
  const div = document.createElement('div');
  div.style.top = 0;
  div.style.right = 0;
  div.style.width = '5px';
  div.style.position = 'absolute';
  div.style.cursor = 'col-resize';
  div.style.userSelect = 'none';
  div.style.height = height + 'px';
  return div;
 }

function resizableGrid(table) {
  
 var tableHeight = table.offsetHeight;
  
 for (var i = 0; i < 15; i++){
  
  let rr = document.getElementById(`js-word-${i}`);
  const div = createDiv(tableHeight);

  console.log(div);
  
  rr.appendChild(div);
  rr.style.position = 'relative';
  setListeners(div);
 }

 function setListeners(div){
  var pageX,curCol,nxtCol,curColWidth,nxtColWidth;

  div.addEventListener('mousedown', function (e) {
   curCol = e.target.parentElement;
   nxtCol = curCol.nextElementSibling;
   pageX = e.pageX; 
 
   var padding = paddingDiff(curCol);
 
   curColWidth = curCol.offsetWidth - padding;
   if (nxtCol)
    nxtColWidth = nxtCol.offsetWidth - padding;
  });

  div.addEventListener('mouseover', function (e) {
   e.target.style.borderRight = '2px solid #0000ff';
  })

  div.addEventListener('mouseout', function (e) {
   e.target.style.borderRight = '';
  })

  document.addEventListener('mousemove', function (e) {
   if (curCol) {
    var diffX = e.pageX - pageX;
 
    for(let i = 0; i < 15; i++) {
      for(let j = 0; j < 25; j++) {

    // console.log(e.target.parentElement.id);

    // document.getElementById(e.target.parentElement.id);


     if(`js-word-${i}` == e.target.parentElement.id) {
  
      rv = document.getElementById(`js-table-body-${i}-${j}`);
  
      rv.style.width = (curColWidth + diffX)+'px';
     }
      }
    }
    curCol.style.width = (curColWidth + diffX)+'px';

   }
  });

  document.addEventListener('mouseup', function (e) { 
   curCol = null;
   nxtCol = null;
   pageX = null;
   nxtColWidth = null;
   curColWidth = null
  });
 
 }
 

 
 function paddingDiff(col){
  
  var padLeft = getStyleVal(col,'padding-left');
  var padRight = getStyleVal(col,'padding-right');
  return (parseInt(padLeft) + parseInt(padRight));

 }

 function getStyleVal(elm,css){
  return (window.getComputedStyle(elm, null).getPropertyValue(css))
 }
}


