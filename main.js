var time = document.querySelector(".time");
var moon = document.querySelector(".fa-solid");
var body = document.querySelector("#body");
var sun = document.querySelector(".fa-regular");
var none = document.querySelector(".none");
var daytext = document.querySelector(".day")
var noontext = document.querySelector(".noon")
var footer = document.querySelector(".footer")
var footer1 = document.querySelector(".footer1")
function readTime() {
  // /get the current date
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var sec = date.getSeconds();
  hour = hour < 10 ? '0' + hour : hour;
minute = minute < 10 ? '0' + minute : minute;
sec = sec < 10 ? '0' + sec : sec;
var timeSTRING =  hour + ":" + minute + ":" + sec;

  //rendering the currnt date to html

  time.innerHTML = timeSTRING;
}
//

readTime();

setInterval(readTime, 1000);


// second way 
// moon.addEventListener('click',function(){
//     body.classList.add('darkmode')
//     body.classList.remove('lightmode')
//     moon.style.display='none'
//     none.style.display='block'
// })
// sun.addEventListener('click',function(){
//      body.classList.add('lightmode')
//      body.classList.remove('darkmode')
//     none.style.display='none'
//      moon.style.display='block'

// })

// first way

// moon.addEventListener("click", function () {
//   body.style.backgroundColor = "#000";
//   time.style.color = "#fff";
//   moon.style.display = "none";
//   none.style.display = "block";
// });

// sun.addEventListener("click", function () {
//   body.style.backgroundColor = "#fff";
//   time.style.color = "#000";
//   moon.style.display = "block";
//   none.style.display = "none";
// });

// auto darkmode

function auto() {
  var date = new Date();
  var hour = date.getHours();

  if (hour >= 18 || hour < 6) {
    body.style.backgroundColor = "black";
    time.style.color = "#fff";
    moon.style.display = "block";
    none.style.display = "none";
       noontext.style.display = "block"
     noontext.style.color = "white"
      daytext.style.display = "none"
      footer.style.backgroundColor = "#fff"
         footer.style.color = "#000"
         footer1.style.display = "none"

  }
  else if (hour >= 6) {
    body.style.backgroundColor = "#fff";
    time.style.color = "#000";
    moon.style.display = "none";
    none.style.display = "block";
     daytext.style.display = "block"
     daytext.style.color = "black"
        noontext.style.display = "none"
        footer1.style.backgroundColor = "black"
        footer1.style.color = "#fff"
        footer.style.display = "none"
  }
 
 
}

auto();



// var textx =['i am a developer','i write js',]