const buttonMenu = document.getElementById("buttonMenu")
const navMenu = document.getElementById("navMenu")




export const toggleMenu = () => {
    navMenu.classList.toggle("display")
}



buttonMenu.addEventListener("click", toggleMenu)

















