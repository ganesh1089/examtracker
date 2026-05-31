// ==========================================
// Get Selected Exam
// ==========================================

const examName =
localStorage.getItem(
"selectedExam"
);

const exam =
exams.find(
e => e.name === examName
);

// ==========================================
// Show Exam Name
// ==========================================

document.getElementById(
"examTitle"
).textContent =
exam.name;

// ==========================================
// Subject Container
// ==========================================

const container =
document.getElementById(
"subjectsContainer"
);

// ==========================================
// Render Subjects Only
// ==========================================

for(
const subject in exam.subjects
){

container.innerHTML += `

<div
class="subject-card"
data-subject="${subject}"
>

    <div class="subject-header">

        📚 ${subject}

    </div>

</div>

`;

}

// ==========================================
// Open Subject Page
// ==========================================

document
.querySelectorAll(
".subject-card"
)
.forEach(card=>{

card.addEventListener(
"click",
()=>{

// Save Selected Subject

localStorage.setItem(
"selectedSubject",
card.dataset.subject
);

// Open Subject Page

window.location.href =
"subject.html";

});

});