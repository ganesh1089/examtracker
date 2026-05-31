let dailyTarget = 10;

const buttons =
document.querySelectorAll(".target-btn");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        buttons.forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        dailyTarget =
        Number(btn.dataset.value);

    });

});

document
.getElementById("saveBtn")
.addEventListener("click", async () => {

    const exam =
    document.getElementById("exam").value;

    if (!exam) {

        alert("Select Exam");
        return;

    }

    const user =
    JSON.parse(
        localStorage.getItem("user")
    );

    const res = await fetch(
        "http://localhost:5000/api/user/setup",
        {
            method: "POST",
            headers: {
                "Content-Type":
                "application/json"
            },
            body: JSON.stringify({

                userId: user._id,

                selectedExam: exam,

                dailyTarget

            })
        }
    );

    const data =
    await res.json();

    if (res.ok) {

        localStorage.setItem(
            "selectedExam",
            exam
        );

        localStorage.setItem(
            "dailyTarget",
            dailyTarget
        );

        window.location.href =
        "dashboard_home.html";

    } else {

        alert(data.message);

    }

});