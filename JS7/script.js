window.onload = () => {
  var pontos = [],
    mouse = {
      x: 0,
      y: 0,
    };

  var Ponto = function () {
    this.x = 0;
    this.y = 0;
    this.node = (function () {
      var n = document.createElement('div');
      n.className = 'caminho';
      document.body.appendChild(n);
      return n;
    })();
  };

  Ponto.prototype.desenha = function () {
    this.node.style.left = this.x + 'px';
    this.node.style.top = this.y + 'px';
  };

  for (var i = 0; i < 8; i++) {
    var d = new Ponto();
    pontos.push(d);
  }

  function desenha() {
    var x = mouse.x,
      y = mouse.y;

    pontos.forEach(function (ponto, index, pontos) {
      var proxPonto = pontos[index + 1] || pontos[0];

      ponto.x = x;
      ponto.y = y;
      ponto.desenha();
      x += (proxPonto.x - ponto.x) * 0.7;
      y += (proxPonto.y - ponto.y) * 0.7;
    });
  }

  addEventListener('mousemove', function (event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });

  function init() {
    desenha();
    requestAnimationFrame(init);
  }

  init();
};
