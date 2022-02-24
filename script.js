const BASE_URL = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

async function ApiCurrency() {
  return await fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => data.USDBRL.ask)
    .then(Number)
}

const multiply = (a, b) => a * b;


function formatCurrencyUSD(currency) {
  return currency.toLocaleString('en', { style: 'currency', currency: 'USD' })
}

async function currencyConverter() {
  const inputValue = document.getElementById('dollar').value
  const renderCurrency = document.querySelector('[data-result]')

  const dollarQuote = await ApiCurrency();
  if (inputValue !== '') {
    const dollar = multiply(dollarQuote, inputValue)
    const currencyFormated = formatCurrencyUSD(dollar);

    renderCurrency.innerHTML = `${currencyFormated}`;
  }
}

async function inicializeDollarQuote() {
  const nodeRenderDollarQuoteToday = document.querySelector('[data-dollar-quote-today]')
  const dollarQuote = await ApiCurrency();
  const dollarFormated = formatCurrencyUSD(dollarQuote)

  nodeRenderDollarQuoteToday.innerHTML = dollarFormated
}

document
  .querySelector('[data-btn-converter]')
  .addEventListener('click', currencyConverter)

document
  .addEventListener('DOMContentLoaded', inicializeDollarQuote)