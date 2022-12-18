// 分析
// 百分比数字 0 - 100 百分比opacity 1-0 虚化blur() 20 - 0

const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')
let load = 0
let id = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(id)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(num, inMin, inMax, outMin, outMax) {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
