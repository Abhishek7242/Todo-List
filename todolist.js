
let index=localStorage.length
let add =document.getElementById('submit')
let parentDiv

if(localStorage.length===0){
    add.innerText='Add task'

}
else  {
    add.innerText='Add new task'
    
}
    
    
    add.addEventListener("click", function() {

        // localStorage.clear()
        event.preventDefault(); // Prevent form submission behavior
        parentDiv = document.getElementById('container');
        // Create the form element
        let form = document.createElement('form');
        form.id = 'list'+index;
        form.style.display='flex'
        form.style.margin='9px 0'
        // form.style.border='2px solid black'
        form.style.borderRadius='100px'
        form.style.marginLeft='22px'
        add.innerText='Add new task'

        // form.style.justifyContent='center'
        
        // Create the input div
        let inputDiv = document.createElement('input');
        inputDiv.id = 'input'+index;
        inputDiv.type = 'text'
        
        inputDiv.style.border='none'
        inputDiv.style.boxShadow=' 0 0 1px black'
        inputDiv.style.borderRadius='5px'
        inputDiv.style.padding='2px 9px'
        inputDiv.style.width='80vw'
        inputDiv.style.display='flex'
        inputDiv.style.outline='none'
        inputDiv.style.background='white'
        inputDiv.style.height='30px'
   
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('btn');
        deleteButton.type = 'reset';
        deleteButton.id = 'reset'+index;
        deleteButton.textContent = 'Delete';
        deleteButton.style.boxShadow='0 0 3px black'
        deleteButton.addEventListener('click',()=>{
            let deleteFile = confirm("Are you sure you want to delete this task?");
         
            if (deleteFile) {
                parentDiv.removeChild(form)
                // localStorage.removeItem('task' + index, form.innerHTML);
                // localStorage.removeItem('input' + index, inputDiv.value.innerHTML);
                alert('Your task deleted sucessfully')
                // User clicked OK, perform the delete operation
                if(parentDiv.children.length===1){
                    
                    add.innerText='Add task'
                }
                else  {
                    add.innerText='Add new task'
                    
                }
                // Your code here
            } else {
                // alert('ypur file not deleted')
                event.preventDefault(); // Prevent form submission behavior
                console.log(inputDiv.value=input2)
                
                // User clicked Cancel or closed the dialog box
                // Your code here
            }
            
        })
        // Append the elements to the form
        // let input=document.getElementById(inputDiv)
        let input2 = prompt('Enter your task here')
        localStorage.setItem('task'+index,form.outerHTML)
        localStorage.setItem('input'+index,inputDiv.outerHTML)
        localStorage.setItem('delete'+index,deleteButton.outerHTML)
        localStorage.setItem('inputname'+index,input2)
        
        
        if(input2!==null){
            form.appendChild(inputDiv);
            form.appendChild(deleteButton);
            // localStorage.setItem('task', form);
            // localStorage.getItem('task');
            
            // console.log('task', input2);
            // Append the form to the parent div
            // localStorage.setItem('task' + index, form.innerHTML);
            parentDiv.appendChild(form);
            
            // parentDiv.removeChild(form)
            console.log(inputDiv.value=input2)
            index+=1
        }
        else if (input2==null&&parentDiv.children.length===1){
            // parentDiv.removeChild(form)
            add.innerText='Add task'
            
        }
        // addnewfile()
    });
    let clear=document.getElementById('clear')
    clear.addEventListener('click',()=>{
        location.reload();
    
        localStorage.clear()
            })
//     let fp = localStorage.getItem('task'+index)
//     parentDiv.innerText=fp
// // fp.innerText// Initialize variables
// let index = 0;// Initialize variables
// let index = 0;
add = document.getElementById('submit');
parentDiv = document.getElementById('container');

// Check if there are any stored tasks in localStorage
if (localStorage.length > 0) {
  let storedKeys = Object.keys(localStorage).filter((key) => key.startsWith('task'));
  
  // Sort the stored keys based on index
  storedKeys.sort((a, b) => {
    let indexA = parseInt(a.slice(4));
    let indexB = parseInt(b.slice(4));
    return indexA - indexB;
  });

  storedKeys.forEach((key) => {
    let formHTML = localStorage.getItem(key);
    let inputHTML = localStorage.getItem('input' + key.slice(4));
    let deleteHTML = localStorage.getItem('delete' + key.slice(4));
    let inputName = localStorage.getItem('inputname' + key.slice(4));

    // Recreate form elements based on stored data
    let form = document.createElement('form');
    form.id = key;
    form.style.display = 'flex';
    form.style.margin = '9px 0';
    form.style.borderRadius = '100px';
    form.style.marginLeft = '22px';
    form.innerHTML = formHTML;

    let inputDiv = document.createElement('input');
    inputDiv.id = 'input' + key.slice(4);
    inputDiv.type = 'text';
    inputDiv.style.border = 'none';
    inputDiv.style.boxShadow = '0 0 1px black';
    inputDiv.style.borderRadius = '5px';
    inputDiv.style.padding = '2px 9px';
    inputDiv.style.width = '80vw';
    inputDiv.style.display = 'flex';
    inputDiv.style.outline = 'none';
    inputDiv.style.background = 'white';
    inputDiv.style.height = '30px';
    inputDiv.value = inputName;

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('btn');
    deleteButton.type = 'reset';
    deleteButton.id = 'reset' + key.slice(4);
    deleteButton.textContent = 'Delete';
    deleteButton.style.boxShadow = '0 0 3px black';
    deleteButton.addEventListener('click', () => {
      // Delete task functionality
  
      let deleteFile = confirm("Are you sure you want to delete this task?");
      
      if (deleteFile) {
        parentDiv.removeChild(form)
        localStorage.removeItem(key);
        localStorage.removeItem('input' +key.slice(4));
        localStorage.removeItem('input' +console.log( key.slice(4)));
        localStorage.removeItem('delete' + key.slice(4));
        localStorage.removeItem('inputname' + key.slice(4));
        // localStorage.removeItem('task' + index, form.innerHTML);
        // localStorage.removeItem('input' + index, inputDiv.value.innerHTML);
        alert('Your task deleted sucessfully')
        // User clicked OK, perform the delete operation
        if(localStorage.length===0){
            
            add.innerText='Add task'
        }
        else  {
            add.innerText='Add new task'
            
        }
        // Your code here
    } else {
        // alert('ypur file not deleted')
        event.preventDefault(); // Prevent form submission behavior
        console.log(inputDiv.value=input2)
        
        // User clicked Cancel or closed the dialog box
        // Your code here
    }
    });

    // Append the recreated elements to the form
    form.appendChild(inputDiv);
    form.appendChild(deleteButton);

    // Append the form to the parent div
    parentDiv.appendChild(form);
  });
}

// Event listener for adding a new task
add.addEventListener('click', function() {
  // Event handling code...

    
  // Add new task functionality...
});
