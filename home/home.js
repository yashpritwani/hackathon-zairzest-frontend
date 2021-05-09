window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("nav").style.display = "none";
  } else {
    document.getElementById("navbar").style.top = "-85px";
    document.getElementById("nav").style.display = "block";
  }
}

var count=0;
function opennav(){
if(count==0){
document.getElementById("nav").style.height="240px";
document.getElementById("icon").style.color="#3399ff";
count++;
}else{
document.getElementById("nav").style.height="45px";
document.getElementById("icon").style.color="#000";
count=0;
}
}

$(document).ready(function(){
		pagenum = 1;
		function AutoRotate() {
		   var myele = null;
		   var allElements = document.getElementsByTagName('label');
		   for (var i = 0, n = allElements.length; i < n; i++) {
			   var myfor = allElements[i].getAttribute('for');
			   if ((myfor !== null) && (myfor == ('slide_2_' + pagenum))) {
				   allElements[i].click();
				   break;
			   }
		   }
		   if (pagenum == 4) {
			   pagenum = 1;
		   } else {
			   pagenum++;
		   }
		}
		setInterval(AutoRotate, 5000);
	});


var scroll = window.requestAnimationFrame ||
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}
loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

var scroll3 = window.requestAnimationFrame ||
             function(callback3){ window.setTimeout(callback3, 1000/60)};
var elementsToShow3 = document.querySelectorAll('.show-on-scroll3'); 
function loop3() {

    Array.prototype.forEach.call(elementsToShow3, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible3');
      } else {
        element.classList.remove('is-visible3');
      }
    });

    scroll3(loop3);
}
loop3();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect3 = el.getBoundingClientRect();
  return (
    (rect3.top <= 0
      && rect3.bottom >= 0)
    ||
    (rect3.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect3.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect3.top >= 0 &&
      rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}






