const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;

const numberButton = document.querySelectorAll<HTMLButtonElement>("[data-number]");
const operationButton = document.querySelectorAll<HTMLButtonElement>("[data-operation]");
const equalsButton = document.querySelector<HTMLButtonElement>("[data-equals]");
const deleteButton = document.querySelector<HTMLButtonElement>("[data-delete]");
const clearButton = document.querySelector<HTMLButtonElement>("[data-clear]");
const currentOutput = document.querySelector<HTMLDivElement>("#current-output");
const previousOutput = document.querySelector<HTMLDivElement>("#previous-output");

numberButton.forEach((num: HTMLButtonElement) => {
    num.addEventListener('click', event => {
        const clickedNum = (event.target as HTMLButtonElement).innerHTML.trim();
        if (currentOutput) {
            currentOutput.innerHTML += clickedNum;
        }
    });
});

operationButton.forEach((op: HTMLButtonElement) => {
    op.addEventListener('click', event => {
        const clickedOp = (event.target as HTMLButtonElement).innerHTML.trim();

        if (currentOutput && /[+*/-]$/gim.test(currentOutput.innerHTML)) {
            currentOutput.innerHTML = currentOutput.innerHTML.replace(/[+*/-]$/gim, clickedOp);
        } else {
            console.log('middle');
            if (currentOutput) {
                currentOutput.innerHTML += clickedOp;
            }
        }
    });
});

function calculate() {
    if (equalsButton && currentOutput && previousOutput) {
        equalsButton.addEventListener('click', event => {
            console.log(eval(currentOutput.innerHTML));
            previousOutput.innerHTML = eval(currentOutput.innerHTML).toString();
        });
    }
}

calculate();

function clear() {
    if (clearButton && currentOutput && previousOutput) {
        clearButton.addEventListener('click', event => {
            const original = "0"; // Make sure original is a string
            const org = " ";
            if (currentOutput) {
                currentOutput.innerHTML = original;
                previousOutput.innerHTML = org;
            }
        });
    }
}

clear();

function deleteCharacter() {
    if (currentOutput) {
        currentOutput.addEventListener('click', event => {
            const input = currentOutput.innerHTML;
            currentOutput.innerHTML = input.slice(0, input.length - 1);
        });
    }
}

deleteCharacter();
