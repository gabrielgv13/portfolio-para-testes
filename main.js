
function hover_buttons() {
    const listButtons = document.querySelectorAll(".button__hint")

    listButtons.forEach(button => {
            button.addEventListener("mouseover", () => {button.classList.add("button__mouseover");});
            button.addEventListener("mouseout", () => {button.classList.remove("button__mouseover");});
        });
}


function hover_links() {
    const listLinks = document.querySelectorAll(".remove__nav__link")

    listLinks.forEach(link => {
        link.addEventListener("mouseover", () => {link.classList.add("remove__nav__link__anim");})
        link.addEventListener("mouseout", () => {link.classList.remove("remove__nav__link__anim");})
    })
}

