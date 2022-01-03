window.addEventListener("load" ,() => {
const input = document.querySelector("#new-task-input");
const form = document.querySelector("#new-task-form");
const list_el = document.querySelector("#tasks");
console.log(form);

    form.addEventListener('submit' , (e)=>{
        e.preventDefault();
        const task = input.value;

        if(!task){
            alert('Error');
            return;
        }

        const taskEl = document.createElement('div');
        taskEl.classList.add("task");

        const taskContentEl = document.createElement("div");
        taskContentEl.classList.add("content");
        taskContentEl.innerText = task;

        taskEl.appendChild(taskContentEl);

        const taskInputEl = document.createElement('input');
        taskInputEl.classList.add("text");
        taskInputEl.type = "text";
        taskInputEl.setAttribute("readonly", "readonly");

        taskContentEl.appendChild(taskInputEl);
  
        const actions = document.createElement("div");
        actions.classList.add("buttons");

        const edit_el = document.createElement("button");
        edit_el.classList.add("edit");
        edit_el.innerHTML = "Edit";

        const delete_el = document.createElement("button");
        delete_el.classList.add("delete");
        delete_el.innerHTML = "delete"
        actions.appendChild(edit_el);
        actions.appendChild(delete_el);

        taskEl.appendChild(actions);

        
        list_el.appendChild(taskEl);

        input.value = "";

        edit_el.addEventListener('click' , () =>{
            console.log(taskInputEl);
            if(edit_el.innerText.toLowerCase() == 'edit'){
                edit_el.innerText = "Save";
                taskInputEl.removeAttribute('readonly');
                taskInputEl.focus();
                console.log(taskInputEl);
            }

            else{
                taskInputEl.setAttribute('readonly',  'readonly');
                edit_el.innerHTML = "Edit";
            }


        })

        delete_el.addEventListener('click' , () =>{
            list_el.removeChild(taskEl);
        })

    })


});


