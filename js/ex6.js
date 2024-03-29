//Definindo a função média
function MEDIA(){
    //Coletando as 7 notas 
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);
    let nota5 = parseFloat(document.getElementById("nota5").value);
    let nota6 = parseFloat(document.getElementById("nota6").value);
    let nota7 = parseFloat(document.getElementById("nota7").value);
    
    //Soma total das notas
    let total = nota1+nota2+nota3+nota4+nota5+nota6+nota7;
    //Soma das notas dividido por 7
    let media = total/7;
    //Se a média for maior ou igual a 6, o aluno estará aprovado
    if (media>=6){
        document.write("Parabéns você passou com uma média de " + media.toFixed(2));
    //Senão o aluno é reprovado
    }else{
        document.write("Infelizmente você foi reprovado com " + media.toFixed(2));
    }
    
}
