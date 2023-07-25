document.addEventListener("mouseover", mouseOverFunction);
function mouseOverFunction() {
  document.getElementById("greet").innerHTML = "<h1>Welcome to My Website!<h1>"
}

document.addEventListener("mouseout", mouseOutFunction);
function mouseOutFunction() {
  document.getElementById("greet").innerHTML = "<h1>Hello, I am Senay</h1><p>A website created by me.</p>"
}
