

document.addEventListener("DOMContentLoaded", function() {
    
    var formLogin = document.querySelector("form");

    
    formLogin.addEventListener("submit", function(event) {
        
        var email = document.querySelector(".email").value.trim();
        var senha = document.querySelector(".senha").value.trim();
        // Verificando se todos os campos estão preenchidos
        if (email === "" || senha === "") {
            alert("Por favor, preencha todos os campos para efetuar o Login.");
            event.preventDefault(); // Impedindo o envio do formulário
            return; 
        }
       
        window.location.href = "./mainHome.html";
    });

    
});
