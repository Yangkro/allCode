### JQuery的基本使用
* jQuery的顶级对象\$
1. \$是jQuery的顶级对象，相当于原生JS中的window，把元素利用\$包装成jQuery对象，就可以调用jQuery的方法。
2. \$是jQuery的别称，在代码中可以使用\$代替jQuery，也可以直接使用jQuery。
* jQuery入口函数
    ```
    $(function(){
        ....//此处是页面的DOM加载完成的入口
    })
    //等同于下面这种方式
    $(document).ready(function(){
        ...//此处是页面DOM加载完成的入口
    })
    ```
这种写法相当于原生js中的DOMContentLoad，等待加载完所有DOM元素。而load事件是等页面的文档，外部js文件，CSS文件和图片加载完成后才生效。
#### DOM对象和jQuery对象
* DOM对象：用原生js获取过来的对象就是DOM对象
* jQuery对象：用jQuery方式获取过来的对象就是jQuery对象<font color="red">本质是通过$把DOM元素进行了包装，生成了伪数组的</font>  
<font color="red">jQuery对象只能使用jQuery方法，DOM对象则使用原生的JavaScript属性和方法，二者不可以混合使用</font>

##### DOM对象和jQuery对象的相互转换
因为原生JS中有许多属性jQuery中没有，而想使用这些方法或者属性必须讲jQuery对象转化我DOM对象，同理jQuery中封装了许多优秀的函数，原生JS的DOM对象必须转化为jQuery对象才能使用。
* DOM对象转化为jQuery对象 `$(DOM对象)`
* jQuery对象转换为DOM对象 `$('div')[index]`或者`$('div').get(index)` index为索引号
