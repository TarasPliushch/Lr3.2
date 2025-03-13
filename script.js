document.getElementById('generate').addEventListener('click', function() {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '@$#%^';

    let characters = '';
    if (document.getElementById('lowercase').checked) {
        characters += lowercase;
    }
    if (document.getElementById('uppercase').checked) {
        characters += uppercase;
    }
    if (document.getElementById('numbers').checked) {
        characters += numbers;
    }
    if (document.getElementById('symbols').checked) {
        characters += symbols;
    }

    const length = document.getElementById('length').value;
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('password').value = password;
});

document.getElementById('copy').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Пароль скопійовано!');
});
