var count1 = 20;
var counter = setInterval(timer, 1000);

function timer(){
	count1 -= 1;
	if (count1 <=0) {
		button1();
		return
	}

	document.getElementById("timer").innerHTML = count1;

}
var counter2;
function button1() { 
	clearInterval(counter)
	document.getElementById("camera").src = "camera.png"
	var count2 = 60;
	counter2 = setInterval(timer2, 1000);
	document.getElementById("message").innerHTML = "Recording will stop automatically in ";
	document.getElementById("timer").innerHTML = count2;
	document.getElementById("button").innerHTML = "Stop Recording";
	document.getElementById("button").disabled = true;
	document.getElementById("button").setAttribute('onclick','stop()')
	document.getElementById("circ").id = "blink";

	function timer2(){
		count2 -= 1;

		if (count2<=55) {
			document.getElementById("button").disabled = false;
		}

		if (count2<=0) {
			stop();
			return
		}

		document.getElementById("timer").innerHTML = count2;
	}

}

function stop() {
	document.getElementById("message").innerHTML = "";
	document.getElementById("timer").innerHTML="";
	document.getElementById("button").disabled = true;
	document.getElementById("camera").src = "camerascreen.png"
	document.getElementById("blink").id = "circ";
	
	clearInterval(counter2);

}

// var count1 = 10;
// var counter = setInterval(timer1, 1000);
// var count2 = 60;
// var counter2 = setInterval(timer2, 1000);



// var button2 = function() {

// 	clearInterval(counter);
// 		document.getElementById("timer").innerHTML = "60";
// 		document.getElementById("message").innerHTML = "Recording will stop automatically in ";
// 		document.getElementById("button").innerHTML = "Stop Recording";
// 		document.getElementById("button").disabled = true;

// 		function timer2(){
// 				count2 -= 1;
// 				document.getElementById("timer").innerHTML = count2;
				
// 				if (count2<=40) {
// 				document.getElementById("button").disabled = false;
// 				}

// 				if (count2<=0) {
// 					clearInterval(counter2);

// 					return;
// 				}
// 			}
// }


