const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        const res = await fetch("https://examtracker-fur6.onrender.com/api/auth/login", {
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

        if (res.ok) {

            // ✅ JWT TOKEN SAVE
            localStorage.setItem("token", data.token);

            // optional user save
            localStorage.setItem("user", JSON.stringify(data.user));

            alert("Login Successful 🚀");

            // 👉 redirect to dashboard
            window.location.href = "dashboard_home.html";

        } else {
            alert(data.message || "Login Failed");
        }

    } catch (error) {
        console.log(error);
        alert("Server Error");
    }

});