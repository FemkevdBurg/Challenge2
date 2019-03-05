//Klok
//bron: https://greensock.com/forums/topic/18013-clock-animation-not-playing-on-setinterval/?tab=comments#comment-82442
$(document).ready(function() {
  var datetime = new Date(),
    h = datetime.getHours(),
    m = datetime.getMinutes(),
    s = datetime.getSeconds();

  //h = 12;

  if (h>7 & h<13) {
    animateMorningBackground();
  }

  if (h>12 & h<20 ){
    animateDayBackground();
  }

  if (h>20 || h>0 & h<7){
    animateNightBackground();
  }

  var myPointerH = $(".clockH");
  var myPointerM = $(".clockM");
  var myPointerS = $(".clockS");

  var oneSecond = 60 / 60; // 1 second
  var oneHour = 60 * 60; //1 hour tween
  var twelveHours = 12 * 60 * 60; //12 hour tween

  TweenMax.set(".second, .hour, .minute", {
    yPercent: -50,
    transformOrigin: "50% 100%"
  });

  var hourTween = TweenMax.to(myPointerH, twelveHours, {
    rotation: "360_cw",
    ease: Linear.easeNone,
    repeat: -1,
    paused: true
  });

  var minuteTween = TweenMax.to(myPointerM, oneHour, {
    rotation: "360",
    ease: Linear.easeNone,
    repeat: -1,
    paused: true
  });

  var secondsTween = TweenMax.to(myPointerS, oneSecond, {
    rotation: "360",
    ease: Linear.easeNone,
    repeat: -1,
    paused: true
  });

  function showTime() {
    (datetime = new Date()),
      (h = datetime.getHours()),
      (m = datetime.getMinutes()),
      (s = datetime.getSeconds());

    minutesAsSeconds = m * 60;
    hoursAsSeconds = h * 60 * 60;
    secondsAsSeconds = s / 60;

    hourTween.progress(hoursAsSeconds / twelveHours);
    minuteTween.progress(minutesAsSeconds / oneHour);
    secondsTween.progress(secondsAsSeconds / oneSecond);
  }
  showTime();

  setInterval(function() {
    showTime();
  }, 1000);
});
//Klok


//Tijd in cijfers
//Bron: https://greensock.com/forums/topic/17225-flip-clock-effect/?tab=comments#comment-77132

// set 3d transforms
TweenMax.set("#clock", {perspective:1500, scale:0.7125})
TweenMax.set(".upper", {rotationX:0.01, transformOrigin:"50% 100%"})
TweenMax.set(".lower", {rotationX:0.01, transformOrigin:"50% 0%"})

// set clock
var t, ss, mm, hh;
setTimeVars();
function setTimeVars(){
  t = new Date();
  t = new Date();
    ss = String(t.getSeconds());
  mm = String(t.getMinutes());
  hh = String( (t.getHours()<12) ? t.getHours()-12 : t.getHours() );
  if (ss.length==1) ss = "0"+ss;
  if (mm.length==1) mm = "0"+mm;
  if (hh.length==1) hh = "0"+hh;
}

h10.childNodes[3].innerHTML = h10.childNodes[7].innerHTML = "<span>"+Number(hh.substr(0,1))+"</span>";
h0.childNodes[3].innerHTML = h0.childNodes[7].innerHTML = "<span>"+Number(String(hh).substr(1,1))+"</span>";

m10.childNodes[3].innerHTML = m10.childNodes[7].innerHTML = "<span>"+Number(mm.substr(0,1))+"</span>";
m0.childNodes[3].innerHTML = m0.childNodes[7].innerHTML = "<span>"+Number(mm.substr(1,1))+"</span>";

s10.childNodes[3].innerHTML = s10.childNodes[7].innerHTML = "<span>"+Number(ss.substr(0,1))+"</span>";
s0.childNodes[3].innerHTML = s0.childNodes[7].innerHTML = "<span>"+Number(ss.substr(1,1))+"</span>";


// start ticking
var interval = setInterval(function(){
    setTimeVars();

  tick(s0, Number(ss.substr(1,1)) )

  if (ss.substr(1,1)=="9"){
    tick(s10, Number(ss.substr(0,1)) )
    if (ss=="59"){
      tick(s10, 5, true)
      tick(m0, Number(mm.substr(1,1)))
      if (mm.substr(1,1)=="9"){
        tick(m10, Number(mm.substr(0,1)))
        if (mm=="59") {
          tick(m10, 5, true)
          tick(h0, Number(hh.substr(1,1)))
          if (hh.substr(1,1)=="9") tick(h10, Number(hh.substr(0,1)))
          if (hh=="12") {
            tick(h0, Number(hh.substr(0,1)), true)
            tick(h10, Number(hh.substr(1,1)), true)
          }
        }
      }
    }
  }

}, 1000)

function tick(mc,i, toZero=false){
  // set numbers
  mc.childNodes[3].innerHTML = "<span>"+i+"</span>"; //start upper
  mc.childNodes[5].innerHTML = "<span>"+i+"</span>"; //start lower
  if ( i==9 || toZero ) i=-1;
  mc.childNodes[1].innerHTML = "<span>"+(i+1)+"</span>"; //end upper
  mc.childNodes[7].innerHTML = "<span>"+(i+1)+"</span>"; //end lower
  // animate tick
  TweenMax.fromTo(mc.childNodes[1], .3, {alpha:0},{alpha:1, ease:Power4.easeIn})
  TweenMax.fromTo(mc.childNodes[3], .3, {rotationX:0, background:"linear-gradient(0deg, 15%)"},{rotationX:-90, ease:Power1.easeIn})
  TweenMax.fromTo(mc.childNodes[7], .5+.2*Math.random(), {rotationX:90},{rotationX:0, delay:.1})
  TweenMax.fromTo(mc.childNodes[5], .6, {alpha:1},{alpha:0, delay:.1})
}
//Tijd in cijfers


//Achtergrond + tekst
function animateMorningBackground(){
  //alert("Het is momenteel ochtend");
  document.body.style.backgroundImage = "url('images/sunriseBackground.jpg')";
  document.getElementById('tekst').innerHTML = "Het is momenteel ochtend";
}

function animateDayBackground(){
  //alert("Het is momenteel overdag");
  document.body.style.backgroundImage = "url('images/dayBackground.jpg')";
  document.getElementById('tekst').innerHTML = "Het is momenteel overdag";
}

function animateNightBackground(){
  //alert("Het is momenteel nacht");
  document.body.style.backgroundImage = "url('images/nightBackground.jpg')";
  document.getElementById('tekst').innerHTML = "Het is momenteel nacht";
}
//Achtergrond + tekst

//Datum
var today = new Date();
document.getElementById('date').innerHTML = today.getDate() + "-" + today.getMonth() + 1 + "-" + today.getFullYear();var d = new Date();
//Datum


//TweenMax.to(".logospacex", 6, {
  //left:600,
  //backgroundColor:"red",
  //padding: 20,
  //borderColor:"white",
  //borderRadius:"50%"
//});


/*TweenMax.to(".logospacex", 6, {x:600, rotation:360, scale:0.5});*/
/*TweenMax.to(".logospacex", 2, {x:600, ease:Back.easeOut});*/
/*TweenMax.to(".logospacex", 2, {x:600, ease:Elastic.easeOut});*/
/*TweenMax.to(".logospacex", 2, {x:600, ease:Bounce.easeOut});*/

//TweenMax.from(".logospacex", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut});
