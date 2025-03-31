$(function () {
  // class属性「btn」がクリックされたとき
  $('.btn').on('click', function() {

    // テキストボックスに「クリックされました！」と入力
    $('.text-box').val('クリックしました！');
  });
});