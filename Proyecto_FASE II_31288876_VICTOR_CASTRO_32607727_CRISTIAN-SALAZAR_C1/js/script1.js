document.querySelector('.arrow').addEventListener('click', function() {
    var ddmenu = document.querySelector('.ddmenu');
    var ddcar = document.querySelector('.ddcar');
    var content = document.querySelector('.content');

    if (ddcar.classList.contains('visible')) {
        ddcar.classList.remove('visible');
        content.classList.remove('blur');
    }

    if (ddmenu.classList.contains('visible')) {
        ddmenu.classList.remove('visible');
        content.classList.remove('blur');
    } else {
        ddmenu.classList.add('visible');
        content.classList.add('blur');
    }
});

document.querySelector('.image-with-circle').addEventListener('click', function() {
    var ddcar = document.querySelector('.ddcar');
    var ddmenu = document.querySelector('.ddmenu');
    var content = document.querySelector('.content');

    if (ddmenu.classList.contains('visible')) {
        ddmenu.classList.remove('visible');
        content.classList.remove('blur');
    }

    if (ddcar.classList.contains('visible')) {
        ddcar.classList.remove('visible');
        content.classList.remove('blur');
    } else {
        ddcar.classList.add('visible');
        content.classList.add('blur');
    }
});

document.addEventListener('click', function(event) {
    var ddmenu = document.querySelector('.ddmenu');
    var ddcar = document.querySelector('.ddcar');
    var content = document.querySelector('.content');
    var arrow = document.querySelector('.arrow');
    var imageWithCircle = document.querySelector('.image-with-circle');

    if (!ddmenu.contains(event.target) && !arrow.contains(event.target) && ddmenu.classList.contains('visible')) {
        ddmenu.classList.remove('visible');
        content.classList.remove('blur');
    }

    if (!ddcar.contains(event.target) && !imageWithCircle.contains(event.target) && ddcar.classList.contains('visible')) {
        ddcar.classList.remove('visible');
        content.classList.remove('blur');
    }
});


const usuarios = [
    { username: 'seller456', password: 'Intro123'},
    { username: 'dancabello', password: 'J5*asdRD.s'},
    { username: 'root', password: 'dochouse'}
];
const TM = [
    { image:'images/IMG-20250309-WA0010.jpg',name: 'Tensiometro de muñeca',price:'20'},
];
const TM2 = [
    { image:'images/IMG-20250309-WA0011.jpg',name: 'Cornetas para PC con sonido envolvente',price:'15'},
];

localStorage.setItem('item1', JSON.stringify(TM));
localStorage.setItem('item2', JSON.stringify(TM2));
localStorage.setItem('usuarios', JSON.stringify(usuarios));

let UA=null;

document.querySelector('.IS').addEventListener('click', function() {
    if (this.textContent === 'Iniciar Sesión') {
        document.getElementById('modal-login').style.display = 'block';
    } else {
        cerrarSesion();
    }
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal-login').style.display = 'none';
});

document.querySelector('#close').addEventListener('click', () => {
    document.getElementById('modal-register').style.display = 'none';
});

