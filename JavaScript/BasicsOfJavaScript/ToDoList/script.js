function AddTask(){
    const task = document.getElementById("NewTask").value.trim();

    console.log(task);

    if(task){
        const li = document.createElement("li");
    li.classList.add("p-2" , "d-flex" , "align-items-center" , "border" , "border-bottom")
    const d = document.createElement("div");
    d.classList.add("w-75");
    d.innerText = task;
    const b = document.createElement("button");
    b.classList.add("btn" , "btn-danger" , "ms-3");
    b.innerHTML = `<i class="bi bi-trash"></i> Delete`
    // b.innerText = "Delete";
    // const i = document.createElement("i");
    // i.classList.add("bi" , "bi-bi-trash");
    // b.appendChild(i);

    b.onclick = ()=>{li.remove()};
    li.appendChild(d);
    li.appendChild(b);
    document.getElementById("TaskList").appendChild(li);
     document.getElementById("TaskList").value = " ";

    }
}