const enterCard = document.getElementById("open-card")

const card1 = document.getElementById("card-1")
const card2 = document.getElementById("card-2")

const back1 = document.getElementById("back-1")
const switch1 = document.getElementById("switch-1")
const back2 = document.getElementById("back-2")
const switch2 = document.getElementById("switch-2")

/* ------------------------ Enter Button Click ------------------------ */
enterCard.addEventListener("click", () => {
    setTimeout(() => {
        enterCard.classList.add("close")
    }, 200);

    setTimeout(() => {
        card1.classList.remove("close")
    }, 500);
});

/* ------------------------ Util Button Click ------------------------ */
back1.addEventListener("click", () => {
    setTimeout(() => {
        card1.classList.add("close")
    }, 200);

    setTimeout(() => {
        enterCard.classList.remove("close")
    }, 500);
});
switch1.addEventListener("click", () => {
    setTimeout(() => {
        card1.classList.add("close")
    }, 200)
    
    setTimeout(() => {
        card2.classList.remove("close")
    }, 500);
});

back2.addEventListener("click", () => {
    setTimeout(() => {
        card2.classList.add("close")
    }, 200);

    setTimeout(() => {
        enterCard.classList.remove("close")
    }, 500);
});
switch2.addEventListener("click", () => {
    setTimeout(() => {
        card2.classList.add("close")
    }, 200);

    setTimeout(() => {
        card1.classList.remove("close")
    }, 500);
});