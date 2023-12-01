const numberButton = document.querySelectorAll("[data-number]")
const operationButton =document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const clearButton = document.querySelector("[data-clear]")
const currentOutput = document.querySelector("#current-output")
const previousOutput= document.querySelector("#previous-output")


numberButton.forEach(num=> {
    num.addEventListener('click', event => {
        const clickedNum = event.target.innerHTML.trim();
        currentOutput.innerHTML += clickedNum;
   })
})

operationButton.forEach(num=> {
    num.addEventListener('click', event => {
        const clickedOp = event.target.innerHTML.trim();

    if(/[+*/-]$/gim.test(currentOutput.innerHTML)){
        currentOutput.innerHTML = currentOutput.innerHTML.replace(/[+*/-]$/gim, clickedOp);
    } else {
        console.log('middle');
        currentOutput.innerHTML += clickedOp;
    } 
   })
})
function caclulate(){
equalsButton.addEventListener('click', event =>{
   console.log(eval(currentOutput.innerHTML));
   previousOutput.innerHTML = eval(currentOutput.innerHTML)
})
}
caclulate()

function clear() {
    clearButton.addEventListener('click', event=>{
        const original = 0;
        const org =" "
       // currentOutput.innerHTML= original.replace
        currentOutput.innerHTML = original
        previousOutput.innerHTML = org
    })
    
}
clear();

function delete1() {
    currentOutput.addEventListener('click' ,event=>{
        var input = document.getElementById("currentOutput").value;
       //document.getElementById("currentOutput").value = value.slice(0, value.length - 1);
        input.value = input.value.slice(0, input.value.length - 1);
    })
}

delete1();