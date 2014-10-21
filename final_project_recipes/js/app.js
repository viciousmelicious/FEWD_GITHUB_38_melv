// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
   	showBreakfast();
   	showLunch();
   	showDinner();
   	showDessert();
   
});
// HOW DO I 'RESET' IMAGES EACH TIME I WANT TO CHOOSE A DIFFERENT MEAL, ALSO SOME MEALS ARE BOTH SO DON'T WANT THEM TO DISAPPEAR WHEN CLICKED ON LUNCH, DINNER, ETC//
function showBreakfast(){
	$("#breakfast").on("click", function(){    		//function hideItalin is firing off on everything with class .noItalian when clicked
		$(".col-md-4:not(.breakfast)").fadeOut();					//everything that has class .italian is hidden. deleting div "row" will allow showcase to move up
	})
}

function showLunch(){
	$("#lunch").on("click", function(){
		console.log('fired');
		$(".col-md-4:not(.lunch)").fadeOut();
	})
}
function showDinner(){
	$("#dinner").on("click", function(){
		console.log('fired');
		$(".col-md-4:not(.dinner)").fadeOut();
	})
}
function showDessert(){
	$("#dessert").on("click", function(){
		console.log('fired');
		$(".col-md-4:not(.dessert)").fadeIn();
		$(".col-md-4:not(.dessert)").fadeOut();  //trying to get this to work...get other non-desserts to fade in before fading out??
	})
}