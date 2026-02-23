function changeToAngular() {
  var imgRef = document.getElementById("image");
  imgRef.src =
    "https://i.pinimg.com/1200x/ed/52/0c/ed520c4e67c723dd10c31ab9629c4e50.jpg";
  var btnRef = document.getElementById("btnAngular");
  btnRef.style.display = "none";
  var btnRef = document.getElementById("btnReact");
  btnRef.style.display = "inline-block";
}
function changeToReact() {
  var imgRef = document.getElementById("image");
  imgRef.src =
    "https://i.pinimg.com/736x/84/d4/1f/84d41f2e8078d20a79d9e5d69fa28644.jpg";
  var btnRef = document.getElementById("btnReact");
  btnRef.style.display = "none";
  var btnRef = document.getElementById("btnAngular");
  btnRef.style.display = "inline-block";
}
