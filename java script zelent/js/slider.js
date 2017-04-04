//document.addEventListener("DOMContentLoaded",function(){

var slider = document.getElementById('slider');
var number = Math.floor(Math.random()*5 +1);
var timerOne = 0;
var timerTwo = 0;


function setSlide(slideNumber){
  clearTimeout(timerOne);
  clearTimeout(timerTwo);
  number = slideNumber -1;
  hideFoto();
  setTimeout("moveFoto()",1000)
};
function hideFoto(){
  $("#slider").fadeOut(1000);
}
function moveFoto (){
    number ++;
      if (number > 5){
        number = 1;
      };
    var photo = "<img src=\"photo/zdj"+number +".jpg\" />";
    slider.innerHTML = photo;
    $("#slider").fadeIn(1000);
      timerOne = setTimeout("moveFoto()",3000);
      timerTwo = setTimeout("hideFoto()",2000);
};

  $("button[name = 'button']").on("click",function(){
    slideNumber = ($(this).data("number"));
    console.log(slideNumber)
    setSlide(slideNumber)
  });



//});
