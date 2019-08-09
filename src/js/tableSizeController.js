
const NumbersOrWordsLenght = 15;

const cellsLenght = 25;

for(let i = 0; i < NumbersOrWordsLenght; i++) {
    
  let wordEl = document.getElementById(`js-word-${i}`);
  resizableGrid(wordEl);

  let numberEl = document.getElementById(`js-number-${i}`);
  resizableGrid(numberEl);

}

function resizableGrid(table) {
  
  const tableHeight = table.offsetHeight;
 
  const tableWidht = table.offsetWidth;
   
  for (let i = 0; i < NumbersOrWordsLenght; i++){
   
   let rr = document.getElementById(`js-word-${i}`);
 
   let rrv = document.getElementById(`js-number-${i}`);
 
   const div = createDiv(tableHeight);
   const div1 = createDiv(tableWidht);
 
   
   rr.appendChild(div);
   rr.style.position = 'relative';
   
   rrv.appendChild(div1);
   rrv.style.position = 'relative';
   setListeners(div);
   setListeners(div1);
  }
 
  function setListeners(div) {
 
   let pageX = null,
       curCol = null,
       curColWidth = null,
       curColHeight = null;
 
   div.addEventListener('mousedown', (e) => {
     
    curCol = e.target.parentElement;
    pageX = e.pageX; 
  
  
    curColWidth = curCol.offsetWidth ;
    curColHeight = curCol.offsetHeight;
 
   });
 
   div.addEventListener('mouseover', (e) => {
    e.target.style.borderRight = '2px solid #0000ff';
   })
 
   div.addEventListener('mouseout', (e) => {
    e.target.style.borderRight = '';
   })
 
   document.addEventListener('mousemove', (e) => {
 
    if (curCol) {
     let diffX = e.pageX - pageX;
  
     for(let i = 0; i < NumbersOrWordsLenght; i++) {
       for(let j = 0; j < cellsLenght; j++) {
 
         if(`js-word-${i}` == e.target.parentElement.id) {
     
           const rv = document.getElementById(`js-table-body-${i}-${j}`);
         
           rv.style.width = (curColWidth + diffX)+'px';
 
         }
 
         if(`js-number-${i}` == e.target.parentElement.id) {
           
           const rv = document.getElementById(`js-table-body-${i}-${j}`);
         
           rv.style.height = (curColHeight + diffX)+'px';
 
         }
 
       }
 
      const iy = document.getElementById('js-number-counter'),
            ix = document.getElementById('js-word-counter');
 
       if (iy == e.target.parentElement) {
         curCol.style.height = (curColHeight + diffX)+'px'; 
       }
 
       if(ix == e.target.parentElement) {
         curCol.style.width = (curColWidth + diffX)+'px';
       }
     }
    }
 
   });
 
   document.addEventListener('mouseup', () => { 
 
     curCol = null;
     pageX = null;
     curColWidth = null;
     curColHeight = null;
 
   });
   
  }
  
 }
 
 function createDiv(height) {
 
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
 

