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

// Order table data

data.forEach(info => {
    const tr = document.createElement('tr');
    const trContent = `
    <td>${info.serialNumber}</td>
    <td class="table-product">${info.productName}</td>
    <td>${info.quantity}</td>
    <td>${info.orderId}</td>
    <td>${info.orderValue}</td>
    <td class="table-product">${info.customerEmail}</td>    
    `
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});
