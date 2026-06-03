document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".accordion-item-custom");

    // First accordion active by default
    items[0].classList.add("active");

    items.forEach(item => {

        const header = item.querySelector(".accordion-header-custom");

        header.addEventListener("click", () => {

            // Close all accordions
            items.forEach(other => {
                other.classList.remove("active");
            });

            // Open clicked accordion
            item.classList.add("active");

        });

    });

});

document.querySelectorAll('.slider-track').forEach(track => {
    track.innerHTML += track.innerHTML;
});