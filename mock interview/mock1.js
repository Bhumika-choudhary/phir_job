

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".goal-card");

    cards.forEach(card => {

        card.addEventListener("click", function () {

            cards.forEach(item => {
                item.classList.remove("active-card");
            });

            this.classList.add("active-card");

            const radio = this.querySelector('input[type="radio"]');

            if (radio) {
                radio.checked = true;
            }

        });

    });

});

