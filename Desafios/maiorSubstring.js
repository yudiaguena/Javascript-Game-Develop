let dados = [];
let string;

while(string != "") {
  string = gets();
  if(string != ""){
    dados.push(string);
  }
}

function compare(string1, string2) {
  let contador = [];
  for (let i = 0; i <= string1.length; i++) {
    for (let j = 0; j <= string1.length; j++) {
      if (string2.includes(string1.substring(i,j))) {
          contador.push(string1.substring(i,j).length);
      }
    }
  }
  return Math.max(...contador);
}

for(let i=0; i < dados.length; i+=2) {
  console.log(compare(dados[i], dados[(i+1)]));
}