/*variable*/
const clickMe = document.getElementById("clickMe");
const intro = document.getElementById("intro");
const login = document.getElementById("login");

/*Hide Show toggle for form register*/

clickMe.addEventListener("click",e=>{
    e.preventDefault()
    intro.classList.toggle("d-none");
    login.classList.toggle("d-none")
});
