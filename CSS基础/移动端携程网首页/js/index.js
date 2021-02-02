window.addEventListener("load", function(){
	var focus = document.querySelector(".focus");
	var focusWidth = focus.offsetWidth;
	var ul = document.querySelector(".focus-ul");
	var ol = focus.querySelector(".focus-ol");
	var index = 1;
	var timer = setInterval(function(){
		index++;
		var distance = -(index) * focusWidth;
		ul.style.transition = "all, 0.3s";
		ul.style.transform = "translateX("+ distance +"px)";
	}, 2000)
	// 添加一个过渡完成事件监听
	ul.addEventListener("transitionend", function(){
		if(index >= 4){
			index = 1;
			ul.style.transition = "none";
			var distance = - index * focusWidth;
			ul.style.transform = "translateX("+ distance +"px)"
		}
		if(index < 1){
			index = 3;
			ul.style.transition = "none";
			var distance = - index * focusWidth;
			ul.style.transform = "translateX("+ distance +"px)"
		}
		// 将含有current类的小圆点去掉该类
		ol.querySelector(".current").classList.remove("current");
		//为目标小圆点添加current类
		ol.children[index-1].classList.add("current");
	});
	// 实现手指拖动
	var moveX = 0;
	var startX = 0;
	ul.addEventListener("touchstart", function(event){
		// 按下的时候清除定时器
		clearInterval(timer);
		startX = event.targetTouches[0].pageX;
		
	});
	ul.addEventListener("touchmove", function(event){
		moveX = startX - event.targetTouches[0].pageX;
		var distance = - index * focusWidth - moveX;
		ul.style.transition = "none";
		ul.style.transform = "translateX("+ distance +"px)"
		event.preventDefault();
	});
	ul.addEventListener("touchend", function(){
		if(Math.abs(moveX) > 50){
			if(moveX > 0){
				index ++;
			}
			if(moveX < 0){
				index --
			}
			var distance = - index * focusWidth;
			ul.style.transition = "all 0.3s";
			ul.style.transform = "translateX("+ distance +"px)"
		}else {
			// 如果滑动值小于50，则反弹回来
			var distance = - index * focusWidth;
			ul.style.transition = "all 0.1s";
			ul.style.transform = "translateX("+ distance +"px)"
		}
		//当手指离开时，开启定时器
		clearInterval(timer);
		timer = setInterval(function(){
			index++;
			var distance = -(index) * focusWidth;
			ul.style.transition = "all, 0.3s";
			ul.style.transform = "translateX("+ distance +"px)";
		}, 2000)
	});
});