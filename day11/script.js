const container = document.querySelector('.container')
document.onkeydown = (event) => {
  container.innerHTML = `
  <div class="key">${event.key}<small>event.key</small></div>
  <div class="key">${event.keyCode}<small>event.keyCode</small></div>
  <div class="key">${event.code}<small>event.code</small></div>
  `
}
