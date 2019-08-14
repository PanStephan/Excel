import { ROWS_LENGTH, COLUMNS_LENGTH } from './variables';

document.addEventListener('mousedown', onMouseDown);

function onMouseDown(event) {

  // if (!event.target.dataset) return;

  // console.log(event.target.dataset.resizeVertical);

  if (event.target.dataset.resizeVertical) {
    // let pageX = event.pageX; 
    // console.log(pageX);
    document.addEventListener('mousemove', onMouseMove);
  }

  // if (event.target.dataset.) {
  //   console.log('horizontal');
  // }

}

function onMouseMove(e) {
  // console.log(e);
  if (e.target.dataset.resizeVertical) {
    const pageX = e.target.getBoundingClientRect(); 
    console.log(pageX.right);
    let curCol = e.target.parentElement;
    // console.log(curCol);
    let curColWidth = curCol.offsetWidth;
    // console.log(curColWidth);
    if (curCol) {
      let diffX = pageX.right - e.pageX;
      console.log(diffX)
      for(let i = 0; i < COLUMNS_LENGTH; i++) {
        const tableBodyEl = document.getElementById(`js-table-body-${e.target.dataset.resizeVertical}-${i}`);
        tableBodyEl.style.width = (curColWidth + diffX)+'px';
      }
      curCol.style.width = (curColWidth + diffX)+'px';
    }
    
  }
}

document.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', onMouseMove);    
})

// function resizeTable() {

// }

// function resizableGrid(table) {

//   const tableWidth = table.offsetWidth;

//   for (let i = 0; i < COLUMNS_LENGTH; i++) {
//     setListeners(divEl);
//   }

//   function setListeners(divEl) {

//     let pageY = null,
//         curCol = null,
//         curColHeight = null;

//     divEl.addEventListener('mousedown', (e) => {

//     curCol = e.target.parentElement;
//     pageY = e.pageY; 

//     curColHeight = curCol.offsetHeight;

//   });

//   document.addEventListener('mousemove', (e) => {

//     if (curCol) {

//       let diffX = e.pageY - pageY;

//       for(let i = 0; i < COLUMNS_LENGTH; i++) {
//         for(let j = 0; j < ROWS_LENGTH; j++) {

//           if(`js-number-${i}` == e.target.parentElement.id) {
          
//             let tableBodyEl = document.getElementById(`js-table-body-${j}-${i}`);

//             tableBodyEl.style.height = (curColHeight + diffX)+'px';

//           }

//         }

//       curCol.style.height = (curColHeight + diffX)+'px';

//       }
//     }

//   });

//   document.addEventListener('mouseup', () => { 

//     curCol = null;
//     pageY = null;
//     curColHeight = null;

//   });

//   }
// }

  // document.addEventListener('mousemove', (e) => {

  //   if (curCol) {
  //     let diffX = e.pageX - pageX;



  //     }
  //   }
  // }