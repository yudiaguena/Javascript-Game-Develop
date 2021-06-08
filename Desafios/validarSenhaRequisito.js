function validadorDeSenha(senha) {
  let regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[]){0})[0-9a-zA-Z]*$/;
  return ((senha.length < 6 || senha.length > 32) ? false : (!regex.exec(senha)) ? false: true);// Escreva aqui a lógica para validar a senha

}

let senha = "";

do {
  senha = gets();
  if (senha !== "") {
    let valido = validadorDeSenha(senha);
    console.log("Senha " + (valido ? "valida." : "invalida."));    
  }
} while (senha !== "");


/*teste exemplo
Digital Innovation One

AbcdEfgh99

DigitalInnovationOne123

Digital Innovation One 123

Aass9

Aassd9