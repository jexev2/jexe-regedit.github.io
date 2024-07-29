// Convertidor de divisas
document.getElementById('currency-select').addEventListener('change', updateConvertedPrice);
document.getElementById('usd-amount').addEventListener('input', updateConvertedPrice);

function updateConvertedPrice() {
    var rate = 4000; // Tasa de 4,000 COP por dólar
    var usdAmount = parseFloat(document.getElementById('usd-amount').value);
    var currency = document.getElementById('currency-select').value;
    var convertedAmount;

    switch (currency) {
        case 'COP':
            convertedAmount = usdAmount * rate;
            break;
        case 'USD':
            convertedAmount = usdAmount;
            break;
        case 'MXN':
            convertedAmount = usdAmount * 18; // Ejemplo, ajustar según sea necesario
            break;
        case 'ARS':
            convertedAmount = usdAmount * 280; // Ejemplo, ajustar según sea necesario
            break;
        case 'BRL':
            convertedAmount = usdAmount * 5; // Ejemplo, ajustar según sea necesario
            break;
        case 'CLP':
            convertedAmount = usdAmount * 850; // Ejemplo, ajustar según sea necesario
            break;
        case 'PEN':
            convertedAmount = usdAmount * 3.7; // Ejemplo, ajustar según sea necesario
            break;
        default:
            convertedAmount = usdAmount;
    }

    document.getElementById('converted-price').textContent = 'Precio en moneda local: ' + convertedAmount.toFixed(2) + ' ' + currency;
}