function mostrarContenido(username) {
    if (username === 'seller456') {
        const user=document.querySelector('.container_tarjet.seller');
        const bien=document.querySelector('.bien');
        const imageWithCircle=document.querySelector('.image-with-circle.r');
        bien.classList.add('user');
        user.classList.remove('seller');
        imageWithCircle.classList.remove('r');
    } else if (username === 'dancabello') {
        const user=document.querySelector('.ven.n');
        const bien=document.querySelector('.bien');
        bien.classList.add('user');
        user.classList.remove('n');
    } else if (username === 'root') {
        const user=document.querySelector('.containerroot.fi');
        const bien=document.querySelector('.bien');
        bien.classList.add('user');
        user.classList.remove('fi');
    }
}
function ocultarContenido(username) {
    if (username === 'seller456') {
        const user=document.querySelector('.container_tarjet');
        const bien=document.querySelector('.bien.user');
        bien.classList.remove('user');
        user.classList.add('seller');
    } else if (username === 'dancabello') {
        const user=document.querySelector('.ven');
        const bien=document.querySelector('.bien.user');
        bien.classList.remove('user');
        user.classList.add('n');
    } else if (username === 'root') {
        const user=document.querySelector('.containerroot');
        const bien=document.querySelector('.bien');
        bien.classList.remove('user');
        user.classList.add('fi');
    }
}

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuarios.find(user => user.username === username && user.password === password);

    if (usuario) {
        alert(`Bienvenido ${usuario.username}`);
        document.getElementById('modal-login').style.display = 'none';

        UA=usuario.username;

        document.querySelector('.IS').textContent = 'Cerrar Sesión';

        document.getElementById('login-form').reset();

        mostrarContenido(usuario.username);
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

function cerrarSesion() {
    
    alert('Sesión cerrada');

    document.querySelector('.IS').textContent = 'Iniciar Sesión';

    ocultarContenido(UA);
}


document.addEventListener('DOMContentLoaded', function() {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key.includes('usuarios')) {
            const item = JSON.parse(localStorage.getItem(key));
            items.push(item[0]);
        }
    }
    if (items.length === 0) {
        return;
    }

    items.forEach((product, index) => {
        const containerTarjet = document.querySelector('.container_tarjet');

        const card = document.createElement('div');
        card.classList.add('card');

        const conImg = document.createElement('div');
        conImg.classList.add('con-img');
        
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = 'Producto';
        img.classList.add('product-img');
        
        conImg.appendChild(img);
        card.appendChild(conImg);

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const productName = document.createElement('h2');
        productName.classList.add('product-name');
        productName.textContent = product.name;
        
        cardContent.appendChild(productName);

        const cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer');

        const quantityInput = document.createElement('div');
        quantityInput.classList.add('quantity-input');

        const minus = document.createElement('span');
        minus.classList.add('minus');
        minus.textContent = '-';

        const quantity = document.createElement('span');
        quantity.classList.add('quantity');
        quantity.textContent = '1';

        const plus = document.createElement('span');
        plus.classList.add('plus');
        plus.textContent = '+';

        quantityInput.appendChild(minus);
        quantityInput.appendChild(quantity);
        quantityInput.appendChild(plus);
        
        cardFooter.appendChild(quantityInput);

        const buyContainer = document.createElement('div');
        buyContainer.classList.add('buy-container');

        const circle4 = document.createElement('div');
        circle4.classList.add('circle4');

        const miniImg = document.createElement('img');
        miniImg.src = 'images/bolsa2.png';
        miniImg.alt = 'Bolsa';
        miniImg.classList.add('mini-img');

        circle4.appendChild(miniImg);
        buyContainer.appendChild(circle4);

        const priceContainer = document.createElement('div');
        priceContainer.style.display = 'flex';
        priceContainer.style.justifyItems = 'center';
        priceContainer.style.alignItems = 'center';
        priceContainer.style.textAlign = 'center';

        const priceLabel = document.createElement('p');
        priceLabel.style.fontWeight = 'bolder';
        priceLabel.innerHTML = 'Costo:&nbsp;';

        const priceSymbol = document.createElement('p');
        priceSymbol.textContent = '$';

        const priceValue = document.createElement('p');
        priceValue.classList.add('precio');
        priceValue.textContent = product.price;

        priceContainer.appendChild(priceLabel);
        priceContainer.appendChild(priceSymbol);
        priceContainer.appendChild(priceValue);

        buyContainer.appendChild(priceContainer);

        const pr = document.createElement('p');
        pr.textContent = 'iiiii';
        pr.style.color= '#fff';

        buyContainer.appendChild(pr);

        const buyBtn = document.createElement('button');
        buyBtn.classList.add('buy-btn');
        buyBtn.textContent = 'Comprar';

        buyContainer.appendChild(buyBtn);
        cardFooter.appendChild(buyContainer);

        cardContent.appendChild(cardFooter);
        card.appendChild(cardContent);
        containerTarjet.appendChild(card);

        let quantityValue = 1;

        minus.addEventListener('click', function() {
            if (quantityValue > 1) {
                quantityValue--;
                quantity.textContent = quantityValue;
            }
        });

        plus.addEventListener('click', function() {
            quantityValue++;
            quantity.textContent = quantityValue;
        });
    });

    document.querySelector('.container_tarjet').addEventListener('click', function(e) {
        if (e.target.classList.contains('circle4') || e.target.closest('.circle4')) {
            e.preventDefault();
            alert('Me estás tocando');
            console.log('Clic en .circle4');
        }
    });
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.onclick = showModal;
    });
});

function clearForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
}

document.getElementById('to-register').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('modal-login').style.display = 'none';
    document.getElementById('modal-register').style.display = 'block';
    clearForm('login-form');
});

document.getElementById('to-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('modal-register').style.display = 'none';
    document.getElementById('modal-login').style.display = 'block';
    clearForm('register-form');
});

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registro exitoso');
    document.getElementById('modal-register').style.display = 'none';
    document.getElementById('modal-login').style.display = 'block';
});


let cartItems23 = [];


document.querySelector('.container_tarjet').addEventListener('click', function (e) {
  
    if (e.target.classList.contains('circle4') || e.target.closest('.circle4')) {
        e.preventDefault();

        
        const card = e.target.closest('.card');

        const productImg = card.querySelector('.product-img').src;
        const productName = card.querySelector('.product-name').textContent;
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        const price = parseFloat(card.querySelector('.precio').textContent);

        const existingItem = cartItems23.find(item => item.name === productName);

        if (existingItem) {
            
            existingItem.quantity += quantity;
            existingItem.price += price*quantity;
        } else {
         
            cartItems23.push({
                image: productImg,
                name: productName,
                quantity: quantity,
                price: price
            });
        }

        renderCartItems();

        console.log(cartItems23); 
        alert('Producto añadido al carrito');
    }
});

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; 


    cartItemsContainer.style.display = 'grid';
    cartItemsContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
    cartItemsContainer.style.gap = '10px'; 

    cartItems23.forEach(item => {
        
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container'); 

        itemContainer.style.backgroundColor = '#fff'; 
        itemContainer.style.color = '#333';
        itemContainer.style.border = '1px solid #ccc';
        itemContainer.style.borderRadius = '5px';
        itemContainer.style.padding = '10px';
        itemContainer.style.display = 'flex';
        itemContainer.style.alignItems = 'center';

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.style.width = '50px';
        img.style.height = '50px';
        img.style.borderRadius = '5px';
        img.style.marginRight = '10px';

        const textContainer = document.createElement('div');
        textContainer.style.display = 'flex';
        textContainer.style.flexDirection = 'column'; 
        textContainer.style.justifyContent = 'center'; 

        const name = document.createElement('p');
        name.textContent = item.name;
        name.style.margin = '0'; 

        const quantity = document.createElement('p');
        quantity.textContent = `Cantidad: ${item.quantity}`;
        quantity.style.margin = '0'; 

        const price = document.createElement('p');
        price.textContent = `Precio: $${item.price}`;
        price.style.margin = '0';

        textContainer.appendChild(name);
        textContainer.appendChild(quantity);
        textContainer.appendChild(price);

        itemContainer.appendChild(img);
        itemContainer.appendChild(textContainer);

        cartItem.appendChild(itemContainer);
        cartItemsContainer.appendChild(cartItem);
    });
}

