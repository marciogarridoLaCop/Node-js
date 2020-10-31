/*
Funcao para cálculo 
*/
function shadowcalc (distancia_sombra_objeto,distancia_sombra_referencia,altura_referencia){
     var resultado = (altura_referencia * distancia_sombra_objeto) / distancia_sombra_referencia;
          if (resultado <=0) {
               return ("Impossível calcular com os valores digitados")
          }
          else
          return resultado;

}

exports.calcular_sombra=shadowcalc;