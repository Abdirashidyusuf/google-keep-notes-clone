const notArea=document.querySelector('#note-area');
const title=document.querySelector('#title');
const noteText=document.querySelector('#note-text');
const note=document.querySelector('.note');
const notes=document.querySelector('#notes');

//2 show note area and change style
const showNoteArea=()=>{
    noteText.style='display:block';
    notArea.classList.add='note-now';
    title.setAttribute('placeholder','Title');
    title.style='fontSize:20px';
}

//4 hide note area
const hideNoteArea=()=>{
    noteText.style='display:none';
    notArea.classList.remove('note-now')
}

const getNoteFormLocalStroge=()=>{

    let oldNote;
    if(localStorage.getItem('notes') === null){
        oldNote=[];
    }else{
        oldNote=JSON.parse(localStorage.getItem('notes'));
    };

    oldNote.forEach(note => {
        notes.innerHTML+=`<div class="note">
    <h3 class="title-text">${note[0]}</h3>
    <p class="note-blog">${note[1]}</p>
    <i class="fa fa-trash "></i>
</div>`;
    });
}

//10 read from local storage
document.addEventListener('DOMContentLoaded',getNoteFormLocalStroge);

//9 add local storge

const addLocalStorage=(note)=>{
    if(note.length < 0){
        return;
    }

    let oldNote;
    if(localStorage.getItem('notes') === null){
        oldNote=[];
    }else{
        oldNote=JSON.parse(localStorage.getItem('notes'));
    };

    oldNote.push(note);
    localStorage.setItem('notes',JSON.stringify(oldNote));
}

//5 add note

const addNote=(t,n)=>{
    notes.innerHTML+=`<div class="note">
    <h3 class="title-text">${t}</h3>
    <p class="note-blog">${n}</p>
    <i class="fa fa-trash "></i>
</div>`;

title.value='',noteText.value='';

}

//8
document.addEventListener('click',(event)=>{
    if(event.target.classList.contains('fa-trash')){
        event.target.parentElement.remove();
    }
})

//7
document.addEventListener('mouseout',(event)=>{
    if(event.target.classList.contains('note')){
        event.target.querySelector('i').classList.remove('show');
    }
})

//6
document.addEventListener('mouseover',(event)=>{
    if(event.target.classList.contains('note')){
        event.target.querySelector('i').classList.add('show');
    }
})

//3
document.addEventListener('click',(event)=>{
    let isClicked=notArea.contains(event.target);
    if(! isClicked){
        hideNoteArea();
        if(title.value.length===0 && noteText.value.length===0){
            return;
        }else{
            addLocalStorage(title.value,noteText.value);
            addNote(title.value,noteText.value);
        }
    }
})

//1
notArea.addEventListener('click',showNoteArea);
;