const open = document.querySelector('#open')
const close = document.querySelector('#close')
const container = document.querySelector('.container')
open.onclick = () => {
  container.classList.add('show-nav')
}
close.onclick = () => {
  container.classList.remove('show-nav')
}
