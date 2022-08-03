var list = document.getElementById("list");



function addTodo(){
    var todo_item = document.getElementById("todo-item")
    var li = document.createElement('li')
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)
    // create buttem
    var deletBtn = document.createElement("button")
    var deletText = document.createTextNode("DELET")
    deletBtn.setAttribute("class","btn")
    deletBtn.setAttribute("onclick","deletItem(this)")
    
    deletBtn.appendChild(deletText)
    // edit butten
    

    var editBtn = document.createElement("button")
    var editTaxt = document.createTextNode("EDIT")
    editBtn.setAttribute("class","btn")
    editBtn.appendChild(editTaxt)
    editBtn.setAttribute("onclick","editItem(this)")



    li.appendChild(deletBtn)
   li.appendChild(editBtn)


    list.appendChild(li)
    todo_item.value =""
    console.log(li)
}
function deletItem(e){
    e.parentNode.remove()
}


function editItem(e){
    console.log(e.parentNode.firstChild.nodeValue)
    var val =prompt("enter updated value",e.parentNode.firstChild.nodeValu)
    e.parentNode.firstChild.nodeValue = val;

    
}



function deletAll(){
    list.innerHTML = ""
}