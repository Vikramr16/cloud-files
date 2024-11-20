let cart = [];
let totalPrice = 0;

function addToCart(foodItem) {
    const { image, name, price, category } = foodItem;
    cart.push({ image, name, price, category, quantity: 0 });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function deleteFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateQuantity(index, quantity) {
    if (quantity >= 0) {
        cart[index].quantity = parseInt(quantity);
        updateCartDisplay();
    }
}

function handleRadioChange(index, radio) {
    if (radio.checked) {
        const quantityInput = prompt("Enter the quantity:");
        if (quantityInput === null) {
            radio.checked = false;
            updateQuantity(index, 0);
            return;
        }
        const quantity = parseInt(quantityInput);
        if (quantity > 0) {
            updateQuantity(index, quantity);
        } else {
            alert("Please enter a valid quantity greater than 0.");
            radio.checked = false;
            updateQuantity(index, 0);
        }
    } else {
        updateQuantity(index, 0);
    }
}

function updateCartDisplay() {
    const cartTable = document.getElementById('cart-table-body');
    cartTable.innerHTML = '';
    totalPrice = 0;
    cart.forEach((item, index) => {
        if (item.quantity > 0) {
            totalPrice += item.price * item.quantity;
        }
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" style="width: 50px;"></td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <input type="radio" id="item-${index}" name="item-${index}" ${item.quantity > 0 ? 'checked' : ''} 
                    onchange="handleRadioChange(${index}, this)" class="cart-radio">
                <label for="item-${index}">Order</label>
            </td>
            <td><button class="delete-button" onclick="deleteFromCart(${index})">Delete</button></td>
        `;
        cartTable.appendChild(row);
    });
    document.getElementById('total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;
}

function checkBeforeProceed() {
    const selectedItems = cart.filter(item => item.quantity > 0);
    if (selectedItems.length === 0) {
        alert("Please select items before proceeding to payment.");
    } else {
        showPaymentOptions();
    }
}

function showPaymentOptions() {
    document.getElementById('payment-modal').style.display = 'flex';
}

function closePaymentModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

function handleCashOnDelivery() {
    alert('Order placed!');
    resetCartAfterPayment();
    closePaymentModal();
}

function handleUPIGateway() {
    const upiQrCodeImageUrl = "images/qr.jpeg";
    document.getElementById('upi-qr-image').src = upiQrCodeImageUrl;
    document.getElementById('upi-modal').style.display = 'flex';
    closePaymentModal();
}

function handleUPIPayment() {
    alert("Thank you for payment!");
    resetCartAfterPayment();
    document.getElementById('upi-modal').style.display = 'none';
}

function resetCartAfterPayment() {
    cart.forEach(item => item.quantity = 0);
    totalPrice = 0;
    updateCartDisplay();
}

document.addEventListener('DOMContentLoaded', function() {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
        cart = storedCart;
        updateCartDisplay();
    }
});
