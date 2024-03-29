//Váriavel com o texto 
let texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.";
document.write(texto);
//Busca a primeira posição do 'em', e projeta seu número
document.write("<br>" + "Numero da posicao do 'em': " + texto.indexOf("em"));
//Busca a ultima posição do 'ia', e projeta seu numero
document.write("<br>" + "Numero da ultima posicao do 'ia': " + texto.lastIndexOf("ia"))
//Busca a palavra ciência, e projeta seu número
document.write("<br>" + "Numero da posicao do 'ciência': " + texto.indexOf("ciência"));
//Busca a palavra métodos, e projeta seu número
document.write("<br>" + "Numero da posicao do 'métodos': " + texto.indexOf("métodos"));

