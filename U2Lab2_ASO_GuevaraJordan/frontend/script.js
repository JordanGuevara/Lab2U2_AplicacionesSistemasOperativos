document.getElementById('productForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const product = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        price: parseFloat(document.getElementById('price').value),
        stock: parseInt(document.getElementById('stock').value),
        category: document.getElementById('category').value,
        supplier: document.getElementById('supplier').value
    };

    await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(product)
    });

    document.getElementById('productForm').reset();
});

document.getElementById('showProducts').addEventListener('click', async function() {
    const response = await fetch('http://localhost:5000/api/products');
    const products = await response.json();
    
    const table = document.getElementById('productTable');
    table.innerHTML = products.map(p =>
        `<tr>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.description}</td>
            <td>${p.price}</td>
            <td>${p.stock}</td>
            <td>${p.category}</td>
            <td>${p.supplier}</td>
        </tr>`
    ).join('');
});
