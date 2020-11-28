window.addEventListener('load', function (e) {
  var a;
  for (num = 1; num <= 10; num++) {
    document.write(
      "<table border='1' style='display:inline-block; margin:5px;' >",
    );

    document.write(
      "<tr><th colspan='2' style='border: 1px solid black; text-align:center'>" +
        'Produtos de ' +
        num +
        '</th></tr>',
    );

    for (a = 1; a <= 10; a++) {
      {
        document.write(
          "<tr><td style='border:1px solid black ; text-align:center'>" +
            num +
            'x' +
            a +
            '</td>',
        );
        document.write(
          "<td style='border:solid black 1px; text-align:center'>" +
            a * num +
            '</td></tr>',
        );
      }
    }
    document.write('</table>');
  }
});
