const menuButton = document.querySelector('.humburger');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const navList = document.querySelector('.nav-list');
const element = document.querySelectorAll('.links');

menuButton.addEventListener('click', function () {
    navList.classList.toggle('active');
    open.classList.toggle('active');
    close.classList.toggle('active');
});
element.forEach((elem) =>{
    elem.addEventListener('click', function () {
        navList.classList.remove('active');
        open.classList.toggle('active');
        close.classList.toggle('active');
})
}) 

const question = document.querySelectorAll(".Q-2");
question.forEach((quest) => {
    
    quest.addEventListener("click", () =>{
quest.classList.toggle("active");
 quest.classList.toString("active")
    })
})