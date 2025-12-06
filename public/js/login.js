function irparahome() {
    window.location.href = "homepage.html";
}

const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    const erroEmail = document.getElementById("erroEmail");
    const erroSenha = document.getElementById("erroSenha");
    const loginErrorMessage = document.getElementById("loginErrorMessage");

    erroEmail.textContent = "";
    erroSenha.textContent = "";
    loginErrorMessage.textContent = "";
    loginErrorMessage.classList.add('hidden');

    let formularioValido = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        erroEmail.textContent = "O e-mail é obrigatório.";
        formularioValido = false;
    } else if (!emailRegex.test(email)) {
        erroEmail.textContent = "Digite um e-mail válido.";
        formularioValido = false;
    }

    const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (senha === "") {
        erroSenha.textContent = "A senha é obrigatória.";
        formularioValido = false;
    } else if (senha.length < 6) {
         erroSenha.textContent = "A senha deve ter no mínimo 6 caracteres.";
         formularioValido = false;
    } else if (!senhaRegex.test(senha)) {
        erroSenha.textContent = "A senha deve conter letras e números.";
        formularioValido = false;
    }

    if (formularioValido) {
        window.location.href = '../pages/homepage.html';
        form.reset();
    } else {
        loginErrorMessage.classList.remove('hidden');
        loginErrorMessage.style.color = '#dc3545';
    }
});
