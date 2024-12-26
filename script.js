const InputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(InputBox.value === ''){
        alert("Doing something is better than doing nothing!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "Remove";
        li.appendChild(span);
    }
    InputBox.value = '';
    saveData();
}

listContainer.addEventListener("click",function(plug){
    if(plug.target.tagName === "LI"){
        plug.target.classList.toggle("checked");
        saveData(); 
    }
    else if(plug.target.tagName === "SPAN"){
        plug.target.parentElement.remove();
        saveData();
    }
},false);

InputBox.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addTask();
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function displayData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
displayData();