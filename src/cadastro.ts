import { registerUser } from './authentication.js';

const registrationForm = document.getElementById('form') as HTMLFormElement;
const nomeInput = document.getElementById('nome') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const senhaInput = document.getElementById('senha') as HTMLInputElement;
const errorMessageDisplay = document.getElementById('cadastroErrorMessage') as HTMLParagraphElement;

registrationForm.addEventListener('submit', async (event: Event) => {
    event.preventDefault();

    errorMessageDisplay.textContent = '';
    errorMessageDisplay.classList.add('hidden');

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (!nome || !email || !senha) {
        errorMessageDisplay.textContent = 'Por favor, preencha todos os campos.';
        errorMessageDisplay.classList.remove('hidden');
        return;
    }

    if (senha.length < 6) {
        errorMessageDisplay.textContent = 'A senha deve ter no mínimo 6 caracteres.';
        errorMessageDisplay.classList.remove('hidden');
        return;
    }

    try {
        const user = await registerUser(email, senha, nome);

        if (user) {
            console.log('Usuário cadastrado com sucesso!', user.email);
            window.location.href = '../pages/Apresentacao.html';
        }
    } catch (error: any) {
        console.error('Erro no cadastro:', error);
        let displayMessage = 'Ocorreu um erro ao tentar cadastrar.';
        switch (error.code) {
            case 'auth/email-already-in-use':
                displayMessage = 'Este e-mail já está em uso.';
                break;
            case 'auth/invalid-email':
                displayMessage = 'O formato do e-mail é inválido.';
                break;
            case 'auth/weak-password':
                displayMessage = 'A senha é muito fraca. Escolha uma senha mais forte.';
                break;
            default:
                displayMessage = error.message; // Fallback to Firebase's message
                break;
        }
        errorMessageDisplay.textContent = displayMessage;
        errorMessageDisplay.classList.remove('hidden'); // Show error message
    }
});
