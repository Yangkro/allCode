fp### jQuery常用API
#### jQuery选择器
基本语法为:<font color="purple">\$('选择器')</font>。分类如下
* 基础选择器

|名称|用法|描述|
|---|---|---|
|ID选择器|$("#id")|获取指定ID的元素|
|全选选择器|$('*')|匹配所有元素|
|类选择器|$('.class')|获取同一类的元素|
|标签选择器|$('div')|获取相同标签的所有元素|
|交集选择器|$('li.current')|选择交集元素|
|并集选择器|$('div,li,.current')|选取多个元素|

* 层级选择器

|名称|用法|描述|
|---|---|---|
|子代选择器|$('ul>li')|使用>获取亲儿子层级的元素，不会获取孙子层级的元素|
|后代选择器|$('ul li')|使用空格，代表后代选择器，获取ul下的所有li元素，<font color="red">包括孙子</font>|

* 子代兄弟选择器

|语法|用法|说明|
|---|---|---|
|parent|`$("li").parent();`|查找父级元素|
|parents|`$("li").parents()`|返回当前元素的所有祖先元素数组|
|children(selector)|`$("ul").children("li")`|相当于`$("ul>li")`，选择最亲一级的儿子|
|find(selector)|`$("ul").find("li")`|相当于`$("ul li")`，后代选择器|
|siblings(selector)|`$("first").siblings("li")`|查找不包括自己的兄弟元素|
|nextAll([expr])|`$("first").nextAll()`|查找当前元素的之后的所有同辈元素|
|prevAll([expr])|`$(".last").prevAll()`|查找当前元素的之前的所有同辈元素|
|hasClass(class)|`$("div").hasClass("current")`|判断元素div是否含有current样式类|
|eq(index)|`$("li").eq(2)`|相当于`$("li:eq(2)")`，index从0开始|

* jQuery的隐式迭代
当用jq的选择器选中某个元素时，默认选中这个选择器的所以元素，绑定事件时会为每一个含有选择器的元素都绑定上。 （见案例：jQ排他思想.html)
#### jQuery样式操作
jQuery可以使用CSS方法来修改简单的元素样式，也可以操作类，修改多个样式
* 操作CSS方法
    1. 参数只写属性名，返回相应的属性值
    `$(this).css("color")`
    2. 参数是<font color="red">属性名， 属性值，用逗号进行分割，属性必须加引号，只能设置一组样式，如果值为数字则不加单位，带单位则必须加引号</font>
    `$(this).css("color", "red")`
    3. 参数可以是对象形式，方便设置多组样式，属性和属性值用<font color="red">冒号，属性可以不加引号</font>  
    `$(this).css({color: "red", "font-size": 20})`  
* 直接操作样式类（同classList的方法）  
（见案例：jQ操作样式类.html）注：<font color="red">不用加点</font>
    1. 添加样式类
    `$(this).addClass('current')`
    2. 删除样式类
    `$(this).removeClass('current')`
    3. 切换样式类
    `$(this).toggleClass('current')`

#### jQuery效果
* 显示和隐藏
    1. 显示show `show([speed], [easing], [fn])`
    参数解释：
        1. 参数可以省略
        2. speed： 三种预定的速度之一的字符串（“slow”， normal，or， fast）或者表示动画时长的毫秒数
        3. easing： 指的是用来切换动画效果，默认是“swing”（由慢到快再到慢），可以用参数“linear”（线性变换）
        4. fn：回调函数，在动画完成是执行，每个元素执行一次
    2. 隐藏hide `hide([speed], [easing], [fn])`
    参数意义同上
    3. 切换toggle `toggle([speed], [easing], [fn])`
    参数意义同上
* 滑动
    1. 下滑slideDown `slideDown([speed], [easing], [fn])`
    2. 上滑slideUp `slideUp([speed], [easing], [fn])`
    3. 切换滑动slidetoggle `slideToggle([speed], [easing], [fn])`
    <font color="red">所有参数含义同显示</font>
