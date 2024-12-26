const userInput = document.getElementById("userInput");
const requestBtn = document.getElementById("request");
const resetBtn = document.getElementById('reset');
const text = document.getElementById('demo');
const test = document.getElementById('test');


function displayActivity(){
    let textValue = text.innerHTML;
    let userInputValue = userInput.value;
    const wordArray = new Array();

    const textArray = textValue.split(/[ ,.?!]/);

    textArray.forEach((word, index) => {
        if(word === userInputValue){
            wordArray.push(word);

            textArray[index] = `<mark style = "background-color: yellow">${word}</mark>`;
        }
    });

    test.innerHTML = "There are " + wordArray.length + " occurences of this word";

    text.innerHTML = textArray.join(' ');

   
}

requestBtn.onclick = displayActivity;



function returnDisplay(){
    let textValue = text.innerHTML;

    textValue = textValue.replace(/<mark style="background-color: yellow">(.*?)<\/mark>/g, '$1');

    text.innerHTML = textValue;
    test.innerHTML = ""
}


userInput.onclick = returnDisplay;


