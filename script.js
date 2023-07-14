var colorPicker = document.getElementById('colorPicker');
var enterButton = document.getElementById('enterButton');
var elementosCambiables = document.querySelectorAll('.cambiable');

enterButton.addEventListener('click', function() {
    var nuevoColor = colorPicker.value;

for (var i = 0; i < elementosCambiables.length; i++) {
    elementosCambiables[i].style.color = nuevoColor;
}
});