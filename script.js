var startbox1 = document.getElementById("box1").innerHTML;
var startbox2 = document.getElementById("box2").innerHTML;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
//   alert("item dropped succesfully!")
  event.target.appendChild(document.getElementById(data));

}

function resetBoxes() {
  document.getElementById("box1").innerHTML = startbox1;
  document.getElementById("box2").innerHTML = startbox2;
}