const NUMBERS_WORDS_LENGTH = 15,
      CELLS_LENGTH = 15;

window.addEventListener("beforeunload", () => {

  for(let i = 0; i < NUMBERS_WORDS_LENGTH; i++) {
    for(let j = 0; j < CELLS_LENGTH; j++) {

      let wordEl = document.getElementById(`js-word-${i}`),
      numberEl = document.getElementById(`js-number-${i}`);

      localStorage.setItem('wordEl'+[i], wordEl.offsetWidth);
      localStorage.setItem('numberEl'+[i], numberEl.offsetHeight);

    }
  }

});

for(let i = 0; i < NUMBERS_WORDS_LENGTH; i++) {
  for(let j = 0; j < CELLS_LENGTH; j++) {

  let tableBodyEl = document.getElementById(`js-table-body-${i}-${j}`),
    wordEl = document.getElementById(`js-word-${i}`),
    numberEl = document.getElementById(`js-number-${i}`);


    tableBodyEl.style.height = JSON.parse(localStorage.getItem('numberEl'+[j])) + 'px';
    numberEl.style.height = JSON.parse(localStorage.getItem('numberEl'+[i])) + 'px';

    tableBodyEl.style.width = JSON.parse(localStorage.getItem('wordEl'+[i])) + 'px';
    wordEl.style.width = JSON.parse(localStorage.getItem('wordEl'+[i])) + 'px';

  }
}