// const container = document.querySelector('.container')
// const panels = [...container.children]
// // 事件委托
// container.onclick = (e) => {
//   let nodeClassList = [...e.target.classList]
//   if (nodeClassList.indexOf('panel') !== -1) {
//     panels.forEach((panel) => {
//       panel.classList.remove('active')
//     })
//     e.target.classList.add('active')
//   }
// }

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    panels.forEach((panel) => {
      panel.classList.remove('active')
    })
    panel.classList.add('active')
  })
})
