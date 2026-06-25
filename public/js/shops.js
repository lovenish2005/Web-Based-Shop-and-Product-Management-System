const shopList = document.getElementById("shopList");

async function loadShops() {
    const res = await fetch("/shops");
    const shops = await res.json();

    shopList.innerHTML = "";

   shops.forEach((s) => {

    shopList.innerHTML += `
    
        <div class="card">

            <img
                src="${s.image}"
                class="shop-image"
            >

            <h3 class="title">
                ${s.shopName}
            </h3>

            <a href="shopdetails.html?shop=${s.shopName}">
                <button class="viewBtn">
                    View Shop
                </button>
            </a>

        </div>

    `;
});
}

loadShops();