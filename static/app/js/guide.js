define(function(require, exports, module){
    var Task = {
	    	index:function(){
	    		Task.initPage();
	    	},
	    	// 同意协议
			initPage: function(){
				$('#js-btn-protocol').on('click',function(){
					$(this).find('span').fadeToggle();
				});
		    }
		    
	    }
	module.exports = Task;
});