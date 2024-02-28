What's FC？
FC的全称是：Formatting Contexts，是W3C CSS2.1规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。

CSS2.1中只有BFC和IFC, CSS3中才有GFC和FFC。

BFC block formatting contexts 块级格式化上下文
IFC inline formatting contexts 
GFC grid formatting contexts
FFC flex 兼容性较差， 只有chrome 和 火狐支持
display值为flex或者inline-flex的元素将会生成自适应容器（flex container），可惜这个牛逼的属性只有谷歌和火狐支持，不过在移动端也足够了，至少safari和chrome还是OK的，毕竟这俩在移动端才是王道。
https://juejin.cn/post/6844903480801525773

# 如何触发BFC?
1. html根元素 <html> 本身就为BFC.
2. float 不为 none (默认值)
3. overflow 不为 visible (默认值) 
4. display 设置为 内联块元素， 即： inline-block  或 表单单元格或表头格，即 display 为：table-cell 、 table-caption 或table-* 的。
5. 对于 flex 布局或者grid 布局的子元素，即 父元素布局为 display: flex  inline-flex 或 grid inline-grid
6. 绝对定位元素 也就是 position 为 absolute 和 fixed


7. 元素属性为 contain: layout, content, 或 strict  需要学习contain 这个属性
8. multicol containers 多列布局
9. elements with column-span set to all
<!-- 
看 mmd原文：
- elements made to float using float
- absolutely positioned elements
- elements with display: inline-block
- table cells or elements with display: table-cell, including anonymous table cells created when using the display: table-* properties
- table captions or elements with display: table-caption
- block elements where overflow has a value other than visible
- elements with display: flow-root or display: flow-root list-item
- elements with contain: layout, content, or strict
- flex items
- grid items
- multicol containers
- elements with column-span set to all -->
