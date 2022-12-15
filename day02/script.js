let n = 1
const circles = document.querySelectorAll('.circle')

prev.onclick = () => {
  n -= 1
  if (n === 0) {
    n = 0
  }
  update()
}

next.onclick = () => {
  n += 1
  if (n === circles.length - 1) {
    n = circles.length - 1
  }
  update()
}

const update = () => {
  // 点亮circle
  circles.forEach((circle, index) => {
    if (index <= n) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
  // 控制进度条
  progress.style.width = `${(n / (circles.length - 1)) * 100}%`
  // 控制按钮
  if (n === 0) {
    prev.disabled = true
  } else if (n === circles.length - 1) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
update()
