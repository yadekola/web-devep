let currentCount = 0

const counter = document.getElementById('counter')

counter.innerHTML = currentCount

function increase(){
    if (currentCount>=10) {
        return currentCount
    }

    currentCount++
    counter.innerHTML = currentCount
}

function decrease(){
    if (currentCount<=-10) {
        return currentCount
    }

    currentCount--
    counter.innerHTML = currentCount
}

function  increase(){
     
   // LOCAL VARIABLE

    let functionScope = 3

    currentCount ++
    counter.innerHTML = currentCount
    console.log(functionScope)
}

//NAMING Function
function ADDtWOnUM(){}
//ARROW Function
const subTwoNum = ()=>{}