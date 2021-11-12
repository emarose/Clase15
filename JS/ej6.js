// Usando el reduce retornar un solo array. pista: .concat

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const reducer = (a, b) => a.concat (b);
console.log(data.reduce(reducer));