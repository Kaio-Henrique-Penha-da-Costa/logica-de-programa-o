function verificarSenha() {
    console.log("login")
    let usuario = prompt("Digite seu usuário: ")
    let senha = prompt("Digite sua senha: ")
    
 if (usuario == "kaio" && senha == "1234") {
        console.log("senha e usuario corretos")
    } else if (usuario == "ana" && senha == "abcd") {
        console.log("senha e usuario corretos")
    } else if (usuario == "joao" && senha == "senha123") {
        console.log("senha e usuario corretos")
    } else if (usuario == "maria" && senha == "sla123") {
        console.log("senha e usuario corretos")
    } else if (usuario == "matheus" && senha == "blabla") {
        console.log("senha e usuario corretos")
    } else {
        console.log("Usuário ou senha incorretos")
    }
    {
        let sim = prompt("Deseja cadastrar um novo usuário? (sim ou nao)")
        
        if (sim == "sim"){
            let novoUsuario = prompt("Digite o novo nome de usuário:")
            let novaSenha = prompt("Digite a nova senha:")
            
            console.log("Novo usuário criado:")
            console.log("Usuário: " + novoUsuario)
            console.log("Senha: " + novaSenha)
        }
    }
}

verificarSenha()