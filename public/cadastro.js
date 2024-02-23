function fazerLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    
    
    //Função callback. Parâmetro find para procurar.
    const pessoa = (email=== "ADM6907" && senha==="123@")
        
    if (pessoa) {
        window.location.href = "get_pgPrincipal.html";
    }else {
        alert("Cadastro não encontrado!");
    }
    
}