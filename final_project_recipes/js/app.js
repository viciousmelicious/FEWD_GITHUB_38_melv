// A $( document ).ready() block.
$( document ).ready(function() {
   showDessert();
   showLunch(); 
   showDinner(); 
   showBreakfast();  
});
// HOW DO I 'RESET' IMAGES EACH TIME I WANT TO CHOOSE A DIFFERENT MEAL, ALSO SOME MEALS ARE BOTH SO DON'T WANT THEM TO DISAPPEAR WHEN CLICKED ON LUNCH, DINNER, ETC//
function showBreakfast(){
	$("#breakfast").on("click", function(){    		//function hideItalin is firing off on everything with class .noItalian when clicked
		hideAll();  
		$('.breakfast').removeClass('meal-hidden');					//everything that has class .italian is hidden. deleting div "row" will allow showcase to move up
	})
}

function showLunch(){
	$("#lunch").on("click", function(){
		hideAll();
		$('.lunch').removeClass('meal-hidden');
	})
}
function showDinner(){
	$("#dinner").on("click", function(){
		hideAll();
		$('.dinner').removeClass('meal-hidden');
	})
}
function showDessert(){
	$("#dessert").on("click", function(){
		hideAll();
		$('.dessert').removeClass('meal-hidden');
		//$('.dessert').addClass('meal-shown');
	})
}

function reset() {
	var meals = [".breakfast", ".lunch", ".dinner", ".dessert"]
	$.each(meals, function(index, value){
		$(meals[index]).removeClass('meal-hidden'); 
 	})
}

function hideAll() {
	var meals = [".breakfast", ".lunch", ".dinner", ".dessert"]
	$.each(meals, function(index, value){
		//$(meals[index]).removeClass('meal-shown'); 
		$(meals[index]).addClass('meal-hidden');
 	})
}
