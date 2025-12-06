// src/cadastro.ts
import { registerUser } from './authentication.js'; // <-- ADICIONADO .js
// ... resto do código

// Get references to the HTML elements
const registrationForm = document.getElementById('form') as HTMLFormElement;
const nomeInput = document.getElementById('nome') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const senhaInput = document.getElementById('senha') as HTMLInputElement;
const errorMessageDisplay = document.getElementById('cadastroErrorMessage') as HTMLParagraphElement;

// Add an event listener for the form submission
registrationForm.addEventListener('submit', async (event: Event) => {
    event.preventDefault(); // Prevent the default form submission behavior (page reload)

    // Clear any previous error messages
    errorMessageDisplay.textContent = '';
    errorMessageDisplay.classList.add('hidden'); // Hide it

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    // Basic client-side validation (Firebase Auth has its own validation too)
    if (!nome || !email || !senha) {
        errorMessageDisplay.textContent = 'Por favor, preencha todos os campos.';
        errorMessageDisplay.classList.remove('hidden');
        return;
    }

    // You might want to add more robust password validation here (e.g., minimum length, complexity)
    if (senha.length < 6) { // Firebase Auth requires at least 6 characters for passwords
        errorMessageDisplay.textContent = 'A senha deve ter no mínimo 6 caracteres.';
        errorMessageDisplay.classList.remove('hidden');
        return;
    }

    try {
        // Call the registerUser function from your authentication module
        const user = await registerUser(email, senha, nome); // Pass name to be saved to Firestore

        if (user) {
            console.log('Usuário cadastrado com sucesso!', user.email);
            // Optionally, redirect the user to a dashboard or success page
            window.location.href = '../pages/Apresentacao.html'; // Example redirect
        }
    } catch (error: any) {
        console.error('Erro no cadastro:', error);
        // Display user-friendly error messages based on Firebase error codes
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
