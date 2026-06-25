const productList =
document.getElementById("productList");

async function loadProducts() {

    const productRes =
    await fetch("/products");

    const products =
    await productRes.json();

    const shopRes =
    await fetch("/shops");

    const shops =
    await shopRes.json();

    productList.innerHTML = "";

    products.forEach((p) => {

        const shop =
        shops.find(
            s => s.ownerEmail === p.ownerEmail
        );

        productList.innerHTML += `

            <div class="card">

                <img
                    src="${p.image}"
                    class="shop-image"
                >

                <h3>${p.name}</h3>

                <p>₹${p.price}</p>

                <p>${p.category}</p>

                <p id="shopify">
                    Shop:
                    ${shop ? shop.shopName : "Unknown"}
                </p>

                <a href="shopdetails.html?shop=${shop.shopName}">
                    <button class="viewBtn">
                        View Shop
                    </button>
                </a>

            </div>

        `;
    });
}

loadProducts();