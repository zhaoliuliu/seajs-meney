define(function(require,exports,module){

	   var $liList =$('.aboutIt-job ul li');
	   var $divList = $('.aboutIt-job .job-list');
	    $liList.on('click',function(e){
	    	var index1 = $liList.index($(e.target));
	    	curIndex = index1;
	    	$liList.eq(curIndex).addClass('active').siblings().removeClass('active');
	    	$divList.eq(curIndex).show().siblings().hide();

	    });
})