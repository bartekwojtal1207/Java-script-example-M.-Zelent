document.addEventListener("DOMContentLoaded",function(){


  function timeMachine(){
    var today  = new Date();
    var month  = today.getMonth();
    var day = today.getDate();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    month ++;
    switch (month) {
      case 1:
        month = "January";
        break;
      case 2:
        month = "February";
        break;
      case 3:
        month = "March";
        break;
      case 4:
        month = "April";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "June";
        break;
      case 7:
        month = "July";
        break;
      case 8:
        month = "August";
        break;
      case 9:
        month = "September";
        break;
      case 10:
        month = "October";
        break;
      case 11:
        month = "November";
        break;
      case 12:
        month = "December";
        break
      default:
      console.log("sprawdź datę");
    };

    if (seconds < 10 ) {
      seconds = "0"+ seconds;
    };
    if (minutes< 10 ) {
      minutes = "0"+ minutes;
    };
    if (hour < 10) {
      hour = "0" + hour;
    };
    var watch = document.querySelector(".watch");
    var monthDisplay = document.querySelector(".monthNumber");
    var dayDisplay  = document.querySelector(".dayNumber");
    var hourDisplay = document.querySelector(".hour")
    monthDisplay.innerHTML = "The current month is " + month;
    dayDisplay.innerHTML = "Today we have" +" " + day + " day of the month";
    hourDisplay.innerHTML =  "Hour :" + hour + "||"+  minutes  + "||" + seconds;
  //  console.log(seconds);
  setTimeout(timeMachine,1000);
  };
timeMachine();


// odc 2

var button = document.querySelector(".check");

  function checkInt(){
    var result = document.getElementById("wynik");
    var number = document.querySelector(".int").value;

  if (number < 0 ) {
    result.innerHTML = "Negative number";
    result.style.color = "red";
    result.style.border = "5px solid red";
  }else if (number > 0 ){
    result.innerHTML = "Positive number";
    result.style.color = "green";
    result.style.border = "5px solid green";
  }else if (number.length < 1 ){
    result.innerHTML = "Enter the number";
    result.style.color = "orange";
    result.style.border = "5px solid orange";
  }else if (number == 0 ){
    result.innerHTML = "zero";
    result.style.color = "blue";
    result.style.border = "5px solid blue";
  }else  {
    result.innerHTML = "Enter the number !!!";
    result.style.color = "orange";
    result.style.border = "5px solid orange";
  };
};

button.addEventListener("click",function(){
  checkInt();
});
//zadnaie nr 3

var btn = document.querySelector("#check");

function showInt() {
  var int1 = document.querySelector("#pole1").value;
  var int2 = document.querySelector("#pole2").value;
  var intiger = "";

  if (int1 < int2 ) {
    console.log("opcja 1 ");
    for (var i = int1; i <= int2; i++) {
      intiger = intiger + i + " ";
      document.querySelector(".reslutNumber").innerHTML = intiger;
    };
  }else if(int1 > int2){
    console.log("opcja 2 ")                 //j = 31 j  wieksze od 13 j maleje
    for (var j = int2 ; j <= int1; j++) {   // j =30 j wieksze od 13 j maleje
      intiger = j+ " "+ intiger  ;
      document.querySelector(".reslutNumber").innerHTML = intiger;
    };
  };
};
btn.addEventListener("click",function(){
showInt();
});
//zadanie ze sliderem
// var count  = Math.floor(Math.random()*5)+1;
// function slideFoto(){
//
// count++;
// console.log(count)
// if (count > 5) {
//   count = 1;
// };
//         var foto = "<img src=\"slajdy/slajd" + count + ".jpg\"/>";
//         document.getElementById("slider").innerHTML = foto;
//     setTimeout(showInt,5000);
//     };



// slideFoto();




});
