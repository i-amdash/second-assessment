const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sideBar = document.querySelector("#sidebar");
const produce = document.querySelector("#produce");


// Show Sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

// Close Sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

produce.addEventListener('click', () => {
    produce.classList.toggle("active")
});

// sidebar active toggle
sideBar.addEventListener('click', () => {
    sideBar.classList.toggle("active")
});


// product list table
products.forEach(product => {
    const tr = document.createElement('tr');
    const trContent = `
    <td> ${product.serialNumber} </td>
    <td class="table-product">${product.productName} </td>
    <td>${product.productPrice} </td>
    <td>${product.productSKU} </td>
    <td>${product.productQuantity}</td>
    `

    tr.innerHTML = trContent;
    document.querySelector('table tbody').append(tr);
})