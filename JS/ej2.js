// pasar un string en array, indicar los espacios en blanco por "-"
// output => ["hola", "mundo", "-", "desde", "-", "javascript"]

let string = "hola mundo desde javascript";
let newString = string.replace(/\s/g, ' - '); // /s detecta espacios, tabs, new line
console.log(newString);