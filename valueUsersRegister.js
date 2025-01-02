document.getElementById("register").addEventListener("click", function (event) {
    event.preventDefault(); // Не дает перезагрузить

    const userNameRegValue = document.getElementById("userLogReg").value;
    const userPasswordRegValue = document.getElementById("userPassReg").value;
    const userRepatPasswordRegValue = document.getElementById("userRepeatPassReg").value;

    const formDataReg = {
        userName: userNameRegValue,
        userPass: userNameRegValue,
        userRepatPass: userRepatPasswordRegValue,
    };

    const jsonDataReg = JSON.stringify(formDataReg)

    console.log(jsonDataReg);
    
    // Сохранение локальном хранилище браузера 
    localStorage.setItem("userData", jsonData) 
} );