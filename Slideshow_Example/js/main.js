var images = ["img/angry-cat-0.jpg", "img/angry-cat-1.jpg", "img/angry-cat-2.jpg", "img/angry-cat-3.jpg", "img/angry-cat-4.jpg"];
var currentImage = 0;

function changePicture(whichNum) {
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[whichNum]);
	currentImage = whichNum;
}

function nextImage(whichNum) {								//declare function(whichNum)
	var img = document.getElementById('mainImage');			//declare variable img = get mainImage element from DOM, also tried to active gEBI to 'next button' to affect that element and it also broke the code...argh!
	if (currentImage>images.length){						//if currentImage is greater than the lenght of images array
		currentImage = 0;									//take currentImage back to 0
	}
	currentImage++;											//if not, add one on each sequence in array
	img.setAttribute('src', images[whichNum]);				//set the attribue of img to the src of the array and each number in images array
	currentImage = whichNum;								//current image is whichNum function, i tried changing to currenImage = nextImage or nextImage() and broke the code. I'm stumped!!

}

function prevImage(whichNum) {								//declare function(whichNum)
	var img = document.getElementById('mainImage');			//declare variable img = get mainImage Element
	if (currentImage = -1) {								//
		currentImage = 0;
	}
	img.setAttribute('src', images[whichNum]);
	currentImage = whichNum;
}

