function armazenarvalor(){

//armazena o valor que o usario digitou
var userimput = document.gerElementById("userImput").value;

//exibe o valor armazenado
console.log("o valor da variavel é: " + userImput);

//atualiza o conteudo
document.getElementById("valorInserido").innerText = " O valor inserido é: " = userImput;

}