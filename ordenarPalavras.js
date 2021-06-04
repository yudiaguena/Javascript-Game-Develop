let testes = parseInt(gets());
let lista = [];


for (let i = 0; i < testes; i++) {
  lista[i] = gets().split(" ").sort((a, b) => (a.length < b.length ? 1 : (a > b) ? (a.length == b.length) -1 : -1)).toString().replace(/,/g, " ");

}


for (ordenada in lista) {
  console.log(lista[ordenada]);
}