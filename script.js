const dialog = document.querySelector(".signup-dialog");
const form = document.querySelector(".signup-form");
const accountButton = document.querySelector(".account-button");
const welcome = document.querySelector(".welcome");
const logoutButton = document.querySelector(".logout-button");

accountButton.addEventListener("click", () => dialog.showModal());
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nickname = form.elements.nickname.value.trim();
    if (!nickname) return;
    welcome.textContent = `Welcome, ${nickname}`;
    accountButton.hidden = true;
    welcome.hidden = false;
    logoutButton.hidden = false;
    dialog.close();
});
logoutButton.addEventListener("click", () => {
    accountButton.hidden = false;
    welcome.hidden = true;
    logoutButton.hidden = true;
});
dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
