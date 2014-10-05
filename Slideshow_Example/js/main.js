var images = ["img/angry_cat_0.jpg", "img/angry_cat_1.jpg", "img/angry_cat_2.jpg", "img/angry_cat_3.jpg", "img/angry_cat_4.jpg"];
var currentImage = 0;

function changePicture(whichNum) {
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[whichNum]);
	currentImage = whichNum;
}

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
	img.setAttribute('src', images[currentImage]);
}

