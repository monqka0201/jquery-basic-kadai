$(function(){
   // id要素「change-color」がクリックされたら
 $('#change-color').on('click', function(){
  // id要素「target」の文字色を赤色に変える
  $('#target').css("color", "red")
 });


  // id要素「change-text」がクリックされたら
  $('#change-text').on('click', function(){
    // id属性「target」のテキストを「Hello!」に変える
    $('#target').text("Hello!")
  });

  // id属性「fade-out」がクリックされたら
  $('#fade-out').on('click', function(){
    // id属性「target」をフェードアウトさせる
    $('#target').fadeOut()
  });

  // id属性「fade-in」がクリックされたら
  $('#fade-in').on('click', function(){
    // id属性「target」をフェードインさせる
    $('#target').fadeIn()
  })
})




