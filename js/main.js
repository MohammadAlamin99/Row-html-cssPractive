

// navigation toogle button add and remove

const navBtn = document.querySelector('.leftSide i');
const toggle = document.querySelector('.rightSide');
navBtn.addEventListener('click', navToggle);

function navToggle(){
    if(toggle.classList.contains("active")){
        toggle.classList.remove("active");
    }
    else{
        toggle.classList.add("active");
    }
}

