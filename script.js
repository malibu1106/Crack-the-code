let codeToCrack = getRandomNumber();
let formattedCode = codeToCrack.toString().padStart(3, '0');
let codeToCrackBoxes = document.getElementsByClassName('box');

function displayCodeToCrack() {
    for (let i = 0; i < 3; i++) {
        codeToCrackBoxes[i].innerHTML = formattedCode.charAt(i);
    }
}
displayCodeToCrack();

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

function generateHintOne() { // Un correct et bien placé, mais autres !=
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

function generateHintTwo() { // Rien est correct
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
    document.getElementById('debug').innerHTML += "Rien n'est correct: " + hintTwo + "<br>";
    return hintTwo;
}
generateHintTwo();


function generateHintThree() {
    let hintThree;
    let matchCount;
    let isValid = false;

    do {
        hintThree = getRandomNumber().toString().padStart(3, '0');
        matchCount = 0;

        for (let i = 0; i < 3; i++) {
            if (formattedCode.includes(hintThree[i]) && formattedCode[i] !== hintThree[i]) {
                matchCount++;
            }
        }


        if (matchCount === 1) {

            isValid = true;
            for (let i = 0; i < 3; i++) {
                if (formattedCode.includes(hintThree[i]) && (formattedCode[i] !== hintThree[i])) {

                    continue;
                }
                if (formattedCode.includes(hintThree[i]) && (formattedCode[i] === hintThree[i])) {

                    isValid = false;
                    break;
                }
                if (!formattedCode.includes(hintThree[i])) {

                    continue;
                }
            }
        }
    } while (!isValid);

    document.getElementById('debug').innerHTML += "Un chiffre est correct mais mal placé : <span id='ht'>" + hintThree + "</span><br>";
    return hintThree;
}
generateHintThree();


function generateHintFour() {
    let hintFour;
    let matchCount;
    let isValid = false;

    do {
        hintFour = getRandomNumber().toString().padStart(3, '0');
        matchCount = 0;

        // Pour chaque chiffre dans hintTwo
        for (let i = 0; i < 3; i++) {
            if (formattedCode.includes(hintFour[i]) && formattedCode[i] !== hintFour[i]) {
                matchCount++;
            }
        }

        // Vérifiez que deux chiffres sont corrects mais mal placés
        if (matchCount === 2) {
            // Vérifiez que le troisième chiffre n'est pas présent dans formattedCode
            isValid = true;
            for (let i = 0; i < 3; i++) {
                if (formattedCode.includes(hintFour[i]) && (formattedCode[i] !== hintFour[i])) {
                    // Si le chiffre est trouvé mais mal placé, passez
                    continue;
                }
                if (formattedCode.includes(hintFour[i]) && (formattedCode[i] === hintFour[i])) {
                    // Si un chiffre est à la même position, c'est invalide
                    isValid = false;
                    break;
                }
                if (!formattedCode.includes(hintFour[i])) {
                    // Si un chiffre n'est pas trouvé du tout, c'est valide
                    continue;
                }
            }
        }
    } while (!isValid);

    document.getElementById('debug').innerHTML += "Deux chiffres sont corrects mais mal placés : " + hintFour + "<br>";
    return hintFour;
}
generateHintFour();


function generateHintFive() {
    let hintFive;
    let matchCount;
    let isValid = false;

    do {
        hintFive = getRandomNumber().toString().padStart(3, '0');
        matchCount = 0;

        for (let i = 0; i < 3; i++) {
            if (formattedCode.includes(hintFive[i]) && formattedCode[i] !== hintFive[i]) {
                matchCount++;
            }
        }


        if (matchCount === 1 && hintFive !== document.getElementById('ht').innerHTML) {

            isValid = true;
            for (let i = 0; i < 3; i++) {
                if (formattedCode.includes(hintFive[i]) && (formattedCode[i] !== hintFive[i])) {

                    continue;
                }
                if (formattedCode.includes(hintFive[i]) && (formattedCode[i] === hintFive[i])) {

                    isValid = false;
                    break;
                }
                if (!formattedCode.includes(hintFive[i])) {

                    continue;
                }
            }
        }
    } while (!isValid);

    document.getElementById('debug').innerHTML += "Un chiffre est correct mais mal placé : " + hintFive + "<br>";
    return hintFive;
}
generateHintFive();