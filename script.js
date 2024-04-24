function showDisplay(displayId) {
    var displays = document.getElementsByClassName('body1');
    for (var i = 0; i < displays.length; i++) {
        displays[i].style.display = 'none';
    }
    var displayToShow = document.getElementById(displayId);
    displayToShow.style.display = 'block';
}
document.getElementById('display1').style.display = 'block';
document.getElementById('display2').style.display = 'none';
document.getElementById('display3').style.display = 'none';
document.getElementById('display4').style.display = 'none';
