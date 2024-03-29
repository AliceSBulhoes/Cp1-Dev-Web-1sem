//Exercício 4

//Função idade
function idade(){

    //Pega o valor do input e armazena na variável idade
    let input = document.getElementById("idade");
    idade = input.value;


    //IF-Else que serve para indicar a faixa etária do usuário
    if(idade <=12){
        document.write("Você é uma criança");
    } else if(13<=idade<=18){
        document.write("Você é um adolescente");
    } else if(19<=idade<=60){
        document.write("Você é um adulto");
    }else {
        document.write("Você é um idoso");
    }
}
