
var elem = document.getElementById("imgTag");

var count = 0;
var links = ["1.jpg", "2.jpg", "3.jpg"]; 


function updateImage() {
  elem.setAttribute("src", links[count]);
}


function fun(direction) {
  if (direction === '+') {
    count = (count + 1) % links.length;
  } else if (direction === '--') {
    count = (count - 1 + links.length) % links.length;
  }
  updateImage();
}


setInterval(() => {
  count = (count + 1) % links.length; 
  updateImage(); 
}, 5000);


updateImage();
