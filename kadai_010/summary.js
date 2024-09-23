// 文字色変化
// id属性のchenge-colorの要素がクリックされたら
$('#change-color').on('click',function(){
  // テキストの内容を青色に変化させる
  $('#target').css('color','blue');
}); 

// 文字内容変化
// id属性のchenge-textの要素がクリックされたら
$('#change-text').on('click',function(){
  // テキストの内容を「Hello!」に変化させる
  $('#target').text('Hello!');
});

// フェードアウト
// id属性のfade-outの要素がクリックされたら
$('#fade-out').on('click',function(){
  // テキストの内容をフェードアウトさせる
  $('#target').fadeOut();
});

// フェードイン
// id属性のfade-inの要素がクリックされたら
$('#fade-in').on('click',function(){
  // テキストの内容をフェードアウトさせる
  $('#target').fadeIn();
});