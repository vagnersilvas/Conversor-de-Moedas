const BASE_URL = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

async function ApiCurrency() {
  return await fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => data.USDBRL.ask)
    .then(Number)
}

const multiplicar = (a, b) => a * b;


function formatCurrency(currency) {
  return currency.toLocaleString('en', { style: 'currency', currency: 'USD' })
}

async function currencyConverter() {
  const inputValue = document.getElementById('dolar').value
  const renderCurrency = document.querySelector('[data-resultado]')

  const dollarQuote = await ApiCurrency();
  if (inputValue !== '') {
    const dollar = multiplicar(dollarQuote, inputValue)
    const currencyFormated = formatCurrency(dollar);

    renderCurrency.innerHTML = `${currencyFormated}`;
  }
}

async function inicializeDollarQuote() {
  const nodeRenderDollarQuoteToday = document.querySelector('[data-dollar-quote-today]')
  const dollarQuote = await ApiCurrency();
  const dollarFormated = formatCurrency(dollarQuote)

  nodeRenderDollarQuoteToday.innerHTML = dollarFormated
}

const btnConverter = document.querySelector('[data-btn-converter]')

btnConverter.addEventListener('click', currencyConverter)

document.addEventListener('DOMContentLoaded', inicializeDollarQuote)