let resultado = document.getElementById("resultado");
function calcular() {
  let altura = parseInt(document.getElementById("altura").value);
  let radioo = parseInt(document.getElementById("radioo").value);
  let areaLado = 0;
  let areaBase = 0;
  let areaTotal = 0;

  areaLateral = 2 * Math.PI * radioo * altura;
  areaBase = Math.PI * Math.pow(radioo, 2);
  areaTotal = 2 * areaBase + areaLateral;

  document.getElementById("resultado" ).innerHTML = `area lateral : ${areaLateral}, <br> area de Base: ${areaBase} y <br> el area total es igual a: ${areaTotal}`;
}