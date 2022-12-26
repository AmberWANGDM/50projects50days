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

# day02 progress-steps
## css
1. 设置变量
```css
:root {
  --line-border-fill: #3498db;
  --line-border-empty: #e0e0e0;
}
```
2. 伪元素

```css
.progress-container::before {
  /* 必须有content */
  position: absolute;
  content: '';
  background-color: var(--line-border-empty);
  top: 50%;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  /* flex子元素且z-index不为auto创建层叠上下文, 可以在circle的background下面 */
  z-index: -1;
}
```
## js
按钮绑定事件, 控制circle元素上active类的添加与删除, 控制进度条长度, 通过一个变量控制按钮是否可点击

# day03 rotaring nav
## css
 1. `+` 相邻兄弟选择器
`former_element + target_element { style properties }`

2. 导航栏移出移入效果
```css
nav ul li {
  /* 大写 */
  text-transform: uppercase;
  color: white;
  margin: 40px 0;
  /* 移出屏幕 */
  transform: translateX(-100%);
  transition: transform 0.4s ease-in;
}

/* 回到屏幕显示 */
.container.show-nav+nav li {
  transform: translateX(0);
  transition-delay: 0.3s;
}
```

# day04
## css
input设置padding后,width设为0也会有一部分padding露出

解决

button浮动,盖住input

# day05 blurry loading

## css

align-items设为center前提是该container有高度

## js

当一个变量变化会引起多个地方变化,且变化范围不一致, 用以下公式即可
```js
function scale(num, inMin, inMax, outMin, outMax) {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
```

# day 06 下拉显示动画

## js

监听scroll事件, 获取每个方块顶部距离视口的长度, 如果小于视口高度的五分之四,就显示

api: window.innerHeight 浏览器视口高度

element.getBoundingClientRect().top

![](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect/element-box-diagram.png)


# day07

## css

蒙版效果: 使用before伪元素(position:absolute会使inline元素变为块级)设置alpha实现,但是会遮挡标题和按钮, 需要给这两个元素设置浮动

回忆一下在同一个层叠上下文中: 正z-index > z-index:0 > 内联元素 > 浮动 > 块级 > 负z-index > border > background

什么元素会创建层叠上下文 

- html
- position 为 relative, absolute, 且 z-index 不为auto 的元素
- fixed, sticky 元素
- flex子元素 且 z-index 不为auto
- grid子元素 且 z-index 不为auto
- 以下属性值不为none的元素
  - transform
  - filter (day05 filter:blur(0px))

## js

在左右两个盒子外面包裹一个container, 在容器上增加或移除hover-left/hover-right类.

 分别给两个盒子绑定mouseenter, mouseleave事件, 移入左盒子, 左盒子(.hover-left .left)放大, 右盒子(.hover-left .right)缩小, 移入右盒子同理

 # day 08 
  
 实现input的提示语上浮动画, 将单词拆分为span包裹的字母并设定transition-delay, input focus事件文字上移, `transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)`

 # day09

 audio标签相关api play() pause() currentTime

# day10

fetch请求 `fetch(url,config).then(res=>res.json()).then(data=>{/* ... */})`

# DAY11 

监听键盘事件,获取keycode
