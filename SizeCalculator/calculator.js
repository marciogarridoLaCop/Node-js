/*
Programa para cálculo de sombra de objetos
Linguagem - Node.js  Versao 2.0
Márcio Garrido 30/10/2020
*/
var color = require("cli-color")
var readline = require('readline')
var distancia_sombra_objeto = ""
var distancia_sombra_referencia = ""
var altura_referencia = ""
const os = require("os")
const { parse } = require("path")
const { freemen,totalmem}= os

var calculadora = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var logon = "Bem vindo ao calculador de sombras";

function welcome(logon) {
    var mem = os.freemem();
    var memtotal=os.totalmem();
    console.log(color.green(logon))
    console.log(color.green(`Total de memória livre :${parseInt(mem/1024/1024)}MB`))
    console.log(color.green(`Total de memória do computador :${parseInt(memtotal/1024/1024/1024)}GB`))
}
welcome(logon);
calculadora.question('Digite o valor da distancia da sombra do objeto desejado : ', (distancia_sombra_objeto) => {
    calculadora.question('Digite o valor da distancia da sombrado objeto referencia : ', (distancia_sombra_referencia) => { 
        calculadora.question('Digite o valor da altura do objeto  referencia : ', (altura_referencia) => {
            var result = (altura_referencia * distancia_sombra_objeto) / distancia_sombra_referencia
            console.log(`A altura do objeto é de  ${result} metros`)
            calculadora.close()
        });
    });
});