const Open = document.getElementById("open");
const menu = document.querySelector("#menu");
const Close = document.querySelector("#close");
const blur = document.querySelector("#blur");
const mainMenu = document.querySelector("#mainMenu");


/* for menu */

click(Open);
click(Close);
click(blur);

// for eventHandle
function click(c) {
    c.addEventListener("click",e=>{
        e.preventDefault();
        offcanvas(c);
    });
}


// for hideShow
function offcanvas(x) {
    menu.classList.toggle("translate-x-[600px]");
    menu.classList.toggle("translate-x-0");

    Open.classList.toggle("block");
    Open.classList.toggle("hidden");

    Close.classList.toggle("block");
    Close.classList.toggle("hidden");

    blur.classList.toggle("hidden");
}

/* for waypoint */