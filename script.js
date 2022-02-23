const BASE_URL = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

async function queryApiCurrency() {
  return await fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => data.USDBRL.ask)
    .then(Number)
}


function converter() {

  const dolar = 5.47

  var valor = (document.getElementById('dinheiro'))

  var res = document.querySelector('span')

  valor = Number(valor.value)

  var resultado = Number(valor / dolar).toLocaleString('en', { style: 'currency', currency: 'USD' });

  res.innerHTML = `R&dollar;${valor} em Dólar é ${resultado}`

}

function convert() {

  const dolar = 5.47

  var valor = (document.getElementById('real'))

  var res = document.querySelector('span#result')

  valor = Number(valor.value)

  var resultado = Number(valor * dolar).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  res.innerHTML = `U&dollar;${valor} em Real é ${resultado}`

}