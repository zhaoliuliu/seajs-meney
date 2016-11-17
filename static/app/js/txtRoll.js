// 文字打印效果
define(function(require, exports, module){
	// 文字滚动
        var l = $("#aaa").text().length;
        var s = $("#aaa").text();     
        var arr = [];
        for(var i = 0; i < l; i++){
           arr[i] = s.substr(i,1);
        }
        var t = 0;
        
        setInterval(function xiezi(){
           if(t < l){
                $("#bbb").append(arr[t]);
                t++;
            
            }else{
            $("#bbb").empty();
                t=0;
            }   
        },200);
});