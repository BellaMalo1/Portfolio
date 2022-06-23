console.log("you got this!")
//cached elements 
const welcomeButtom = document.querySelector("#welcomebtn")
const welcomeMessageContainer = document.querySelector("#Welcome-page-container")
const homepageView = document.querySelector("#Home-page-view")
//functions 
function welcome (){
   console.log('hello')
   welcomeMessageContainer.classList.add('hide')
   homepageView.classList.remove('hide')
   
}

// attached event listeners
welcomeButtom.addEventListener('click',welcome)