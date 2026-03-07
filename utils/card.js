// import dotenv from "dotenv";
// dotenv.config();

// import axios from "axios"
// const api = axios.create({
//   timeout: 15000,
//   baseURL: "http://localhost:3000",
// });

// const baseURL = "http://localhost:3000";

// const api = axios.create({
//   timeout: 15000,
//   baseURL: baseURL,
// });

const enterCard = document.getElementById("open-card")

const card1 = document.getElementById("card-1")
const card2 = document.getElementById("card-2")

const back1 = document.getElementById("close-1")
const switch1 = document.getElementById("switch-1")
const back2 = document.getElementById("close-2")
const switch2 = document.getElementById("switch-2")

const bests = ["RK9", "Luniieerr", "RenSanfer", "Tiranossaura Rex"]

/* ------------------------ Enter Button Click ------------------------ */
enterCard.addEventListener("click", () => {
    setTimeout(() => {
        enterCard.classList.add("closed")
    }, 200);

    setTimeout(() => {
        card1.classList.remove("closed")
    }, 500);
});

/* ------------------------ Util Button Click ------------------------ */
back1.addEventListener("click", () => {
    setTimeout(() => {
        card1.classList.add("closed")
    }, 200);

    setTimeout(() => {
        enterCard.classList.remove("closed")
    }, 500);
});
switch1.addEventListener("click", () => {
    setTimeout(() => {
        card1.classList.add("closed")
    }, 200)
    
    setTimeout(() => {
        card2.classList.remove("closed")
        bot()
    }, 500);
});

back2.addEventListener("click", () => {
    setTimeout(() => {
        card2.classList.add("closed")
    }, 200);

    setTimeout(() => {
        enterCard.classList.remove("closed")
    }, 500);
});
switch2.addEventListener("click", () => {
    setTimeout(() => {
        card2.classList.add("closed")
    }, 200);

    setTimeout(() => {
        card1.classList.remove("closed")
    }, 500);
});

/* ------------------------ Conectar ao Bot ------------------------ */
// async function bot() {
//     const { data } = await api.get(`/api/users`);
//     console.log(data)
// }

// async function bot() {
//     try {
//         const { data } = await api.get(`/api/users`);
//         console.log(data);
//     } catch (error) {
//         console.error("Erro ao buscar usuários:", error);
//     }
// }