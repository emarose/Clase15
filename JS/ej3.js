// Crear una variable que contenga el siguiente array :
//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Definir una variable filtered que muestre los valores de los los numeros
// que son pares utilizando el método .filter()

function evenNumbers(){
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let filtered = array.filter(v => v % 2 == 0);
  console.log('Numeros pares: ' + filtered);
  return filtered;
}
  
evenNumbers();