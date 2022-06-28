let modal = document.getElementById('resume-modal')
let resumebtn = document.getElementById('Resumebtn')
let span = document.querySelector(".close")

function modalOpen (){
   modal.style.display = "block"
}

function spanClick (){
   modal.style.display = "none"
}


resumebtn.addEventListener('click',modalOpen)
span.addEventListener('click', spanClick)
