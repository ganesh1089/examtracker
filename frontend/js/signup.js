const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }

    try {

        const res = await fetch("https://examtracker-fur6.onrender.com/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        const data = await res.json();

        if(res.ok){
            alert("Signup Successful 🚀");
            window.location.href = "login.html";
        } else {
            alert(data.message || "Signup Failed");
        }

    } catch (error) {
        console.log(error);
        alert("Server Error");
    }

});