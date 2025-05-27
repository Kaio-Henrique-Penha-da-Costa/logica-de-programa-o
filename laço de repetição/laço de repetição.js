// Exercício 1

let usuario = prompt("Digite o nome de usuário:")

while (usuario === "" || usuario === null) {
    console.log("Nome inválido")
    usuario = prompt("Digite o nome de usuário:")
}

console.log("Nome válido")

// Exercício 2

let senha = prompt("Crie uma senha:")

while (senha === "" || senha === null ) {
    console.log("Senha inválida")
    senha = prompt("Crie uma senha:")
}

console.log("Senha válida")

// Exercício 3

let senha = prompt("Crie uma senha:")
let confirma = prompt("Confirme a senha:")

while (confirma !== senha) {
    console.log("As senhas não coincidem")
    confirma = prompt("Confirme a senha novamente:")
}

console.log("Senha confirmada")

// Exercício 4

let usuario = prompt("Digite o usuario: ")
let senha = Number(prompt("Digite a senha "))
while (usuario !== "kaio" || senha !== 1234 ) {
    console.log("Dados errados")
    usuario = prompt("Digite o usuario: ")
    senha = Number(prompt("Digite a senha "))
}
console.log("Login efetuado")

// Exercício 5

let usuario = prompt("Digite o usuario: ")
let senha = Number(prompt("Digite a senha "))
while (usuario !== "kaio" || senha !== 1234 ) {
    console.log("Usuário ou senha incorretos.")
    usuario = prompt("Digite o usuario: ")
    senha = Number(prompt("Digite a senha "))
}
console.log("Login efetuado")

// Exercicio 6

let tentativas = 1
let usuario = prompt("Digite o usuário:")
let senha = Number(prompt("Digite a senha:"))

while (usuario !== "kaio" || senha !== 1234) {
    console.log("Usuário ou senha incorretos.")

    if (tentativas === 3) {
        console.log("Acesso bloqueado")
        break
    }

    tentativas = tentativas + 1
    usuario = prompt("Digite o usuário:")
    senha = Number(prompt("Digite a senha:"))
}

if (usuario === "kaio" && senha === 1234) {
    console.log("Login efetuado")
}

// Exercício 7

let usuarioCadastrado = prompt("Cadastre um nome de usuário:")
let senhaCadastrada = prompt("Cadastre uma senha:")

let usuario = prompt("Digite o usuário:")
let senha = prompt("Digite a senha:")

while (usuario !== usuarioCadastrado || senha !== senhaCadastrada) {
    console.log("Usuário ou senha incorretos.")
    usuario = prompt("Digite o usuário:")
    senha = prompt("Digite a senha:")
}

console.log("Login efetuado")

// Exercício 8

let usuarioCadastrado = prompt("Cadastre um nome de usuário:")
let senhaCadastrada = prompt("Cadastre uma senha:")

let usuario = prompt("Digite o usuário:")
let senha = prompt("Digite a senha:")

while (usuario !== usuarioCadastrado || senha !== senhaCadastrada) {
    console.log("Usuário ou senha incorretos.")
    let resposta = prompt("Esqueceu a senha? (sim/não)")

    if (resposta === "sim") {
        console.log("Sua senha é: " + senhaCadastrada)
    }

    usuario = prompt("Digite o usuário:")
    senha = prompt("Digite a senha:")
}

console.log("Login efetuado")

// Exercício 9

let usuarioCadastrado = prompt("Cadastre um nome de usuário:")
let senhaCadastrada = prompt("Cadastre uma senha:")

let usuario = prompt("Digite o usuário:")
let senha = prompt("Digite a senha:")

while (usuario !== usuarioCadastrado || senha !== senhaCadastrada) {
    console.log("Usuário ou senha incorretos.")
    usuario = prompt("Digite o usuário:")
    senha = prompt("Digite a senha:")
}

console.log("Você está logado!")

let comando = prompt("Digite 'sair' para fazer logout:")

while (comando !== "sair") {
    comando = prompt("Digite 'sair' para fazer logout:")
}

console.log("Logout realizado")