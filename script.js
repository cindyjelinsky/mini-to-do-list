const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit',function(e){
    e.preventDefault();
    const newTask = taskInput.value;

    addTask(newTask);
    taskInput.value ='';
   
});

function createCheckBox(){
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type','checkbox');
    return checkBox;
}

function createButton(element,text,className,id){
    const newButton = document.createElement(`${element}`);
    newButton.textContent = `${text}`;
    newButton.classList.add(`${className}`);
    newButton.setAttribute('id',`${id}`)
    return newButton;

}


function addTask(task){
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;
   
    listItem.appendChild(taskText);

    //Checkbox completed task
    const checkTask = listItem.appendChild(createCheckBox());
    checkTask.addEventListener('change',function(){
        if (this.checked) {
            taskText.style.textDecoration ='line-through';
        }
    });


    //Delete button
    const deleteBtn = listItem.appendChild(createButton('button','Delete','btn-task'));
    deleteBtn.addEventListener('click',function (){
        taskList.removeChild(listItem)
    });
        
   
    listItem.appendChild(createButton('button','Edit','btn-task'));
 

    taskList.appendChild(listItem);

          
   
}





