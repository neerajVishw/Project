function caesarEncrypt() {
    const key = parseInt(document.getElementById('caesar-key').value);
    const message = document.getElementById('caesar-message').value.toUpperCase();
    const encryptedMessage = encryptCaesar(message, key);
    document.getElementById('caesar-result').value = encryptedMessage;
   }
   function caesarDecrypt() {
    const key = parseInt(document.getElementById('caesar-key').value);
    const encryptedMessage = document.getElementById('caesar-message').value.toUpperCase();
    const decryptedMessage = decryptCaesar(encryptedMessage, key);
    document.getElementById('caesar-result').value = decryptedMessage;
   }
   function encryptCaesar(message, key) {
    let encryptedMessage = '';
    for (let i = 0; i <message.length; i++) {
    const char = message[i];
    if (char.match(/[A-Z]/)) {
    const code = char.charCodeAt(0);
    const encryptedCode = ((code - 65 + key) % 26) + 65;
    const encryptedChar = String.fromCharCode(encryptedCode);
    encryptedMessage += encryptedChar;
    } else {
    encryptedMessage += char;
    }
    }
    return encryptedMessage;
   }
   function decryptCaesar(encryptedMessage, key) {
    let decryptedMessage = '';
    for (let i = 0; i <encryptedMessage.length; i++) {
    const char = encryptedMessage[i];
    if (char.match(/[A-Z]/)) {
    const code = char.charCodeAt(0);
    const decryptedCode = ((code - 65 - key + 26) % 26) + 65;
    const decryptedChar = String.fromCharCode(decryptedCode);
    decryptedMessage += decryptedChar;
    } else {
    decryptedMessage += char;
    }
    }
    return decryptedMessage;
   }
   