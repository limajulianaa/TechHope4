// public/js/login.js

// ATENÇÃO: Se este arquivo estiver em TypeScript (src/login.ts),
// você precisará recompilar após as alterações.
// Como você disse que não tem login.ts, estamos editando o .js diretamente.

// Esta função será para redirecionar para a homepage após o login
function irparahome() {
    window.location.href = "homepage.html";
}

// Obtém a referência para o formulário principal
const form = document.getElementById("form");

// Adiciona um "ouvinte" para quando o formulário for enviado
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário (que recarregaria a página)

    // --- 1. Obtém os valores digitados nos campos ---
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // --- 2. Obtém as referências para os elementos de mensagem no HTML ---
    // Estes são os SPANs e o P que você já tem no seu HTML
    const erroEmail = document.getElementById("erroEmail");
    const erroSenha = document.getElementById("erroSenha");
    // CORREÇÃO AQUI: Usamos o ID 'loginErrorMessage' que existe no HTML
    const loginErrorMessage = document.getElementById("loginErrorMessage");

    // --- 3. Limpa quaisquer mensagens de erro/sucesso anteriores ---
    erroEmail.textContent = ""; // Limpa a mensagem de erro do e-mail
    erroSenha.textContent = ""; // Limpa a mensagem de erro da senha
    loginErrorMessage.textContent = ""; // Limpa a mensagem geral (de sucesso ou erro do Firebase)
    loginErrorMessage.classList.add('hidden'); // Esconde a mensagem geral por padrão

    let formularioValido = true; // Flag para verificar se a validação passou

    // --- 4. Validação do E-mail ---
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        erroEmail.textContent = "O e-mail é obrigatório.";
        formularioValido = false;
    } else if (!emailRegex.test(email)) {
        erroEmail.textContent = "Digite um e-mail válido.";
        formularioValido = false;
    }

    // --- 5. Validação da Senha ---
    // A expressão regular agora é para letras E números, e no mínimo 6 caracteres
    const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (senha === "") {
        erroSenha.textContent = "A senha é obrigatória.";
        formularioValido = false;
    } else if (senha.length < 6) { // Apenas um check de tamanho mínimo aqui
         erroSenha.textContent = "A senha deve ter no mínimo 6 caracteres.";
         formularioValido = false;
    } else if (!senhaRegex.test(senha)) { // Validação de complexidade (letras e números)
        erroSenha.textContent = "A senha deve conter letras e números.";
        formularioValido = false;
    }


    // --- 6. Se o formulário passou na validação básica... ---
    if (formularioValido) {
        window.location.href = '../pages/homepage.html';
        // AQUI, NO PRÓXIMO PASSO, INTEGRAREMOS A LÓGICA DE LOGIN COM O FIREBASE
        // Por enquanto, apenas limpa os campos para que você possa testar a validação
        form.reset();
    } else {
        // Se a validação básica falhou, garante que a mensagem geral de erro esteja visível e vermelha
        loginErrorMessage.classList.remove('hidden'); // Mostra a mensagem
        loginErrorMessage.style.color = '#dc3545'; // Garante a cor vermelha para erros

        // Você pode adicionar uma mensagem geral de "Por favor, corrija os erros" aqui se quiser
        // loginErrorMessage.textContent = "Por favor, corrija os erros acima.";
    }
});
