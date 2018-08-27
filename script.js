
$("h2").hover(function(){
	$("h2").css("color","orange");
}, function () {
	// body...
	$("h2").css("color","white");
});

$("h3").css({
	"color":"purple",
	"background-color":"lightgrey",
	"border-color": "white",
	"border-style":"solid"
});

// for the emoji to change pics
$("#pixs").mouseover(function(){
	$("#pixs").attr("src","servs2.png");

});
$("#pixs").mouseout(function(){
	$("#pixs").attr("src","servs.png");

});

$("#hand").mouseover(function(){
	$("#hand").attr("src","hands2.png");

});
$("#hand").mouseout(function(){
	$("#hand").attr("src","hands.png");

});

$("#logo3").mouseover(function(){
	$("#logo3").attr("src","bloog2.png");

});
$("#logo3").mouseout(function(){
	$("#logo3").attr("src","bloog.png");

});

$("#logo1").mouseover(function(){
	$("#logo1").attr("src","luv2.png");

});
$("#logo1").mouseout(function(){
	$("#logo1").attr("src","luv.png");

});


$("#logo4").mouseover(function(){
	$("#logo4").attr("src","about2.png");

});
$("#logo4").mouseout(function(){
	$("#logo4").attr("src","about.png");

});


window.onload = function() {
   $("#accordion").accordion();
};


