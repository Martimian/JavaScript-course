const data = [
    { title: 'Notebook', id: 1, price: 2000 },
    { title: 'Keyboard', id: 2, price: 1500 },
    { title: 'Mouse', id: 3, price: 1350 },
    { title: 'Gamepad', id: 4, price: 5500 },
    { title: 'Новый Товар', id: 5 }
];
const renderProduct = (title, id, price) => {
    return `
        <div class="product-item">    
                <h3>${title}</h3>
                <p>${price}</p>
                <button>Купить</button>
        </div>
    `
};

const render = (products) => {
    document.querySelector('.products').innerHTML = products.map(item => renderProduct(item.title, item.id, item.price)).join('');
};

render(data);
console.log(data)