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
alert("Practice Section Coming Soon 🚀");
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