

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



// tabs 
const tabs = document.querySelectorAll('.tab1');
const contents = document.querySelectorAll('.content');

contents[0].classList.add('active');
tabs[0].classList.add('active');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Hide all contents
        contents.forEach(content => content.classList.remove('active'));
        tabs.forEach(t=> t.classList.remove('active'));

        // Show the content that corresponds to the clicked tab
        tab.classList.add('active');
        contents[index].classList.add('active');
    });
});

