const skillInput = document.getElementById("skillInput");
const skillsContainer = document.getElementById("skillsContainer");

skillInput.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        e.preventDefault();

        const skill = this.value.trim();

        if(skill === "") return;

        const tag = document.createElement("span");

        tag.className = "skill-tag";

        tag.innerHTML = `
            ${skill}
            <i class="bi bi-x-lg"></i>
        `;

        tag.querySelector("i").addEventListener("click", function(){
            tag.remove();
        });

        skillsContainer.appendChild(tag);

        this.value = "";
    }
});