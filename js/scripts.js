// Seleção dos Elementos

const multiplicationForm = document.querySelector("#multiplication-form");
const multiplicationInput = document.querySelector("#multiplication-number");
const multiplicatorInput = document.querySelector("#multiplicator-number");
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

//Funções

function createResult (multiplicationNumber, multiplicatorNumber) {
    
    multiplicationTable.innerHTML = "";
    
    for(i=1 ; i<=multiplicatorNumber ; i++){
        const result = multiplicationNumber * i;
        
        const template = 
        `<div class="row">
            <div class="operation">${multiplicationNumber} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = multiplicationNumber;
    
}

// Eventos

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const multiplicationNumber = +multiplicationInput.value;
    const multiplicatorNumber = +multiplicatorInput.value;
    
    if(!multiplicationNumber || !multiplicatorNumber) return;
    
    createResult(multiplicationNumber, multiplicatorNumber);
})