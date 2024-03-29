//Exercício 7

function info(){

    let input1 = document.getElementById("nome");
    nome = input1.value;
    let input2 = document.getElementById("idad");
    idade = input2.value;
    let input3 = document.getElementById("curso");
    curso = input3.value;
    let input4 = document.getElementById("ano");
    ano = input4.value;

    document.write("<style>body{background-color:azure}</style>")
    document.write("<h1>Informações do Aluno</h1>")
    document.write("Nome: " + nome + "<br>");
    document.write("Idade: " + idade + "<br>");
    document.write("Curso: " + curso + "<br>");
    document.write("Ano no Curso: " + ano + "<br>");
}

