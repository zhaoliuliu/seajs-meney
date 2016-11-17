define(function(require, exports, module) {
 $('#tiao').on('click', function(event){
            event.preventDefault();
            $('.off-tiao').addClass('is-visible');
            //$(".dialog-addquxiao").hide()
        });
        //关闭窗口
        $('.off-tiao').on('click', function(event){
            if( $(event.target).is('.cd-popup-close') || $(event.target).is('.off-tiao') ) {
                event.preventDefault();
                $(this).removeClass('is-visible');
            }
        });
        //ESC关闭
        $(document).keyup(function(event){
            if(event.which=='27'){
                $('.off-tiao').removeClass('is-visible');
            }
        });
});
