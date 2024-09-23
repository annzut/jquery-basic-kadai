$(function(){
  // class属性のbtnの要素がクリックされたら
  $('.btn').on('click',function(){
    // class属性のtext-boxに「クリックしました！」を表示
    $('.text-box').val('クリックしました！');
  });
});