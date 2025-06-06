function addSpaces(input) {
    input = input.replace(/\s/g, '');
    input = input.replace(/(.{4})/g, '$1 ');
    input = input.trim();
    document.getElementById('cardNumber').value = input;
}