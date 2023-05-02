function increment() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('quantity').value = value;
    calculateTotal();
  }

  function decrement() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
      value--;
    }
    document.getElementById('quantity').value = value;
    calculateTotal();
  }

  function calculateTotal() {
    var quantity = parseInt(document.getElementById('quantity').value, 10);
    quantity = isNaN(quantity) ? 0 : quantity;
    var cost = 15.97;
    var subtotal = Math.round(quantity * cost * 100) / 100;
    var shipping = parseFloat(document.getElementById('shipping').value);
    shipping = isNaN(shipping) ? 0 : shipping;
    var tax = Math.round(subtotal * 0.1 * 100) / 100;
    var total = Math.round((subtotal + shipping + tax) * 100) / 100;
    document.getElementById('quantity-display').innerHTML = quantity;
    document.getElementById('shipping-display').innerHTML = '$' + shipping.toFixed(2);
    document.getElementById('subtotal').innerHTML = '$' + subtotal.toFixed(2);
    document.getElementById('tax').innerHTML = '$' + tax.toFixed(2);
    document.getElementById('total').innerHTML = '$' + total.toFixed(2);
  }