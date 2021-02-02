### jQuery事件
#### jQuery的事件注册
* 单个事件绑定，点连接一次只能绑定一个`$("div").click`
* `on()`绑定事件，on()方法在匹配元素上绑定一个或者多个事件的处理函数 
语法：<font color="purple">element.on(events, [selector], fn)</font>
参数：
    1. events：一个或多个用空格分隔开的事件类型，如"click"或者"kedown"
    2. selector：元素的子元素选择器
    3. fn：回调函数，绑定在元素上的的侦听函数
当只写一个回调函数，则前面绑定的事件类型触发时都会执行这个回调函数<font color="red">需要绑定多个事件时可以用对象的形式传参</font>
利用子选择器用on()实现事件委托，其本质是<font color="red">将子元素身上的事件绑定在父元素身上，就是把事件委托给父元素，但是触发的对象是子选择器</font>
注：**on可以动态绑定，即可以给未来创建的元素绑定事件。本质就是将事假绑定给父元素，然而触发事件的对象为子元素，那么当创建新的子元素时，由于事件冒泡的存在肯定可以触发父元素绑定的事件了**
* 解绑事件off()， off()方法可以移除通过on()方法添加的事件处理程序
    1. 解绑某元素上的所有事件 `$("div").off()`
    2. 解绑具体的某一个事件 `$("div").off("click")`
    3. 解绑事件委托 `$("ul").off("click", "li")`
* one()绑定事件只会触发一次
#### jQuery事件处理
* 自动触发事件
    1. 元素.事件();会触发事件的默认行为
    2. 元素.trigger("事件")
    3. 元素.triggerHandler("事件") 不会触发事件的默认行为
#### jQuery事件对象
* 阻止冒泡 ：`event.stopPropagation()`
* 阻止默认行为：`event.preventDefault()`或者`return false`
* 矛盾处理，函数名重复等问题。
    1. 用jQuery来代替\$
    2. 用noConflict()函数来释放jQuery的控制权，实现自定义`var subian = $.noConflict()`