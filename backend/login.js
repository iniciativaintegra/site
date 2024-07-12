document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("emaillogin").value;
    const password = document.getElementById("password").value;

    // Credenciais pré-definidas
    const validUsername = "equipe.iniciativaintegra@gmail.com";
    const validPassword = "InTe@24.gra";

    if (username === validUsername && password === validPassword) {
        // Armazenar informação no localStorage
        localStorage.setItem("loggedIn", "true");
        // Redirecionar para a área da equipe
        window.location.href = "areaequipe.html";
    } else {
        document.getElementById("error-message").innerText = "Usuário ou senha incorretos!";
    }
});
