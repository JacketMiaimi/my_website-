document.getElementById("login").addEventListener("click", function (event) {
    event.preventDefault(); // Не дает перезагрузить страницу

    console.log("Форма отправлена !");

    // Собираем данные из полей формы
    const userNameValue = document.getElementById("userLog").value;
    const userPasswordValue = document.getElementById("userPass").value;

    // Создаем объект данных
    const formData = {
        userName: userNameValue,
        userPassword: userPasswordValue,
    };

    // Преобразуем объект в Json-строку
    const jsonData = JSON.stringify(formData);

    // Выводим JSON в консоль 
    console.log(jsonData)

    // Сохраняем дата в localStorage 
    localStorage.setItem("userData", jsonData)
});
