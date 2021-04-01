$(function(){
var page=0;
var lastPage =parseInt($(".slide img").length-1);
     $(".slide img").css("display","none");
          $(".slide img").eq(page).css("display","block");
function changePage(){
                $(".slide img").fadeOut(1000);
                $(".slide img").eq(page).fadeIn(1000);
};
var Timer;
function startTimer(){
Timer =setInterval(function(){
          if(page === lastPage){
                         page = 0;
                         changePage();
               }else{
                         page ++;
                         changePage();
          };
     },5000);
}
function stopTimer(){
clearInterval(Timer);
}
startTimer();
});

var mvh = $('.conteiner').height();

$(window).scroll(function() {
  var top = $(window).scrollTop();
  if (mvh < top) {
    $('.headerNav').css('background-color', '#282F35');
    } else {
    $('.headerNav').css('background-color', 'rgba(0,0,0,0)');
  }
});

ityped.init(document.querySelector("#ityped"), {
strings: ['Hello World!', 'Welcome to Into the Program!']
})
