
// empty array of strings
const taskToDo = [];

// type in task, submit with button

 let taskList = document.getElementById("tasklist")
let button = document.getElementById('submitBtn');

document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText").value;
    taskToDo.push(myName)
    
    console.log("Hello", myName);
    console.log(taskToDo)
    
}




    let newTask = document.createElement('div');
    newTask.textContent = taskToDo[0] 
    document.taskList.appendChild(newTask)

    let radioBtn = document.createElement('input')
    radioBtn.setAttribute('id','html')
    document.newTask.appendChild(radioBtn)

    let newLabel = document.createElement('label')
    newLabel.setAttribute('for','html')
    document.newTask.appendChild(newLabel)



// on submit, new string is added to array. New div,inpyt, and lable are created.


// and added to array




// new string is displayed on the app
// when button is checked, then word is crossed out