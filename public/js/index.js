import { subscribeToAuthChanges, logoutUser } from './authentication'; // Imports your authentication functions
// --- UI Element References (Example) ---
const appContainer = document.getElementById('app-container');
const loginSection = document.getElementById('login-section');
const dashboardSection = document.getElementById('dashboard-section');
const welcomeMessage = document.getElementById('welcome-message');
const logoutButton = document.getElementById('logout-button');
// --- Authentication State Listener ---
subscribeToAuthChanges(user => {
    if (user) {
        // User is logged in
        console.log("User logged in:", user.email);
        if (welcomeMessage)
            welcomeMessage.textContent = `Welcome, ${user.email}!`;
        if (loginSection)
            loginSection.style.display = 'none';
        if (dashboardSection)
            dashboardSection.style.display = 'block';
        // You might also fetch user-specific data here using 'db'
    }
    else {
        // User is logged out
        console.log("User logged out.");
        if (welcomeMessage)
            welcomeMessage.textContent = 'Please log in.';
        if (loginSection)
            loginSection.style.display = 'block';
        if (dashboardSection)
            dashboardSection.style.display = 'none';
    }
});
// --- Event Listeners (Example) ---
logoutButton?.addEventListener('click', async () => {
    try {
        await logoutUser();
    }
    catch (error) {
        console.error("Error logging out from main app:", error);
    }
});
// ... other application-wide logic, routing, etc. ...
console.log("TechHope3 Web App Started!");
//# sourceMappingURL=index.js.map