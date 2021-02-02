// function ajax (options) {
// 	// 默认值
// 	var defaults = {
// 		type: 'get',
// 		url: '',
// 		async: true,
// 		data: {},
// 		header: {
// 			'Content-Type': 'application/x-www-form-urlencoded'
// 		},
// 		success: function () {},
// 		error: function () {}
// 	}
// 	// 使用用户传递的参数替换默认值参数
// 	Object.assign(defaults, options);
// 	// 创建ajax对象
// 	var xhr = new XMLHttpRequest();
// 	// 参数拼接变量
// 	var params = '';
// 	// 循环参数
// 	for (var attr in defaults.data) {
// 		// 参数拼接
// 		params += attr + '=' + defaults.data[attr] + '&';
// 		// 去掉参数中最后一个&
// 		params = params.substr(0, params.length-1)
// 	}
// 	// 如果请求方式为get
// 	if (defaults.type == 'get') {
// 		// 将参数拼接在url地址的后面
// 		defaults.url += '?' + params;
// 	}

// 	// 配置ajax请求
// 	xhr.open(defaults.type, defaults.url, defaults.async);
// 	// 如果请求方式为post
// 	if (defaults.type == 'post') {
// 		// 设置请求头
// 		xhr.setRequestHeader('Content-Type', defaults.header['Content-Type']);
// 		// 如果想服务器端传递的参数类型为json
// 		if (defaults.header['Content-Type'] == 'application/json') {
// 			// 将json对象转换为json字符串
// 			xhr.send(JSON.stringify(defaults.data))
// 		}else {
// 			// 发送请求
// 			xhr.send(params);
// 		}
// 	} else {
// 		xhr.send();
// 	}
// 	// 请求加载完成
// 	xhr.onload = function () {
// 		// 获取服务器端返回数据的类型
// 		var contentType = xhr.getResponseHeader('content-type');
// 		// 获取服务器端返回的响应数据
// 		var responseText = xhr.responseText;
// 		// 如果服务器端返回的数据是json数据类型
// 		if (contentType.includes('application/json')) {
// 			// 将json字符串转换为json对象
// 			responseText = JSON.parse(responseText);
// 		}
// 		// 如果请求成功
// 		if (xhr.status == 200) {
// 			// 调用成功回调函数, 并且将服务器端返回的结果传递给成功回调函数
// 			defaults.success(responseText, xhr);
// 		} else {
// 			// 调用失败回调函数并且将xhr对象传递给回调函数
// 			defaults.error(responseText, xhr);
// 		} 
// 	}
// 	// 当网络中断时
// 	xhr.onerror = function () {
// 		// 调用失败回调函数并且将xhr对象传递给回调函数
// 		defaults.error(xhr);
// 	}
// }

function ajax(options) {
	let defaults = {
		type: 'get',
		data: {},
		url: "",
		success: function () { },
		error: function () { },
		header: {
			'Content-Type': 'application/x-www-form-ulrencoded'
		}
	}
	defaults = Object.assign(defaults, options)
	// 创建Ajax对象
	let xhr = new XMLHttpRequest()
	// 配置xhr，此时需要考虑到方法
	let params = ""
	if (defaults.type === 'get') {
		// get需要对参数进行拼接
		for (let attr in options.data) {
			params = params + attr + "="+options.data[attr] + '&'
		}
		params = params.substring(0, params.length - 1)
		// 因为是get所以需要将参数拼接在URL后面
		let url = defaults.url
		url = url + "?" + params
		xhr.open(defaults.type, url)
		// 发送请求
		xhr.send()
	}
	if (defaults.type === "post") {
		xhr.open(defaults.type, defaults.url)
		// 需要判断是不是采用JSON传送数据
		if (defaults.header['Content-Type'] === 'application/json') {
			xhr.send(JSON.stringify(defaults.data))
		} else {
			// 不是JSON就直接发送
			xhr.send(params)
		}
	}
	// 获取服务器的返回结果
	xhr.onload = function () {
		// 如果返回的是JSON那么将其转化为对象的形式
		let contentType = xhr.getResponseHeader('Content-Type')
		let responseText = xhr.responseText
		if (contentType.includes('application/json')) {
			responseText = JSON.parse(responseText)
		}
		if (xhr.status === 200) {
			// 如果是200那么就调用success回调函数
			defaults.success(responseText)
		} else {
			// 调用error函数
			defaults.error(responseText, xhr)
		}
	}
}