

const modal = document.querySelector("#modalContainer")

function  deleteBtn(){
    modal.removeAttribute("class")
    modal.setAttribute("class", "showModal")
}



function cancelBtn(){
    modal.removeAttribute("class")
    modal.setAttribute("class", "modalContainer")
}


function yesBtn(){
    modal.removeAttribute("class")
    modal.setAttribute("class", "modalContainer")
}

const nav = document.querySelector("#navItems")


let isShow = false

function drawer(){
    isShow = !isShow

    //? means three===

    //isShow ? TRUE : FALSE

    isShow ? nav.setAttribute("class", "showNav") : nav.setAttribute("class", "navItems")

    //nav.removeAttribute("class")
   // nav.setAttribute("Class", "showNav")
}