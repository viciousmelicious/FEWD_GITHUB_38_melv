var stuff = ["apples", "oranges", "potatoes"];

	$.each(stuff, function(){
	
});

var fruit = "apple"; 

function init() {
	$alert("#food").val("fruit");
}

$(document).ready(function()){
	displayVals();
});

function displayVals () {
	var singleValuse = $( "#single").val();

	var multipleValuse = $( "#multiple" ).val () || [];

	$( "p" ).html(singleValues);

}



//$ means 'hi to jQuery, . means seomthing is going to happen. each method'. 
// function above is an anonymous function doesn't need a name bc it will automatically be invoked, it also has it's own scope
// alert("hey")
//document.ready method-LOOK UP in jQuery