// https://www.omnicalculator.com/conversion/billion-to-trillion-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const trillionRadio = document.getElementById('trillionRadio');
const billionRadio = document.getElementById('billionRadio');
const scientificnotationRadio = document.getElementById('scientificnotationRadio');

let trillion;
let scientificnotation;
let billion = v;

// labels of the inpust
const variable = document.getElementById('variable');

trillionRadio.addEventListener('click', function() {
  variable.textContent = 'Billion';
  billion = v;
  result.textContent = '';
});

billionRadio.addEventListener('click', function() {
  variable.textContent = 'Trillion';
  trillion = v;
  result.textContent = '';
});

scientificnotationRadio.addEventListener('click', function() {
  variable.textContent = 'Billion';
  billion = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(trillionRadio.checked)
    result.textContent = `Trillion = ${computetrillion().toFixed(2)}`;

  else if(billionRadio.checked)
    result.textContent = `Billion = ${computebillion().toFixed(2)}`;

  else if(scientificnotationRadio.checked)
    result.textContent = `Scientific notation = ${computescientificnotation().toFixed(0)}`;
})

// calculation

function computetrillion() {
  return Number(billion.value) / 1000;
}

function computebillion() {
  return Number(trillion.value) * 1000;
}

function computescientificnotation() {
  return Number(billion.value) * 1000000000
}