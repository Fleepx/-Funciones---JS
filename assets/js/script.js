function pintar(event, color = 'green') {
    event.target.style.backgroundColor = color;
}

const ele = document.getElementById("elemento1");
ele.addEventListener("click", function(event) {
    pintar(event, 'yellow');
});