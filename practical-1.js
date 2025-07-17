// store value from inputbox in array
const datainput = document.getElementById("datainput");  //take value form user in input field
const show = document.getElementById("show");  // display input
const addbutton = document.getElementById("addbutton");  //when user click the button it will add value in array

let myarray = []; // created array for storing input

addbutton.addEventListener('click', function () {
    const valuetoadd = datainput.value; //created variable to store input 
    if (valuetoadd) {
        myarray.push(valuetoadd); //it will add array to valuetoadd var
        datainput.value = "";  //it will clear the input field after addiing value
        let listHtml = ` <div class="form">
                        <label class="radio">${valuetoadd}
                            <input class="input" type="checkbox" name="radio">
                            <span class="checkmark"></span>
                        </label>
                        <button class="button">
                            <img src="./images/delete.svg" alt="delete">
                        </button>
                    </div> `
        document.getElementById("todolist").innerHTML += listHtml; //it will print the value which is stored in myarray var
    }
    // storing the array in local storage

    let string = JSON.stringify(myarray);  // convert array in string

    localStorage.setItem("myarray", string);   // storing the array/value in local storage

    let valueBack = localStorage.getItem("myarray");  //taking values from local storage 

    let valueGet = JSON.parse(valueBack); // converting the string into array

    console.log(valueGet)


}); 

