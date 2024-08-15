const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit',function(e){
    e.preventDefault();
    const newTask = taskInput.value;

    addTask(newTask);
    taskInput.value ='';
   
});

//Functions ------------------------------------------


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
    
    //Delete Task
    const deleteBtn = listItem.appendChild(createButton('button','Delete','btn-task'));
    deleteBtn.addEventListener('click',function (){
       deleteTask(listItem,taskList);
    });
        
    //Edit Task
    const editBtn = listItem.appendChild(createButton('button','Edit','btn-task'));
    editBtn.addEventListener('click',function(){
        editTask(editBtn,taskText,listItem);
    })


    taskList.appendChild(listItem);
           
}



function createCheckBox(){
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type','checkbox');
    return checkBox;
}

function createButton(element,text,className,id,callback){
    const newButton = document.createElement(`${element}`);
    newButton.textContent = `${text}`;
    newButton.classList.add(`${className}`);
    newButton.setAttribute('id',`${id}`)
    newButton.addEventListener('click',callback);
    return newButton;

}


function editTask(editBtn,taskText,listItem){
    if(editBtn.textContent === 'Edit'){
        const editInput = document.createElement('input')
        editInput.type = 'text'
        editInput.value = taskText.textContent;
        listItem.replaceChild(editInput,taskText);
        editInput.focus();

        editBtn.textContent = 'Save';
        editBtn.removeEventListener('click',arguments.callee);


        editBtn.addEventListener('click', function() {
            const updatedTask = editInput.value;
            listItem.replaceChild(taskText, editInput);
            taskText.textContent = updatedTask;

            editBtn.textContent = 'Edit';
            
        });
    
    }
}

function deleteTask(listItem,taskList){
    taskList.removeChild(listItem);
}