* 悬浮切换hover `hover([over], out)`
    参数解释：
        1. over：鼠标移动到元素上触发的函数
        2. out：鼠标移除某元素触发的函数
        注：<font color="red">如果只写一个参数，则鼠标经过和离开都会触发该函数</font>
* 动画队列
效果动画一旦触发就会执行，如果多次触发，就会造成动画排队等待执行的效果，排队效果导致，你希望动画停止的时候动画还在继续（因为动画队列没有清空）。
    - 停止排队 `stop()` stop用户停止动画或者效果，<font color="red">stop()必须写在动画前面，表示在执行当前动画时停止上一次动画效果</font>
* 淡入淡出
    1. 淡入fadeIn `fadeIn([speed], [easing], [fn])`
    2. 淡出fadeOut `slideDown([speed], [easing], [fn])`
    3. 透明度fadeTo `fadeTo([speed], opacity, [easing], [fn])`
        参数opacity：指定目标透明度，取指为0~1
        <font color="red">speed和opacity必须写</font>  
    4. 淡入淡出切换fadeToggle `fadeToggle([speed], [easing], [fn])`
* 自义动画
语法：`animate(params, [speed], [easing], [fn])`
参数解释：
    1. <font color="red">params：想要改变的样式属性，以对象的形式传递，必写参数，属性名可以不用带引号，如果是复合属性则需要采用驼峰命名法borderLeft</font>。其余参数可以省略

#### jQuery属性操作
* 获取元素的固有属性
语法：<font color="purple">prop("属性名")</font>
* 设置元素的固有属性
语法：<font color="purple">prop("属性名", "属性值")</font>
* 获取自定义属性
语法：<font color="purple">attr("属性名")</font>，类似于原生getAttribute()
* 设置自定义属性
语法：<font color="purple">attr("属性名", "属性值")</font>，类似于原生的setAttribute()
* 数据缓存data()
data()方法可以在指定的元素上存取数据，并不会修改DOM元素的结构，一旦页面刷新，之前存放的数据都将被移除。<font color="red">数据存放着元素的缓存中，当做变量缓存的</font>，用此方法获取H5的属性，可以不用加data前缀，而且获取到的结果可以为Number类型数据。

#### jQuery内容文本值
* 普通元素的内容`html()`（相当于原生的innerHTML()）
    1. 获取内容`html()`
    2. 设置内容元素`html("内容")`
* 普通元素的文本内容`text()`（相当于原生的innerText）
* 获取表单值 `val()` （相当于原生的value）
    1. 获取表单值 `val()`
    2. 设置表单值 `val("值")`

#### jQuery元素操作
* 遍历元素
    1. each()遍历，语法：`$("div").each(function(index, domEle){xxx}`
        * 回调函数由两个参数，index是元素的索引，<font color="red">domeEle是DOM元素对象，不是jQuery对象，所以在使用的时候要将其转化为DOM对象</font>
    2. $.each()，语法：`$.each(object, function(index, element){xxx;})`
        * `$.each()`方法可以用于遍历任何对象，主要用于数据处理，比如数组和对象；参数同each()方法；<font color="red">主要用于数据的遍历</font>
* 创建元素
语法：<font color="purple">var li = $("<li>我是后来创建的元素</li>")</font>
* 添加元素
    1. 内部添加，添加到目标元素的里面，成为其子节点
    语法：<font color="purple">$("ul").append(li)</font>默认为添加到后面，preappend()可以添加成为第一个子元素
    2. 外部添加，添加到目标元素的旁边，成为其兄弟节点
    语法：<font color="purple">$("ul").before(div)</font>after可以添加到目标节点的后面
* 删除元素
    1. 删除自己（自杀）
    语法：<font color="purple">$("ul").remove()</font>
    2. 删除自己的孩子
    语法：<font color="purple">$("ul").empty()</font>，效果类似于`$("ul").html()`，清空内部的HTML节点。
