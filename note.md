# day01 expanding-cards
## css
```css
/* 图片 */
.panel {
  /* 缩小可以这样设置  
    flex-grow: 0.5;
    flex-shrink: 1;
    flex-basis: 0%; */
  flex: 0.5;

  /* 背景图 */
  background-size: cover;

  /* 渐变 */
  transition: flex 1s;
}

.panel.active {
  /* 放大可以这样设置 */
  flex: 5
}

/* 标题 */
.panel>h3 {
  opacity: 0;
}

.panel.active>h3 {
  /* 注意渐变加的位置 */
  transition: opacity .5s ease-in 0.4s;
  opacity: 1;
}
```
## js
遍历所有panels移除active, 给点击对象添加active
```javascript
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    panels.forEach((panel) => {
      panel.classList.remove('active')
    })
    panel.classList.add('active')
  })
})
```