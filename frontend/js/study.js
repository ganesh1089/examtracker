const subject =
localStorage.getItem("selectedSubject");

document.getElementById(
"subjectTitle"
).textContent =
subject + " Study";

document
.getElementById("notesCard")
.addEventListener(
"click",
()=>{
window.location.href =
"notes_topics.html";
}
);

document.getElementById(
"tricksCard"
).addEventListener(
"click",
()=>{
alert("Short Tricks Coming Soon 🚀");
}
);

document.getElementById(
"formulaCard"
).addEventListener(
"click",
()=>{
alert("Formulas Coming Soon 🚀");
}
);