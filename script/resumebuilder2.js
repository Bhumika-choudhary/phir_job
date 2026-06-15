document.querySelectorAll('.accordion-button').forEach(button => {

    button.addEventListener('click', function () {

        document.querySelectorAll('.resume-card')
            .forEach(card => {
                card.classList.remove('active-card');
            });

        this.closest('.resume-card')
            .classList.add('active-card');

    });


});


document.querySelectorAll(".accordion-btn").forEach(button => {

    button.addEventListener("click", function () {

        const targetId = this.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);

        const isOpen = targetContent.classList.contains("show");

        document.querySelectorAll(".accordion-content").forEach(content => {
            content.classList.remove("show");
        });

        document.querySelectorAll(".accordion-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        if (!isOpen) {
            targetContent.classList.add("show");
            this.classList.add("active");
        }

    });

});