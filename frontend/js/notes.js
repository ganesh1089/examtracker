const exam = localStorage.getItem("selectedExam");
const subject = localStorage.getItem("selectedSubject");
const topic = localStorage.getItem("selectedTopic");

const note = notesData?.[exam]?.[subject]?.[topic];

if(note){
    document.getElementById("title").innerText = note.title;
    document.getElementById("content").innerHTML = note.content;
}else{
    document.getElementById("content").innerHTML =
    "Notes not found 🚨";
}