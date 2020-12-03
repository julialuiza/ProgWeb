function calcular() {
  var raio = document.getElementById('raio').value;
  var pi = 3.14;
  var area = pi * (raio * raio);
  var circunferencia = 2 * pi * raio;

  document.getElementById('area').value = area;
  document.getElementById('circunferencia').value = circunferencia;
}
