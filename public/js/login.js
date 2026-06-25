const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const res = await fetch("/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email,
            password
        })

    });

    const data = await res.json();

   if(data.success){

    localStorage.setItem("userEmail", email);

    alert("Login Successful");

    window.location.href = "index.html";

}
    else{

        alert("Invalid Email or Password");

    }

});