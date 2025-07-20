// store value from inputbox in array
const datainput = document.getElementById("datainput");  //take value form user in input field
const show = document.getElementById("show");  // display input
const addbutton = document.getElementById("addbutton");  //when user click the button it will add value in array
// let checks = document.querySelectorAll('.delete-button');

let myarray = []; // created array for storing input
const valueBack = localStorage.getItem("myarray");  //taking values from local storage 

window.onload = function () {
    const valueBack = localStorage.getItem("myarray");  //taking values from local storage 
    if (valueBack) {
        myarray = JSON.parse(valueBack); // converting the string into array
        document.getElementById("todolist").innerHTML = "";
        for (let x = 0; x < myarray.length; x++) {
            let listHtml = ` <div class="form">
                        <label class="radio">${myarray[x]}
                            <input class="input" type="checkbox" name="radio">
                            <span class="checkmark"></span>
                        </label>
                        <button class="button delete-button">
                            <img src="./images/delete.svg" alt="delete" id="${x}">
                        </button>
                    </div> `
            document.getElementById("todolist").innerHTML += listHtml; //it will print the value which is stored in myarray var
        }
    }

    checks = document.querySelectorAll('.delete-button');
    checks.forEach(function (check) {
        check.addEventListener('click', checkIndex);
    })
}

addbutton.addEventListener('click', function () {
    const valuetoadd = datainput.value; //created variable to store input 
    if (valuetoadd) {
        myarray.push(valuetoadd); //it will add array to valuetoadd var
        datainput.value = "";  //it will clear the input field after addiing value
        localStorage.setItem("myarray", JSON.stringify(myarray));
        document.getElementById("todolist").innerHTML = "";
        for (let x = 0; x < myarray.length; x++) {
            let listHtml = `<div class="form">
                <label class="radio">${myarray[x]}
                    <input class="input" type="checkbox" name="radio">
                    <span class="checkmark"></span>
                </label>
                <button class="button delete-button">
                    <img src="./images/delete.svg" alt="delete" id="${x}">
                </button>
            </div>`;
            document.getElementById("todolist").innerHTML += listHtml;
        }

        let checks = document.querySelectorAll('.delete-button');
        checks.forEach(function (check) {
            check.addEventListener('click', checkIndex);
        })
    }
    // storing the array in local storage
    const string = JSON.stringify(myarray);  // convert array in string
    localStorage.setItem("myarray", string);   // storing the array/value in local storage
});

function checkIndex(event) {
    //console.log(event.target.id);
    const index = event.target.id;  // get index from button id
    myarray.splice(index, 1)
    localStorage.setItem("myarray", JSON.stringify(myarray));  // update storage
    document.getElementById("todolist").innerHTML = "";
    for (let x = 0; x < myarray.length; x++) {
        let listHtml = ` <div class="form">
                        <label class="radio">${myarray[x]}
                            <input class="input" type="checkbox" name="radio">
                            <span class="checkmark"></span>
                        </label>
                        <button class="button delete-button">
                            <img src="./images/delete.svg" alt="delete" id="${x}">
                        </button>
                    </div> `
        document.getElementById("todolist").innerHTML += listHtml; //it will print the value which is stored in myarray var
    }

    let checks = document.querySelectorAll(".delete-button");
    checks.forEach(function (check) {
        check.addEventListener("click", checkIndex);
    });
}


