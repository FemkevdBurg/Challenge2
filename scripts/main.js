//Digitale klok + het instellen van de tijd die ik voor de momenten van de dag kan gebruiken
function clock() {
	var time = new Date(),

	hours = time.getHours(),

	minutes = time.getMinutes(),

	seconds = time.getSeconds();

  //hours = 7;

  if (hours>6 & hours<13) {
    animateMorning();
  }

  if (hours>12 & hours<18 ){
    animateDay();
  }

  if (hours>17 & hours<23){
    animateEvening();
  }

  if (hours>22 || hours>=0 & hours<6){
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
//Digitale klok + het instellen van de tijd die ik voor de momenten van de dag kan gebruiken

//Veranderingen per moment van de dag
function animateMorning(){
  document.body.style.backgroundImage = "url('images/sunriseBackground.jpg')";
  //Photo by Bruno Scramgnon from Pexels
  document.getElementById('tekst').innerHTML = "Het is momenteel ochtend";
  document.getElementById('info').style.backgroundColor = "#FFBC4E";
  document.getElementById('picture').src = "images/sunrise.png";
}

function animateDay(){
  document.body.style.backgroundImage = "url('images/dayBackground.jpg')";
  document.getElementById('tekst').innerHTML = "Het is momenteel overdag";
  document.getElementById('info').style.backgroundColor = "grey";
  document.getElementById('picture').src = "images/sun.png";
}

function animateEvening(){
  document.body.style.backgroundImage = "url('images/eveningBackground.jpg')";
  //Photo by Reynaldo Brigantty from Pexels
  document.getElementById('tekst').innerHTML = "Het is momenteel avond";
  document.getElementById('info').style.backgroundColor = "#DE86AF";
  document.getElementById('picture').src = "images/cloudy.png";
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
TweenMax.from(".titel", 5, {x:-600, ease:Elastic.easeOut});
TweenMax.from(".logospacex", 4, {opacity: 0, x:600, rotation:300, scale:0.5, delay: 2});
TweenMax.from(".picture", 4, {opacity: 0, x:600, rotation:300, scale:0.5, delay: 2});
TweenMax.from(".box1", 2, {opacity: 0, ease:Bounce.easeOut, delay: 5});
TweenMax.from(".box3", 2, {opacity: 0, ease:Bounce.easeOut, delay: 6});
TweenMax.from(".box4", 2, {opacity: 0, ease:Bounce.easeOut, delay: 7});
//Animaties met TweenMax
