//スクロールを検知クラスを付与
$(function() {
    var footerEl = $('.footer');
    
    //スクロールしたらfooterを表示
    $(window).on('load scroll', function(){
      if($(this).scrollTop() > 0) {
        footerEl.addClass('active');
      }else{
        footerEl.removeClass('active');
      }
    });

});