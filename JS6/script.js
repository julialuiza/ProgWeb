function graficoBarras() {
  var b1 = document.getElementById('barra1').value;
  var b2 = document.getElementById('barra2').value;
  var b3 = document.getElementById('barra3').value;
  var b4 = document.getElementById('barra4').value;
  var b5 = document.getElementById('barra5').value;
  var largura = document.getElementById('largura').value;
  var espaco = largura + 5;

  document.getElementById('bar1').style.width = `${largura}px`;
  document.getElementById('bar1').style.height = `${b1}px`;

  document.getElementById('bar2').style.width = `${largura}px`;
  document.getElementById('bar2').style.height = `${b2}px`;
  document.getElementById('bar2').style.left = `${espaco * 2}px`;

  document.getElementById('bar3').style.width = `${largura}px`;
  document.getElementById('bar3').style.height = `${b3}px`;
  document.getElementById('bar3').style.left = `${espaco * 3}px`;

  document.getElementById('bar4').style.width = `${largura}px`;
  document.getElementById('bar4').style.height = `${b4}px`;
  document.getElementById('bar4').style.left = `${espaco * 4}px`;

  document.getElementById('bar5').style.width = `${largura}px`;
  document.getElementById('bar5').style.height = `${b5}px`;
  document.getElementById('bar5').style.left = `${espaco * 5}px`;
}
