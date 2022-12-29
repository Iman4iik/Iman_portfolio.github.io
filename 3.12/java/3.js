let addToDobutton = document.getElementById('addToDo');
let ToDocontainer = document.getElementById('ToDoContainer');
let inputField = document.getElementById('inputField');

addToDobutton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    ToDocontainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        ToDocontainer.removeChild(paragraph);
    })    
})