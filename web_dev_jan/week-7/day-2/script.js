
const para = document.querySelector("#text")
para.innerHTML = "Hello World"




function handleClick(){
    console.log("You click the button");
    // innerHTML, innerTEXT, textCon
    const inputValue = document.querySelector("#input").value
    //const age = new Date().getFullYear() - parseInt(inputValue)
    //para.innerHTML = `<h1>your age is: ${age}</h1>`
    
    const ageInput = parseInt(inputValue)

    if(inputValue.trim() === ""){
        alert("Please enter a valur")
    }else if (inputValue.length < 4){
        alert("Date can not be more than 4 character")
    }else if (ageInput > new Date().getFullYear()){
        alert("You can't be born in the future")
    }else{
        const age = new Date().getFullYear() - parseInt(inputValue)
        para.innerHTML = `<h1>your age is: ${age}</h1>`
    }
}

            //CLASS WORK

function nameleClick(){

    const nameValue = document.querySelector("#name").value

    if(nameValue.trim() === ""){
        //alert("please enter a value Name")
        para.innerHTML = "please enter a value Name"
    }else if (nameValue.length < 2){
        alert("The character much less then two character enter a Value character")
    }else{
        para.innerHTML = `<h1>You are welcome To the new Pages: ${nameValue}</h1>`
    }
}

