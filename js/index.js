var num = 12;

// 數量計算函數
function click(num_var) {
  num+=num_var;
  $('.num').text(num);
}

// 判斷數量函數
function check() {
  if(num<10) {
    $('.text').text('數量極少!!!');
    $('.text').css('border-color','#FF1304');
    $('.text').css('color','#FF1304');
    $('.fill_stock').addClass('fill_stock_open');
  }else if(num<20) {
    $('.text').text('賣得不錯喔!!!');
    $('.text').css('border-color','#FFFA00');
    $('.text').css('color','#FFFA00');
    $('.fill_stock').removeClass('fill_stock_open');
  }else {
    $('.text').text('還剩很多!!!');
    $('.text').css('border-color','#fff');
    $('.text').css('color','#fff');
  }
}

// 減數量
$('.minus').click(function() {
  click(-1);
  check();
})

// 加數量
$('.add').click(function() {
  click(1);
  check();
})

// 電話聯絡
var timer = 0;
$('.fill_stock').click(function() {
  setInterval(function() {
    timer+=1;
    $('.fill_stock').text('☎ 聯絡中... '+timer+''+'秒');
    if(timer>30) {
      $('.fill_stock').text('目前客服人員忙線中!!!');
    }
  },1000);
})