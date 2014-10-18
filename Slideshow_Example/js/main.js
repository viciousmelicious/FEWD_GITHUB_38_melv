var images = ["img/angry_cat_0.jpg", "img/angry_cat_1.jpg", "img/angry_cat_2.jpg", "img/angry_cat_3.jpg", "img/angry_cat_4.jpg"];
var currentImage = 0;

function changePicture(whichNum) {
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[whichNum]);
	currentImage = whichNum;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
function nextImage() {										//declare function(whichNum)
	var img = document.getElementById('mainImage');			//declare variable img = get mainImage element from DOM, also tried to active gEBI to 'next button' to affect that element and it also broke the code...argh!
	if (currentImage>images.length){						//if currentImage is greater than the lenght of images array
		currentImage = 0;									//take currentImage back to 0
	}
	currentImage++;											//if not, add one on each sequence in array
	img.setAttribute('src', images[currentImage]);				//set the attribue of img to the src of the array and each number in images array
}

function prevImage() {										//declare function(whichNum)
	var img = document.getElementById('mainImage');			//declare variable img = get mainImage Element
	if (currentImage = -1) {								//
		currentImage = 0;
	}
=======
function nextImage() {										
	currentImage++;
															
	if (currentImage >= images.length){						
		currentImage = 0;									
	}
	
	var img = document.getElementById('mainImage');														
	img.setAttribute('src', images[currentImage]);				
}

function prevImage() {										
	currentImage = currentImage - 1;

	if (currentImage == -1) {								
		currentImage = images.length - 1;
	}

	var img = document.getElementById('mainImage');
>>>>>>> FETCH_HEAD
=======
function nextImage() {										
	currentImage++;
															
	if (currentImage >= images.length){						
		currentImage = 0;									
	}
	
	var img = document.getElementById('mainImage');														
	img.setAttribute('src', images[currentImage]);				
}

function prevImage() {										
	currentImage = currentImage - 1;

	if (currentImage == -1) {								
		currentImage = images.length - 1;
	}

	var img = document.getElementById('mainImage');
>>>>>>> FETCH_HEAD
=======
function nextImage() {										
	currentImage++;
															
	if (currentImage >= images.length){						
		currentImage = 0;									
	}
	
	var img = document.getElementById('mainImage');														
	img.setAttribute('src', images[currentImage]);				
}

function prevImage() {										
	currentImage = currentImage - 1;

	if (currentImage == -1) {								
		currentImage = images.length - 1;
	}

	var img = document.getElementById('mainImage');
>>>>>>> FETCH_HEAD
	img.setAttribute('src', images[currentImage]);
}

