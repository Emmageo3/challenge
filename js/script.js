var images = [];

images[0] = ['img/slider1.jpg'];
images[1] = ['img/slider2.jpg'];
images[2] = ['img/slider3.jpeg'];
var index = 0;

function change() {
  document.getElementById("mainPhoto").src = images[index];
  if (index == 2) {
    index = 0;
  } else {
    index++;
  }

  setTimeout(change, 2000);
}

window.onload = change()