function showModal(isInCart1) {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    closeCart();

    document.getElementById('confirm-btn').onclick = function() {
        if (cartItems23.length === 0) {
            alert('El carrito está vacío. Agrega productos antes de comprar.');
        } else if (!isInCart1) {
            alert('Compra exitosa, gracias por comprar con nosotros!');
            clearCart(); 
        } else {
            alert('Compra exitosa desde el carrito, gracias por comprar con nosotros!');
            modal.style.display = 'none'; 
        }
    };


    document.getElementById('cancel-btn').onclick = function() {
        modal.style.display = 'none'; 
    };

    document.querySelector('.close').onclick = function() {
        modal.style.display = 'none'; 
    };
}

document.querySelectorAll('.buy-btn').forEach(button => {
    button.onclick = function(e) {
        const isInCart = e.target.closest('.car') !== null;

        if (isInCart) {
            
            showModal(isInCart);
        } else {
           
            if (cartItems23.length === 0) {
                alert('El carrito está vacío. Agrega productos antes de comprar.');
            } else {
                showModal(isInCart); 
            }
        }
    };
});


window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none'; 
    }
};


function clearCart() {
    cartItems23 = []; 
    renderCartItems(); 
}


function closeCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.style.display = 'none'; 

    var ddcar = document.querySelector('.ddcar');
    var ddmenu = document.querySelector('.ddmenu');
    var content = document.querySelector('.content');

    if (ddmenu.classList.contains('visible')) {
        ddmenu.classList.remove('visible');
        content.classList.remove('blur');
    }

    if (ddcar.classList.contains('visible')) {
        ddcar.classList.remove('visible');
        content.classList.remove('blur');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const itemForm = document.getElementById('itemForm');
    const messageDiv = document.getElementById('message');

    itemForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const imageInput = document.getElementById('imageInput');
        const itemDescription = document.getElementById('itemDescription').value;
        const itemPrice = document.getElementById('itemPrice').value;

        if (imageInput.files.length === 0) {
            alert('Por favor, selecciona una imagen.');
            return;
        }

        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const item = {
                image: e.target.result,
                name: itemDescription,
                price: parseFloat(itemPrice)
            };

            let items = JSON.parse(localStorage.getItem('items')) || [];
            items.push(item);
            const it= 'item'+new Date().getTime();;
            localStorage.setItem(it, JSON.stringify(items));
            itemForm.reset();
            messageDiv.textContent = 'Artículo añadido exitosamente!';
        };

        reader.readAsDataURL(file);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const btnArticulos = document.getElementById('btnArticulos');
    const btnUsuarios = document.getElementById('btnUsuarios');
    const listContainer = document.getElementById('listContainer');

    const articulos = [
        { nombre: 'Jabon', fecha: '2025-03-01' },
        { nombre: 'Chupeta', fecha: '2025-03-02' },
        { nombre: 'Peluche', fecha: '2025-03-03' }
    ];

    const usuarios = [
        { nombre: 'Jua_345', fecha: '2023-03-01' },
        { nombre: 'Cas_234', fecha: '2025-03-02' },
        { nombre: 'Mal_231', fecha: '2020-03-03' }
    ];

    btnArticulos.addEventListener('click', function() {
        mostrarLista(articulos, 'Artículos');
    });

    btnUsuarios.addEventListener('click', function() {
        mostrarLista(usuarios, 'Usuarios');
    });

    function mostrarLista(lista, tipo) {
        listContainer.innerHTML = `<h2>${tipo}</h2>`;
        lista.forEach((item, index) => {
            const listItem = document.createElement('div');
            listItem.className = 'list-item';
            listItem.innerHTML = `
                <span>${item.nombre} - ${item.fecha}</span>
                <button class="delete-btn" data-index="${index}">X</button>
            `;
            listContainer.appendChild(listItem);
        });

        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                alert(`${tipo.slice(0, -1)} "${lista[index].nombre}" ha sido borrado.`);
                lista.splice(index, 1);
                mostrarLista(lista, tipo);
            });
        });
    }
});
