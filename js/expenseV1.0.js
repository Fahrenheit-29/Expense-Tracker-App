// create an array of expenses

let expenseList = [];


// get all the input expense


let inputExpense = document.querySelectorAll(".expense");


// Select the element button and table body

let tableBody = document.querySelector(".tableBody");
let addExpenseBtn = document.getElementById("addBtn");


// initialized row and td
let row;
let td;


// create a localStorage function to store clients data

const saveData = () => {


    localStorage.setItem("expenseData", tableBody.innerHTML);
};

const getData = () => {

    tableBody.innerHTML = localStorage.getItem("expenseData");

}



// use addEventlistner to Add expense


addExpenseBtn.addEventListener('click', () => {



    if (checkInputField(inputExpense)) {

        alert('Field is empty');
    } else {


        row = document.createElement("tr");

        for (let listOfExpense of inputExpense) {

            let value = listOfExpense.value;
            expenseList.push(value);


            for (let getExpense of expenseList) {

                cell = document.createElement("td");

                let cellText = document.createTextNode(getExpense);

                cell.appendChild(cellText);

            }
            row.appendChild(cell);
            tableBody.appendChild(row);

        }

        const del = document.createElement("td");
        del.innerHTML = "<i class='fa-solid fa-trash'></i>";
        row.appendChild(del);



        clearInputField(inputExpense); // Clear Input Field
        saveData();
    }


});


tableBody.addEventListener('click', (e) => {


    if (e.target.tagName === "I") {


        let trElement = e.target.parentElement.parentElement;
        trElement.remove();
        console.log('Elements tr are remove');
        saveData();
    }

});

getData();













// Clear Input Field  function
const clearInputField = (inputField) => {

    for (let input of inputField) {


        input.value = '';
    }

}

// check Input Field using boolean
const checkInputField = (inputField) => {
    let boolean = false;
    for (let data of inputField) {

        if (data.value === "" || data.value == 0) {
            return boolean = true;

        }


    }

}