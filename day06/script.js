// 浏览器视口高度分为5份,当box顶部达到下面五分之一就显示

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4
  console.log(triggerBottom)
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
