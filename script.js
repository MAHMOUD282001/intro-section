
let dropdownList = document.querySelectorAll(".content .list .dropdown ul");

let dropdownLi = document.querySelectorAll(".content .list .dropdown");

let menu = document.querySelector(".menu");

let menuBtn = document.querySelector(".menu-btn");

let menuBtnImg = document.querySelector(".menu-btn img");

let dropdownDiv = document.querySelector(".content .list .dropdown div:nth-of-type(1)");

let dropdownArrow = document.querySelectorAll(".content .list .dropdown div:nth-of-type(1) img");







for(let i=0; i<dropdownLi.length; i++){
    dropdownLi[i].addEventListener("click",()=>{
        dropdownList[i].classList.toggle("active")
        
        if(dropdownArrow[i].getAttribute("src") === "./images/icon-arrow-down.svg"){
            dropdownArrow[i].setAttribute("src", "./images/icon-arrow-up.svg")
        }
        
        else{
            dropdownArrow[i].setAttribute("src", "./images/icon-arrow-down.svg")
        }
    })
    
}

menuBtn.addEventListener("click", ()=>{
    console.log(menuBtnImg.getAttribute("src"));
    
    if(menuBtnImg.getAttribute("src") === "./images/icon-menu.svg"){
        menuBtnImg.setAttribute("src", "./images/icon-close-menu.svg")
    }
    
    else{
        menuBtnImg.setAttribute("src", "./images/icon-menu.svg")
    }
    
    
    menu.classList.toggle("active")
})