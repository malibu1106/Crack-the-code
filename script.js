let codeToCrack = getRandomNumber();
let formattedCode = codeToCrack.toString().padStart(3, '0');
let codeToCrackBoxes = document.getElementsByClassName('box');
let indexIndice = 0;


let number1 = document.getElementById('number1');
number1.focus();
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
number1.addEventListener("keyup", autoSelectNextInput);
number1.addEventListener("click", function () { index = 0 });
number2.addEventListener("keyup", autoSelectNextInput);
let index = 0;
function autoSelectNextInput() {


    if (index == 0) {
        number2.focus();
        index++;
    }
    else {
        number3.focus();

    }

}



function refresh() {
    window.location = "index.html";
}

function checkCode() {
    console.log("checkcode")
    index = 0;
    if (document.getElementById('number1').value == formattedCode.charAt(0) &&
        document.getElementById('number2').value == formattedCode.charAt(1) &&
        document.getElementById('number3').value == formattedCode.charAt(2)) {
        displayCodeToCrack();
        document.getElementById('zoneIndice').innerHTML = "<div id='success'>Bravo !</div>"
        console.log("gagné");
        document.getElementById('refreshbtn').style.display = "block";
        document.getElementById('checkcodebtn').style.display = "none";

    }
    else {
        number1.value = "";
        number2.value = "";
        number3.value = "";
        number1.focus();
    }


}


document.getElementById('number1').addEventListener('input', function () {
    if (this.value.length > 1) {
        this.value = this.value.slice(-1);
    }
});
document.getElementById('number2').addEventListener('input', function () {
    if (this.value.length > 1) {
        this.value = this.value.slice(-1);
    }
});
document.getElementById('number3').addEventListener('input', function () {
    if (this.value.length > 1) {
        this.value = this.value.slice(-1);
    }
});

function createIndice(indiceText, indiceCode) {
    let indiceContainer = document.createElement("div");
    let indiceTextDiv = document.createElement("div");
    let indiceCodeDiv = document.createElement("div");
    indiceContainer.className = "indiceContainer";
    indiceTextDiv.className = "indiceText";
    indiceCodeDiv.className = "indiceCode";
    indiceTextDiv.textContent = indiceText;
    indiceCodeDiv.textContent = indiceCode;
    document.getElementById('zoneIndice').appendChild(indiceContainer);
    document.getElementsByClassName('indiceContainer')[indexIndice].appendChild(indiceTextDiv);
    document.getElementsByClassName('indiceContainer')[indexIndice].appendChild(indiceCodeDiv);
    indexIndice++;
}



function displayCodeToCrack() {
    for (let i = 0; i < 3; i++) {
        codeToCrackBoxes[i].innerHTML = formattedCode.charAt(i);
    }
}


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
    // document.getElementById('debug').innerHTML += "Rien n'est correct: " + hintTwo + "<br>";
    let indiceText = "Rien n'est correct : ";
    createIndice(indiceText, hintTwo);
    return hintTwo;
}
generateHintTwo();

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
    // document.getElementById('debug').innerHTML += "Un chiffre est correct et bien placé : " + hintOne + "<br>";
    let indiceText = "Un chiffre est correct et bien placé : ";
    createIndice(indiceText, hintOne);
    return hintOne;
}
generateHintOne();




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

    let indiceText = "Un chiffre est correct mais mal placé : ";
    createIndice(indiceText, hintThree);
    return hintThree;
}
generateHintThree();


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


        if (matchCount === 1 /*&& hintFive !== document.getElementById('ht').innerHTML*/) {

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

    // document.getElementById('debug').innerHTML += "Un chiffre est correct mais mal placé : " + hintFive + "<br>";
    let indiceText = "Un chiffre est correct mais mal placé : ";
    createIndice(indiceText, hintFive);
    return hintFive;
}
generateHintFive();


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

    // document.getElementById('debug').innerHTML += "Deux chiffres sont corrects mais mal placés : " + hintFour + "<br>";
    let indiceText = "Deux chiffres sont corrects mais mal placés : ";
    createIndice(indiceText, hintFour);
    return hintFour;
}
generateHintFour();


