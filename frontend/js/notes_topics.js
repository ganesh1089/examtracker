// ==========================================
// Get Selected Exam & Subject
// ==========================================

const examName =
localStorage.getItem(
"selectedExam"
);

const subjectName =
localStorage.getItem(
"selectedSubject"
);

// ==========================================
// Page Title
// ==========================================

document.getElementById(
"pageTitle"
).textContent =
`${subjectName} Notes`;

// ==========================================
// Container
// ==========================================

const container =
document.getElementById(
"topicsContainer"
);

// ==========================================
// Get Notes Data
// ==========================================

const topics =
notesData?.[examName]?.[subjectName];

// ==========================================
// No Data Found
// ==========================================

if(!topics){

container.innerHTML = `

<div class="topic-card">

Notes Coming Soon 🚀

</div>

`;

}

// ==========================================
// Render Topic Cards
// ==========================================

else{

for(
const topicName in topics
){

container.innerHTML += `

<div
class="topic-card"
data-topic="${topicName}"
>

📘 ${topicName}

</div>

`;

}

// ==========================================
// Open Notes Page
// ==========================================

document
.querySelectorAll(
".topic-card"
)
.forEach(card=>{

card.addEventListener(
"click",
()=>{

localStorage.setItem(
"selectedTopic",
card.dataset.topic
);

window.location.href =
"notes.html";

});

});

}