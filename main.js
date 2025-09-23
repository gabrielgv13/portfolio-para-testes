
function hover_buttons() {
    const listButtons = document.querySelectorAll(".button__hint")

    listButtons.forEach(button => {
            button.addEventListener("mouseover", () => {button.classList.add("button__mouseover");});
            button.addEventListener("mouseout", () => {button.classList.remove("button__mouseover");});
        });
}

