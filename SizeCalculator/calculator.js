/*
Programa para cálculo de sombra de objetos
Linguagem - Node.js  Versao 3.0
Márcio Garrido 30/10/2020
*/
var color = require("cli-color")
var readline = require('readline')
var distancia_sombra_objeto = ""
var distancia_sombra_referencia = ""
var altura_referencia = ""
const os = require('os')
const { parse } = require("path")
const { freemen ,totalmem} = os
const mem = parseInt(os.freemem()/1024/1024)
const memtotal = parseInt(os.totalmem()/1024/1024)
const percent_uso = parseInt((mem/memtotal)*100)

const stats ={
    free: `${mem} MB`,
    total: `${memtotal } MB`,
    usage : `${percent_uso} %`
    }
    console.table(stats);


var calculadora = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//setInterval(() => {
    //console.table(stats);
//}, 1000);

var logon = "Bem vindo ao calculador de sombras";

function welcome(logon) {    
    console.log(color.green(logon))
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