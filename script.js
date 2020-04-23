let generatedNumber = document.querySelectorAll('.generated-number');
let inputField = document.querySelector('.form-control');
let userNumber = document.querySelector('.lucky-number');
let userChoice = [];
let globalNumberArray = [];
let holder;



function addDataToArray() {
    userChoice.shift();
    userChoice.push(Number(inputField.value));
    userNumber.innerHTML = userChoice[0];
}
function getRandomNumber(number) {
   return Math.floor(Math.random() * number) + 1;
}
function generateAnArrayOf5UniqueDigits() {
    const numbersArray = [],
        seen = new Set;

    while (numbersArray.length < 5) {
        const rand = getRandomNumber(10);
        if (!seen.has(rand)) {
            seen.add(rand);
            numbersArray.push(rand);

        }
        for(let i = 0; i < generatedNumber.length; i++){
            generatedNumber[i].innerHTML = numbersArray[i];



        }
    }
    globalNumberArray = [];
    globalNumberArray.push(numbersArray);
    holder = globalNumberArray;
    return numbersArray;
}
function markEqualNumber() {


        for (let i = 0; i < globalNumberArray.length; i++){
            if (globalNumberArray[i].includes(userChoice[0])){
                generatedNumber[0].classList.remove('bg-info');
                generatedNumber[0].classList.add('bg-danger');
            }else {
                generatedNumber[0].classList.remove('bg-danger');
                generatedNumber[0].classList.add('bg-info');
            }
        }


}
markEqualNumber();

function positionLog(){
   let  testArray = [3];
   let secondArray = [3,5,6,2,1];
   console.log(globalNumberArray + 'global');
 let variable  = globalNumberArray.indexOf(3);
    return console.log(variable);
}



function logData() {

    console.log(globalNumberArray[0].includes(userChoice[0]));
    console.log(globalNumberArray + ' globalNumberArray');
    console.log(userChoice + ' userChoice');
    console.log(holder.indexOf(1) + ' index');
    positionLog()
}

