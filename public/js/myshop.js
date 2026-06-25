const form = document.getElementById("shopForm");
const shopList = document.getElementById("shopList");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const shopName =
    document.getElementById("shopName").value;

    const image =
    document.getElementById("image").value;

    const ownerEmail =
    localStorage.getItem("userEmail");

    await fetch("/shops", {

        method: "POST",

        headers: {
            "Content-Type":"application/json"
        },

        body: JSON.stringify({

            shopName,
            image,
            ownerEmail

        })

    });

    alert("Shop Created");

    form.reset();

    loadMyShop();

});

async function loadMyShop() {

    const email =
    localStorage.getItem("userEmail");

    const res =
    await fetch("/shops");

    const shops =
    await res.json();

    const myShop =
    shops.find(shop =>
        shop.ownerEmail === email
    );

    if(myShop){
   form.style.display = "none";
   
        shopList.innerHTML = `
            <div class="shop-card">

                <img
                    src="${myShop.image}"
                    width="200"
                >

                <h2>${myShop.shopName}</h2>

            </div>
        `;
    }
}

loadMyShop();