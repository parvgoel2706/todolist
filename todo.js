let task = document.querySelector("#text");
let list = document.querySelector("#list");
let add = document.querySelector("#add");
add.addEventListener("click",function(){
    if(task.value != ""){
        addElement();
    }
})
task.addEventListener("keypress",function(event){
    if(event.key=="Enter" && task.value != ""){
        addElement();
    }
})

function addElement(){
    let space = document.createElement("br");

    let newtask =document.createElement("li");

    let checkbox = document.createElement("div");
    let content = document.createElement("div");
    let del = document.createElement("img");

    checkbox.classList.add("checkbox");
    checkbox.classList.add("changeuncheck");
    checkbox.addEventListener("click",function(){
        this.classList.toggle("changecheck");
    })
    
    content.innerHTML= task.value;
    content.classList.add("content");

    del.src="./delete.png"
    del.classList.add("delete")

    newtask.setAttribute("style","list-style-type:none");
    newtask.append(checkbox);
    newtask.append(content);
    newtask.append(del);

    del.addEventListener("click",function(){
        newtask.remove();
        space.remove();
    })

    list.append(newtask);
    list.append(space);
    task.value="";
}