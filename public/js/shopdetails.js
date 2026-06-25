const shopInfo =
document.getElementById("shopInfo");

const productList =
document.getElementById("productList");

async function loadShopDetails() {

    const params =
    new URLSearchParams(
        window.location.search
    );

    const shopName =
    params.get("shop");

    const shopRes =
    await fetch("/shops");

    const shops =
    await shopRes.json();

    const shop =
    shops.find(
        s => s.shopName === shopName
    );

    if(shop){

        shopInfo.innerHTML = `
            <div class="shop-header">

                <img
                    src="${shop.image}"
                    width="120"
                    height="120"
                >

                <h1>${shop.shopName}</h1>

            </div>
        `;

        const productRes =
        await fetch("/products");

        const products =
        await productRes.json();

        const shopProducts =
        products.filter(
            p => p.ownerEmail === shop.ownerEmail
        );

        shopProducts.forEach((p) => {

            productList.innerHTML += `
                <div class="card">

                    <img
                        src="${p.image}"
                        width="120"
                        height="120"
                    >

                    <h3>${p.name}</h3>

                    <p>₹${p.price}</p>

                    <p>${p.category}</p>

                </div>
            `;
        });
    }
}

loadShopDetails();