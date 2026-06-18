// ==========================================
// DOM ELEMENT
// ==========================================

const examGrid =
document.getElementById("examGrid");

// ==========================================
// RENDER EXAMS
// ==========================================

function renderExams(){

    examGrid.innerHTML = "";

    exams.forEach(exam => {

        examGrid.innerHTML += `

        <div
        class="exam-card"
        data-name="${exam.name}">

            <span>${exam.icon}</span>

            <h3>${exam.name}</h3>

        </div>

        `;

    });

}

renderExams();

// ==========================================
// SEARCH FILTER
// ==========================================

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    const value =
    searchInput.value.toLowerCase();

    document
    .querySelectorAll(".exam-card")
    .forEach(card => {

        const text =
        card.dataset.name.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// ==========================================
// SELECT EXAM (CLICK HANDLER)
// ==========================================

document.addEventListener("click", (e) => {

    const card =
    e.target.closest(".exam-card");

    if (!card) return;

    const examName =
    card.dataset.name;

    // Save selected exam
    localStorage.setItem(
        "selectedExam",
        examName
    );

    // Smooth transition effect (optional UX)
    card.style.transform = "scale(0.95)";

    setTimeout(() => {

        window.location.href =
        "exam.html";

    }, 150);

});
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    // clear user session
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // optional: clear selected exam
    localStorage.removeItem("selectedExam");
    localStorage.removeItem("selectedSubject");

    // redirect to login page
    window.location.href = "login.html";

});
const user =
JSON.parse(
localStorage.getItem("user")
);

if(user){

document.getElementById(
"userBox"
).textContent =
`Welcome, ${user.name} 👋`;

}

const exam =
localStorage.getItem(
"selectedExam"
);

if(exam){

document.getElementById(
"selectedExamName"
).textContent =
exam;

}

const target =
localStorage.getItem(
"dailyTarget"
) || 10;

document.getElementById(
"dailyGoal"
).textContent =
target + " Topics";

document
.getElementById("continueBtn")
.addEventListener(
"click",
()=>{

if(!exam){

alert(
"Please select an exam first"
);

return;

}

window.location.href =
"exam.html";

});

document
.getElementById("logoutBtn")
.addEventListener(
"click",
()=>{

localStorage.removeItem(
"user"
);

localStorage.removeItem(
"token"
);

window.location.href =
"login.html";

});