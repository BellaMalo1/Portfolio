
//cached elements
let modal = document.getElementById('resume-modal')
let resumebtn = document.getElementById('Resumebtn')
let span = document.querySelector(".close")

//functions for event listeners
function modalOpen (){
   modal.style.display = "block"
}

function spanClick (){
   modal.style.display = "none"
}

//event listeners
resumebtn.addEventListener('click',modalOpen)
span.addEventListener('click', spanClick)
