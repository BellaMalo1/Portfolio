console.log("you got this!")
//cached elements 
const welcomeButtom = document.querySelector("#welcomebtn")
const welcomeMessageContainer = document.querySelector("#Welcome-page-container")
const homepageView = document.querySelector("#Home-page-view")
const aboutMe = document.querySelector("#about-me-container")
const bodyFooter = document.querySelector("#social-links")

//functions 
function welcome (){
   console.log('hello')
   welcomeMessageContainer.classList.add('hide')
   homepageView.classList.remove('hide')
   aboutMe.classList.remove('hide')
   bodyFooter.classList.remove('hide')

   
}



// attached event listeners
welcomeButtom.addEventListener('click',welcome);
