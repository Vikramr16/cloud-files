function toggleSearch() {
    const searchInput = document.querySelector('.search-input');
    const inputField = searchInput.querySelector('input');
    searchInput.style.display = searchInput.style.display === 'none' ? 'flex' : 'none';
    
    if (searchInput.style.display === 'none') {
        inputField.value = '';
        filterDishes();
        location.href = '#navigation';
    } else {
        location.href = '#show-dishes';
    }
}

function filterDishes() {
    const searchInput = document.querySelector('.search-input input');
    const foodItems = document.querySelectorAll('.food-cat');
    const entered = searchInput.value.toUpperCase();
    let count = 0;

    foodItems.forEach(item => {
        const foodName = item.querySelector('.food-name').textContent.toUpperCase();

        if (foodName.indexOf(entered) < 0) {
            item.style.display = "none";
            count++;
        } else {
            item.style.display = "block";
        }
    });

    const noResults = count === foodItems.length;
    const res = document.querySelector('#no-results');

    if (noResults) {
        res.style.display = "block";
    } else {
        res.style.display = "none";
    }
}

function submitSearch() {
    const searchInput = document.querySelector('.search-input input');
    const query = searchInput.value.trim();

    if (query) {
        filterDishes();
        toggleSearch();
    }
}

document.querySelector('.search-input input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        submitSearch();
    }
});

let cart = [];

function addToCart(foodItem) {
    showAddPopup();
    const { image, name, price, category } = foodItem;
    cart.push({ image, name, price, category });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function showAddPopup() {
    const popup = document.createElement('div');
    popup.className = 'add-popup';
    popup.innerHTML = 'Added to cart <a href="cart.html" class="view-link">view</a>';
    
    popup.style.position = 'fixed';
    popup.style.bottom = '20px';
    popup.style.left = '50%'; 
    popup.style.transform = 'translateX(-50%)';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    popup.style.color = 'white';
    popup.style.width = '300px'; 
    popup.style.padding = '20px'; 
    popup.style.borderRadius = '10px';
    popup.style.fontSize = '18px';
    popup.style.zIndex = '1000';
    popup.style.textAlign = 'center';
    popup.style.wordSpacing = '5px';
    
    const viewLink = popup.querySelector('.view-link');
    viewLink.style.color = '#ff6600'; 
    viewLink.style.textDecoration = 'underline';
    viewLink.style.fontWeight = 'bold';
    
    document.body.appendChild(popup);

    setTimeout(() => {
        document.body.removeChild(popup);
    }, 3000);
}

function deleteFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartTable = document.getElementById('cart-table-body');
    cartTable.innerHTML = '';

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" style="width: 50px;"></td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>$${item.price}</td>
            <td><button onclick="deleteFromCart(${index})">Delete</button></td>
        `;
        cartTable.appendChild(row);
    });
}

function opencart() {
  window.location.href = 'cart.html';
}

window.onload = function() {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
        cart = storedCart;
        updateCartDisplay();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const openButton = document.getElementById('openPopup');
    const closeButton = document.querySelector('.close-button');

    openButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
