define(function(require, exports, module){
	require('js/code.js');
	var main = require('view/investHtml.html');
	var mainHtml = _.template( main );
	// 通过ajax获取数据
	$.ajax({
		type:"GET",
		url:"json/test.json",
		success:function(res){
			// 获取main数据
			var mainArr = res.product;
			console.log(mainArr);
			$('#product').html( mainHtml({main:mainArr}) );
		}
	})
});