
function clock() {
	var time = new Date(),

	hours = time.getHours(),

	minutes = time.getMinutes(),

	seconds = time.getSeconds();

  //hours = 8;

  if (hours>6 & hours<13) {
    animateMorning();
  }

  if (hours>12 & hours<20 ){
    animateDay();
  }

  if (hours>19 || hours>0 & hours<6){
    animateNight();
  }

	document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

    function harold(standIn) {
		if (standIn < 10) {
			standIn = '0' + standIn
		}
		return standIn;
	}

}

setInterval(clock, 1000);


//Veranderingen per moment van de dag
function animateMorning(){
  document.body.style.backgroundImage = "url('images/sunriseBackground.jpg')";
  document.getElementById('tekst').innerHTML = "Het is momenteel ochtend";
  document.getElementById('info').style.backgroundColor = "#FFBC4E";
  document.getElementById('picture').src = "images/sunrise.png";
}

function animateDay(){
  document.body.style.backgroundImage = "url('images/dayBackground.jpg')";
  document.getElementById('tekst').innerHTML = "Het is momenteel overdag";
  document.getElementById('info').style.backgroundColor = "white";
  document.getElementById('picture').src = "images/sun.png";
}

function animateNight(){
  document.body.style.backgroundImage = "url('images/nightBackground.jpg')";
  document.getElementById('tekst').innerHTML = "Het is momenteel nacht";
  document.getElementById('info').style.backgroundColor = "#046379";
  document.getElementById('picture').src = "images/moon.png";
}
//Veranderingen per moment van de dag

//Datum
var today = new Date();
document.getElementById('date').innerHTML = today.getDate() + "-" + today.getMonth() + 1 + "-" + today.getFullYear();var d = new Date();
//Datum


//Animaties met TweenMax

/*TweenMax.to(".logospacex", 6, {
  left:600,
  backgroundColor:"red",
  padding: 20,
  borderColor:"white",
  borderRadius:"50%"
});


TweenMax.to(".logospacex", 6, {x:600, rotation:360, scale:0.5});
TweenMax.to(".logospacex", 2, {x:600, ease:Back.easeOut});
TweenMax.to(".logospacex", 2, {x:600, ease:Elastic.easeOut});
TweenMax.to(".logospacex", 2, {x:600, ease:Bounce.easeOut});

TweenMax.from(".logospacex", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut});*/

//Animaties met TweenMax
