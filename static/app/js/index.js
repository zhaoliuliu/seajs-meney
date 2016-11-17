define(function(require, exports, module){
   require('js/txtRoll.js');
   require('js/time.js');
   require('js/phone.js');
   require('js/about.js');
   require('js/popup.js');
   require('js/inputent.js');
   require('js/tiaoyue.js');
   require('js/amdiao');
   var JsMedia = require('js/Media.js');
   var SlideImg2 = require('slideimg/slideimg');
	var Task = {
		initPage: function(){
			JsMedia.MediaHtml();
			new SlideImg2({
				wraper: $('#slideImgBox'),
				imgs: [					{
						imgsrc: 'images/banner.jpg'
					},
					{
						imgsrc: 'images/banner2.jpg'
					},
					{
						imgsrc: 'images/banner3.jpg'
					},
					{
						imgsrc: 'images/banner4.jpg'
					},
				]
			});
		}
	}
	module.exports = Task;

});



