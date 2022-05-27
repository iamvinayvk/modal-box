var modal = document.getElementById("myModal");

var img = document.getElementsByClassName("images");
console.log(img);
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function openBox(n) {
  var changed = img[n - 1].childNodes[1];
  modal.style.display = "block";
  modalImg.src = changed.currentSrc;
  captionText.innerHTML = img[n - 1].childNodes[1].alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
