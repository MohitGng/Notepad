// setInterval(() => {
  //     alert("hello this is index.js");
  
  // }, 2000);
  
  // If add a note store it to localStorage
  
  console.log("Welcome to notes app. This is app.js");
  showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("submitBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addText");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  
  else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);
  showNotes();
});

// Function to show elements in the note list
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } 
  
  else {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.forEach(function(element, index){
    html +=  
    `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button id="${index}" onclick="delNote(this.id)" class="btn btn-primary">Delete Note</button>
      </div>
    </div>
    `;
  });
  
  // console.log(notesObj.length);
  let notesEle = document.getElementById('notes');
  if(notesObj.length != 0){
    notesEle.innerHTML = html;
  }

  else {
    notesEle.innerHTML = `Your list is empty! Add items to see magic`;
  }
}

// Function to show elements in the note list
function delNote(index){
   console.log("I am being deleted" + index)

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  
  else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1)
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


let search = document.getElementById("searchTxt")
search.addEventListener("input", function() {
  let inputVal = search.value;

  let cards = document.getElementsByClassName("noteCard");
  Array.from(cards).forEach(function(element) {

    let cardEle = element.getElementsByTagName("p")[0].innerText;
    if (cardEle.includes(inputVal)){
      element.style.display = "block"
    }
    
    else {
      element.style.display = "none"
    }
  })
})