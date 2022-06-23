const form = document.querySelector('form');
const nameInput = document.getElementById("fname");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pwd");
const pass2Input = document.getElementById("cpwd");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

});

function checkInputs() {
    const nameInputValue = nameInput.value.trim();
    const emailInputValue = emailInput.value.trim();
    const passInputValue = passInput.value.trim();
    const pass2InputValue = pass2Input.value.trim();

    validator = new Validator();

    if (validator.isName(nameInputValue) &&
        validator.isEmail(emailInputValue) &&
        validator.isPass(passInputValue) &&
        validator.isPass2(passInputValue, pass2InputValue)) {
        form.submit();
    }
}
