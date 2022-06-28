// cached elements
const sendBtn = document.querySelector(".btn")
//functions
function hideBtn() {
    sendBtn.style.display = "none"
}


 //attched event listeners
 sendBtn.addEventListener('mouseover',hideBtn)
 