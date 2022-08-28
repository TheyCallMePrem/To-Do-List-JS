let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let goBack = document.getElementById('go-back');

let counter=0;
addToDoButton.addEventListener('click', function(){
    counter++;
    // alert(counter);
    
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
        counter--;
    })
    if(counter > 10){
        alert("no more than 10 items allowed");
        toDoContainer.removeChild(paragraph);
        counter--;
    } 
    if(paragraph.innerText === ""){
        alert("Empty inputs not allowed");
        toDoContainer.removeChild(paragraph);
        counter--;
    }
    
    // alert(counter);
})

goBack.addEventListener('click', function(){
    toDoContainer.removeChild(paragraph);
    document.getElementById('pay').style.display = 'none';
});