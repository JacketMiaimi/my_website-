// Елементы формы "Войти" и "Зарегаться"
const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');

// Кнопки для переключение
const toLoginLink = document.getElementById('to-log')
const toRegisterLink = document.getElementById('to-reg')

// Функция для показа формы входа
function showRegisterForm(){
    loginForm.style.display = 'none'; // скрываем форму входа
    registerForm.style.display = 'block'; // показываем форму регистрации
}

// Функция для показа формы регистрации 
function showLoginForm(){
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
}


// Навешиваем обработчик событий на ссылки)
toRegisterLink.addEventListener('click', (event) =>{
    event.preventDefault();
    showRegisterForm();
});

toLoginLink.addEventListener('click', (event) =>{
    event.preventDefault();
    showLoginForm();
});

// При загрзки страницы мы скрываем форму
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('register').style.display = 'none';
});

// document.addEventListener - обработчик событий к объкту. Отслеживает определенное событие
// и запускает заданную функцию 
// DOMContentLoaded - это событие, которое срабатывает после html кода + ими можно манипулироывть

// () => {} - стрелочная функция (сокращенная запись)
// function(){} - 1
// () => {} - 2