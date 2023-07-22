const dados = require('./JSON/db.json');


const exibePopulation = dados.map( dados => dados.pop)

console.log(exibePopulation);