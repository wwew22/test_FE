const btnForm = document.querySelector('.hero-button');
const btnForm2 = document.querySelector('.btn2');
const formWindow = document.querySelector('.formContainer');
const closeForm = document.querySelector('.closeForm');


btnForm.addEventListener("click", function contactForm() {
    formWindow.classList.toggle('hide');
});

btnForm2.addEventListener("click", function contactForm() {
    formWindow.classList.toggle('hide');
});

closeForm.addEventListener("click", function closeContact(){
    formWindow.classList.add('hide');
})


