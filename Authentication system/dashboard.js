

// function openForm() {
//     document.getElementById("form").style.display = "block";
// }

function closeForm() {
    document.getElementById("form").style.display = "none";
}

function closeDiv(event) {
    event.target.closest('.formDiv').style.display = "none";
}

window.onload = () => {
    createDivsFromData();
}

function generateRandomID() {
    return Math.random().toString(36).substr(2, 9);
}

function logout() {
    localStorage.removeItem('CurrentUser');
    window.location.href = 'login.html';
}

let editNoteIndex = null;
let editNoteId = null;


function openForm(noteIndex = null, noteId = null) {
    console.log("ee");

    document.getElementById("form").style.display = "block";
    console.log('ist');
    if (noteIndex !== null && noteId !== null) {
        const currentUser = JSON.parse(localStorage.getItem('CurrentUser')) || {};
        const AllDivData = JSON.parse(localStorage.getItem('AllCards')) || [];
        const userNotes = AllDivData.find((item) => item.id === currentUser.uniqueID);
        console.log('2nd');
        if (userNotes) {
            const note = userNotes.Notes[noteIndex];
            document.getElementById("name").value = note.title;
            document.getElementById("date").value = note.date;
            document.getElementById("textarea").value = note.textarea;

            editNoteIndex = noteIndex;
            editNoteId = noteId;
        }
        console.log('3rd');
    } else {
        document.getElementById("name").value = '';
        document.getElementById("date").value = '';
        document.getElementById("textarea").value = '';

        editNoteIndex = null;
        editNoteId = null;
    }
    console.log('4th');
}

function generateRandomID() {
    return Math.random().toString(36).substr(2, 9);
  }
  const uniqueID = generateRandomID();
const handleForm = (event) => {
    event.preventDefault();
    let title = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let textarea = document.getElementById("textarea").value;

    const formNewData = {
        cardId: uniqueID,
        title: title,
        date: date,
        textarea: textarea,
    }

    const CurrentData = JSON.parse(localStorage.getItem('AllCards')) || [];
    const CurrentId=CurrentData[0].Notes[0].cardId;

    if(CurrentId == true){
        const CurrentData = JSON.parse(localStorage.getItem('AllCards')) || [];
  
        
        const destructuredData = CurrentData.map(({ id, Notes }) => {
            const [title, date, textarea] = Notes;
          
    
    
        });
        destructuredData();

    }
    else{
        const currentUser = JSON.parse(localStorage.getItem('CurrentUser')) || {};
        if (!currentUser.uniqueID) {
            currentUser.uniqueID = generateRandomID();
            localStorage.setItem('CurrentUser', JSON.stringify(currentUser));
        }
    
        const AllDivData = JSON.parse(localStorage.getItem('AllCards')) || [];
        const userDataIndex = AllDivData.findIndex((item) => item.id === currentUser.uniqueID);
    
        if (userDataIndex !== -1) {
            if (editNoteIndex !== null) {
                AllDivData[userDataIndex].Notes[editNoteIndex] = formNewData;
            } else {
                AllDivData[userDataIndex].Notes.push(formNewData);
            }
        } else {
            AllDivData.push({ id: currentUser.uniqueID, Notes: [formNewData] });
        }
    
        localStorage.setItem('AllCards', JSON.stringify(AllDivData));
        createDivsFromData();
        closeForm();
    }
    
    }

  

function createDivsFromData() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    const data = JSON.parse(localStorage.getItem('AllCards')) || [];

    const currentUser = JSON.parse(localStorage.getItem('CurrentUser')) || {};
    const userNotes = data.find((item) => item.id === currentUser.uniqueID);

    if (userNotes && userNotes.Notes) {
        userNotes.Notes.forEach(note => {
            const div = document.createElement('div');
            div.className = "formDiv";
            div.style.cssText = 'border:1px solid #ddd; border-radius: 5px; color:black; background-color:#5DD765;  width:250px; -moz-box-shadow: 0px 0px 8px #fff; display:flex; flex-direction: column ; padding:20px; margin-right:10px;';
            div.id = 'Div-main';

            const closeNotes = document.createElement('i');
            closeNotes.className = "fa fa-close";
            closeNotes.style.cssText = 'align-self: flex-end; margin-top: 10px; cursor: pointer; font-size: 14px; margin-right:10px;';
            closeNotes.onclick = closeDiv;

            let title = document.createElement('p');
            title.textContent = `Title: ${note.title}`;
            title.id = 'DivTitle';

            const date = document.createElement('p');
            date.textContent = `Date: ${note.date}`;
            date.id = 'DivDate';

            const textarea = document.createElement('p');
            textarea.textContent = `Textarea: ${note.textarea}`;
            textarea.id = 'DivTextArea';

            const iconContainer = document.createElement('div');
            iconContainer.style.cssText = 'display: flex;  margin-left: 180px;';

            const editSymbol = document.createElement('i');
            editSymbol.className = 'fa fa-pencil fa_custom fa-1x';
            editSymbol.style.cssText = 'align-self: flex-end; margin-top: 10px; cursor: pointer; font-size: 22px; margin-right:20px;';
            editSymbol.id = 'DivEditSymbol';
            editSymbol.onclick =()=>openForm();


            const starSymbol = document.createElement('i');
            starSymbol.className = 'fa fa-star fa_custom';
            starSymbol.style.cssText = 'align-self: flex-end; margin-top: 10px; cursor: pointer; font-size: 22px; margin-right:20px;';
            starSymbol.id = 'DivStarSymbol';

            iconContainer.appendChild(editSymbol);
            iconContainer.appendChild(starSymbol);

            div.appendChild(closeNotes);
            div.appendChild(title);
            div.appendChild(date);
            div.appendChild(textarea);
            div.appendChild(iconContainer);
            container.appendChild(div);
        });
    }
}




// const testing=()=>{
//     const CurrentData = JSON.parse(localStorage.getItem('AllCards')) || [];
//     console.log("hello",)
// }
// testing();