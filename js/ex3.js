//Exercício 3

//Função do IMC
function IMC(){
    //Input para obter os dados do usuário
    
    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");
    
    //Converter a string para um float
    
    let pesonum = parseFloat(peso.value);
    let alturanum = parseFloat(altura.value);
   
    //Calcular IMC
    
    let imc = pesonum / (alturanum*alturanum)
    
    if(imc < 18.5){
        document.write("Você está abaixo do peso");
    } else if(imc >= 18.5 && imc <= 24.9){
        document.write("Você está no peso ideal");
    } else{
        document.write("Você está acima do peso");
    }
}
