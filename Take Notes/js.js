let textArea = document.getElementById("text");
let titleip = document.getElementById("title");
let dateip = document.getElementById("date");
let timeip = document.getElementById("time");
const addBtn = document.querySelector(".addBtn");


/****************************
ADDING NOTES
*****************************/
addBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    let notes = localStorage.getItem("notes");
    let noteObj;
    

    if(notes == null){
        noteObj = [];
    }
    else{
        noteObj = JSON.parse(notes);
    }
    let myObj = {
        title:titleip.value,
        date:dateip.value,
        time:timeip.value,
        note:textArea.value
    }
    noteObj.push(myObj);
    localStorage.setItem("notes" ,JSON.stringify(noteObj));

    textArea.value = "";
    titleip.value = "";
    dateip.value = "";
    timeip.value = "";

    displayNotes();
});

/****************************
DISPLAYING NOTES
*****************************/
const displayNotes = ()=>{
    let noteObj;
    let notes = localStorage.getItem("notes");

    if(notes == null){
        noteObj = [];
    }
    else{
        noteObj = JSON.parse(notes);
    }
    let html = "";
        if(noteObj == ""){
            let div = document.querySelector(".notesDiv");
            let ele = document.createElement("h1");
            let text = document.createTextNode("No Notes Found");
            ele.appendChild(text);
            ele.setAttribute("style", "width:100%; text-align:center")
            div.append(ele);
            localStorage.clear();
        }
        else{
            let leng =  JSON.parse(localStorage.getItem("notes")).length;
            for(let i=0; i<leng; i++){
                html += `
            <div class="note">
                <h3 class="title">${noteObj[i].title}</h3>
                <div class="date">
                    <p>Remind Me: &nbsp;${noteObj[i].date} ${noteObj[i].time}</p>
                </div>
                <div class="desc">
                    <p>${noteObj[i].note}</p>
                </div>
                <button class="delete" id="${i}" onclick="deleteI(this.id)"><i class="fas fa-trash"></i></button>
        </div>
            `;
            }
        document.querySelector(".notesDiv").innerHTML = html;
    }
}
displayNotes();

/****************************
DELETING NOTES
*****************************/
const deleteI = (id) => {
    let noteObj;
    let notes = localStorage.getItem("notes");

    if(notes == null){
        noteObj = [];
    }
    else{
        noteObj = JSON.parse(notes);
    }
    noteObj.splice(id, 1);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    // reload the page to update notes after deleting
    location.reload();
}

/****************************
SEARCHING NOTES
*****************************/
const search = ()=>{
    let searchText = document.getElementById("search").value;
    let note = document.querySelectorAll(".note .desc p");
    note.forEach(ele=>{
        let text = ele.innerText;
        if(text.includes(searchText)){
            let parent = ele.parentElement.parentElement;
            parent.style.display = "block";
        }
        else{
            let parent = ele.parentElement.parentElement;
            parent.style.display = "none";
        }
    });
}