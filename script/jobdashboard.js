document.querySelectorAll('.slider-track').forEach(track => {
    track.innerHTML += track.innerHTML;
});


function closeAlert() {
    const alertBox = document.getElementById("profileAlert");

    alertBox.style.opacity = "0";
    alertBox.style.transform = "translateY(-10px)";

    setTimeout(function () {
        alertBox.style.display = "none";
    }, 300);
}