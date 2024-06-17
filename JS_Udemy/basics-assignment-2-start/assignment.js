const task3Element = document.getElementById('task-3');



function withoutParameter() {
    alert("Hello Assignment");
}

function withParameter(name) {
    alert("This is my name "+name);
}

function stringWithParameter(name1, name2, name3) {
    console.log(name1+ name2+ name3);
}

withParameter("Padmaja");

task3Element.addEventListener("click", withoutParameter);
stringWithParameter("Santhosh","Ponnusami", "Saarumathi");