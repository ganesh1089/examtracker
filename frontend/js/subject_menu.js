const subject =
localStorage.getItem("selectedSubject");

document.getElementById(
"subjectTitle"
).textContent = subject;

document.getElementById(
"studyCard"
).addEventListener(
"click",
()=>{
window.location.href =
"study.html";
}
);

document.getElementById(
"practiceCard"
).addEventListener(
"click",
()=>{

window.location.href =
"questions.html"; // यही questions page open होगा

}
);
document.getElementById(
"checklistCard"
).addEventListener(
"click",
()=>{
window.location.href =
"subject.html";
}
);