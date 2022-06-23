class Validator {

    isName(nameValue) {
        if (nameValue === '') {
            this._setErrorFor(nameInput, 'First name cannot be blank');
            return false;
        }
        return true;
    }

    isEmail(emailValue) {
        let emailValid =
            /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,4}$/;

        if (emailValue.match(emailValid) === null) {
            this._setErrorFor(emailInput, 'Email not correct');
            return false;
        }
        return true;
    }

    isPass(passValue) {
        if (passValue.length < 8) {
            this._setErrorFor(passInput, 'Password less than 8 characters');
            return false;
        }
        return true;
    }

    isPass2(passValue, pass2Value) {
        if (passValue != pass2Value) {
            this._setErrorFor(pass2Input, 'Password does not match');
            return false;
        }
        return true;
    }

    _setErrorFor(input, massage) {
        const control = input.parentElement;
        const small = control.querySelector('small');
        input.classList.add('error');
        small.innerText = massage;
        small.classList.add('visible');
    }

}

