let btn1 = document.querySelectorAll(".login")
let btn2 = document.querySelectorAll(".sign")
let modal = document.querySelector(".modal")
let close = document.querySelector(".close")
let over = document.querySelector(".overlay")
// modal.classList.remove("hidden")

for (let i in btn1) {
    btn1[0].addEventListener("click", () => {
        modal.classList.remove("hidden")
        over.classList.remove("hidden")
    })

    btn2[0].addEventListener("click", () => {
        modal.classList.remove("hidden")
        over.classList.remove("hidden")
    })

    btn1[1].addEventListener("click", () => {
        modal.classList.remove("hidden")
        over.classList.remove("hidden")
    })

    btn2[1].addEventListener("click", () => {
        modal.classList.remove("hidden")
        over.classList.remove("hidden")
    })

    close.addEventListener("click", () => {
        modal.classList.add("hidden")
        over.classList.add("hidden")
    })
}