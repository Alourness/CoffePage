const dialog = document.querySelector(".signup-dialog");
const form = document.querySelector(".signup-form");
const accountButton = document.querySelector(".account-button");

accountButton.addEventListener("click", () => dialog.showModal());
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nickname = form.elements.nickname.value.trim();
    if (!nickname) return;
    accountButton.textContent = nickname;
    dialog.close();
    alert(`Welcome ${nickname}!`);
});
dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
