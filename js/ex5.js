//Função do botão de enviar o user e a password
function enviar(){
//Coleta o user e a senha
    let input = document.getElementById("username");
    username = input.value;
    let senha = document.getElementById("password");
    password = senha.value;

    //Faz um check se os valores colocados batem a senha e o user do admin
    if (username === 'admin' && password === "1234"){
        //Se os valores colocados batem com o do admin, mensagem de login feito!
        document.write("Login realizado com sucesso!")
        }   else{
        //Se os valores não batem, mostra uma mensagem de falha
        document.write("Login falhou, senha ou username incorretos!")
        }
}