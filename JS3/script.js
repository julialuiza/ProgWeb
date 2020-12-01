function counter(num) {
  var contador = num;
  return function () {
    contador += 1;
    return contador;
  };
}

var incrementar = counter(1);

console.log('Primeira chamada ' + incrementar());
console.log('Segunda chamada ' + incrementar());
console.log('Terceira chamada ' + incrementar());
