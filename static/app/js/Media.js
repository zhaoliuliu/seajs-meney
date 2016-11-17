define(function(require,exports,module){
  var MediaIndex = {
      MediaHtml:function(){
           var Mediahtml = require('view/index1Html.html');
           var Messagehtml = require('view/index2Html.html');
           var Cooperatehtml = require('view/index3Html.html');
           var MediahtmlFn = _.template( Mediahtml );
           var MessagehtmlFn = _.template( Messagehtml );
           var CooperatehtmlFn = _.template( Cooperatehtml );
           $.ajax({
               type:'GET',
               url:'json/test.json',
               success:function(res){
                var mediaArr = res.media;
                var messageArr = res.message;
                var cooperateArr = res.group;
                $('.medaia').html( MediahtmlFn({showMedia:mediaArr}));
                $('.product-box').html( MessagehtmlFn({showMessage:messageArr}) );
                $('#cooperate').html( CooperatehtmlFn({showCooperate:cooperateArr}) );
               }
           });
           this.MediaEvent();
      },
      MediaEvent:function(){
            jQuery(".txtScroll-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"top",autoPlay:true});
            var count = 60;
            $('.mess-code').click(function(){
                  var phone = $("#input1").val();
                  var password = $('#input2').val();
                  var code = $('#input3').val();
                  console.log(phone);
                  var pattern = /^1[0-9]{10}$/;
                  if ( phone == '' ) {
                      alert('手机号不能为空');
                  }else if( !pattern.test(phone) ){
                      alert('请输入正确的手机号码');
                  }else if( password == '' ){
                      alert('密码不能为空');
                  }else if( code == '' ){
                      alert('验证码不能为空');
                  }else if( code != 8765 ){
                      alert('请输入正确的验证码');
                  }else{
                      var timer = setInterval(runloop,1000);
                  }
                   function runloop(){
                      if ( !count == 0) {
                          count--;
                          $('.mess-code').text( (count--) + '秒后重获' ); 
                      }else{
                          clearInterval(timer);
                          $('.mess-code').text('获取验证码' );
                      }
                  }
            });
      }
  }
   module.exports = MediaIndex;
});