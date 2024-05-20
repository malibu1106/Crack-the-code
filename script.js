let codeToCrack = getRandomNumber();
let formattedCode = codeToCrack.toString().padStart(3, '0');
document.getElementById('debug').innerHTML = "Code to Crack : " + formattedCode + "<br>";

function getRandomNumber() {
    let isValid;
    let code;
    do {
        code = Math.floor(Math.random() * 999);
        let codeStr = code.toString().padStart(3, '0');
        if (codeStr[0] !== codeStr[1] && codeStr[0] !== codeStr[2] && codeStr[1] !== codeStr[2]) {
            isValid = true;
        } else {
            isValid = false;
        }
    } while (!isValid);
    return code;
}

function generateHintOne() {
    let hintOne;
    let matchCount;
    let isValid;
    do {
        hintOne = getRandomNumber().toString().padStart(3, '0');
        matchCount = 0;
        isValid = true;
        for (let i = 0; i < 3; i++) {
            if (hintOne[i] === formattedCode[i]) {
                matchCount++;
            } else if (formattedCode.includes(hintOne[i])) {
                isValid = false;
                break;
            }
        }
    } while (matchCount !== 1 || !isValid);
    document.getElementById('debug').innerHTML += "Un chiffre est correct et bien placé : " + hintOne + "<br>";
    return hintOne;
}
generateHintOne();

function generateHintTwo() {
    let hintTwo;
    let matchCount;
    do {
        hintTwo = getRandomNumber().toString().padStart(3, '0');
        matchCount = 0;
        for (let i = 0; i < 3; i++) {
            if (formattedCode.includes(hintTwo[i])) {
                matchCount++;
            }
        }
    } while (matchCount > 0);
    document.getElementById('debug').innerHTML += "Rien n'est correct: " + hintTwo;
    return hintTwo;
}
generateHintTwo();
