// Crear una función que indique el total de elementos impares de un array

function unevenNumbers(){
  let arr = [1,3,4,2,6,7,9,1,8]  
  let impares = arr.filter(v => v % 2 !== 0).length;
  console.log('Numeros impares: ' + impares);
  return impares;
}
  
unevenNumbers();