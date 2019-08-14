document.addEventListener('mousedown', onMouseDown);

function onMouseDown(event) {
  if (event.target.dataset.resizeVertical) {
    const curCol = event.target.closest('.tab')
    const coords = curCol.getBoundingClientRect()
    const curColWidth = curCol.clientWidth

    const $columns = document.querySelectorAll(`[data-col="${event.target.dataset.resizeVertical}"]`);

    document.onmousemove = e => {
      const diffX = e.pageX - coords.right
      $columns.forEach(c => c.style.width = (curColWidth + diffX) + 'px')
      curCol.style.width = (curColWidth + diffX) + 'px'
    }
  }
}

document.addEventListener('mouseup', () => {
  document.onmousemove = null
})
