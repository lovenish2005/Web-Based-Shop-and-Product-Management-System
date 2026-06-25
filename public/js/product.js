const form = document.getElementById("productForm");
const list = document.getElementById("productList");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const image = document.getElementById("image").value;

    const ownerEmail =
    localStorage.getItem("userEmail");

    await fetch("/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            category,
            image,
            ownerEmail,
        }),
    });

    form.reset();

    loadProducts();
});

async function loadProducts() {

    const email =
    localStorage.getItem("userEmail");

    const res =
    await fetch("/products");

    const products =
    await res.json();

    const myProducts =
    products.filter(
        p => p.ownerEmail === email
    );

    list.innerHTML = "";

    myProducts.forEach((p) => {

        list.innerHTML += `
            <div class="card">

                <img src="${p.image}" 
                >

                <h3 class="title">${p.name}</h3>

                <p class="price">₹${p.price}</p>

                <p class="category">${p.category}</p>

                <button onclick="deleteProduct('${p._id}')">
                    Delete
                </button>

            </div>
        `;
    });
}

async function deleteProduct(id) {

    await fetch(`/products/${id}`, {
        method: "DELETE",
    });

    loadProducts();
}

async function loadShop() {

    const email =
    localStorage.getItem("userEmail");

    const res =
    await fetch("/shops");

    const shops =
    await res.json();

    const myShop =
    shops.find(
        shop => shop.ownerEmail === email
    );

    if(myShop){

        document.getElementById("shopInfo").innerHTML = `
            <div class="shop-header">

                <img
                    src="${myShop.image}"
                   
                >

                <h2>${myShop.shopName}</h2>

            </div>
        `;
    }
}

loadShop();
loadProducts();