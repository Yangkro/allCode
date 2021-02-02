bind(window, "load", function(){
	var arrow_left = document.querySelector(".arrow-left");
	var arrow_right = document.querySelector(".arrow-right");
	var focus = document.querySelector(".focus");
	var focusWidth = focus.offsetWidth;
	var focusUl = document.getElementById("ul");
	var focusOl = focus.querySelector(".circle");
	var index = 0;
	var timer = null;//定义一个定时器
	bind(focus, "mouseenter", function(){
		arrow_left.style.display = "block";
		arrow_right.style.display = "block";
		// 停止定时器
		clearInterval(timer);
	});
	bind(focus, "mouseleave", function(){
		arrow_left.style.display = "none";
		arrow_right.style.display = "none";
		autoChange();
	});
	//点击按钮切换图片
	var num = 0;
	var flag = true;
	// 定义一个节流阀，避免多次点击后动画执行过快
	bind(arrow_left, "click", function(){
		if(flag){
			// 关闭节流阀，避免多次点击生效
			flag = false;
			if(num === 0) {	
			num = focusUl.childElementCount - 1;
			focusUl.style.left = -num * focusWidth + 'px';
		}
		num--;
		animation(focusUl, {left: -num * focusWidth}, function(){
			setOl(num);
			flag = true;
		});
		}
		
	});
	bind(arrow_right, "click", function(){
		if(flag){
			flag =false;
			if(num === focusUl.childElementCount - 1) {
			focusUl.style.left = 0;
			num = 0;
		}
		num++;
		animation(focusUl, {left: -num * focusWidth}, function(){
			if(num === focusUl.childElementCount - 1){
				// 如果移动到最后一个则第一个小圆点亮
				setOl(0);
			}else {
				setOl(num);
			}
			flag = true;
		});
		}
		
	});
	//生成小圆圈
	for(var i = 0; i < focusUl.childElementCount - 1; i++){
		// 生成子元素
		var li = document.createElement("li");
		li.setAttribute("data-index", i);
		// 添加子元素
		focusOl.appendChild(li);
		// 为每一个li绑定单击函数
		li.addEventListener("click", function(){
			var index = this.getAttribute("data-index");
			setOl(index);
			var distance = -focusWidth*index;
			animation(focusUl,{left: distance}, function(){
				num = index;
			});
		})
		
	}
	focusOl.children[0].style.backgroundColor = "darkorange";
	// 设置小圆点函数
	function setOl(index){
		for(var  i = 0; i < focusOl.childElementCount; i++){
			focusOl.children[i].style.backgroundColor = "";
		}
		// 将特定的指定特定的样式
		focusOl.children[index].style.backgroundColor = "darkorange";
	}
	autoChange();
	// 设置定时器，让轮播图自动播放
	function autoChange(){
		timer = setInterval(function(){
			// 自动点击右边切换键
			arrow_right.click();
		}, 2500);
		
	}
});