const profileIcon = document.querySelector(".profile-icon");

const menu = document.createElement("div");
menu.classList.add("profile-menu");
menu.innerHTML = `
    <a href="#">Meu Perfil</a>
    <a href="../pages/login.html">Sair</a>
`;

profileIcon.appendChild(menu);

profileIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    if (!profileIcon.contains(e.target)) {
        menu.classList.remove("open");
    }
});

