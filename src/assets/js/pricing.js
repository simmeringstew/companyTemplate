const priceToggle = document.getElementById('monthlyOrAnnualy');
const price1 = document.getElementById('price-1');
const price2 = document.getElementById('price-2');
const price3 = document.getElementById('price-3');

const changePrices = () => {
  if (priceToggle.checked) {
    price1.textContent = '$45.99';
    price2.textContent = '$89.99';
    price3.textContent = '$179.99'
  } else {
    price1.textContent = '$49.99';
    price2.textContent = '$99.99';
    price3.textContent = '$199.99';
  }
};
priceToggle.addEventListener('change', changePrices);
