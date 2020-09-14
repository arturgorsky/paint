const widthInp = document.getElementById('canvas-width-inpt');
const heightInp = document.getElementById('canvas-height-inpt');

function togglePopup(){
    document.getElementById("settings-popup").classList.toggle("active");
}

function displayCurrentWidth() {
    widthInp.value = canvas.width;
}

function displayCurrentHeight() {
    heightInp.value = canvas.height;
}

function displayCurrentSettings() {
    displayCurrentWidth();
    displayCurrentHeight();
}


widthInp.addEventListener("input", (e) => {
    canvas.width = parseInt(e.target.value);
})

heightInp.addEventListener("input", (e) => {
    canvas.height = parseInt(e.target.value);
})