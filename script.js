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
    }

}
