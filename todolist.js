
let index = localStorage.length
let add = document.getElementById('submit')
let parentDiv
let input2
let form
const currentDate = new Date();

// Get the current date
const date = currentDate.getDate();
// const currentDate = new Date();

// Get the current day in the format of "Mon", "Tue", "Wed", etc.
const day = currentDate.toLocaleString('en-US', { weekday: 'short' });

// Output the value

// Get the current day (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
// const day = currentDate.getDay();

// Get the current year
const year = currentDate.getFullYear();
console.log("Current Date:", date);
console.log("Current Day:", day);
console.log("Current Year:", year);

if (localStorage.length === 0) {



    add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add task`

}
else {
    add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add new task`

}


add.addEventListener("click", function () {
let task=document.getElementById('task')
task.style.opacity=1
task.style.zIndex='1000'
task.style.margin='auto'
task.style.height='80%'
task.style.left='15vw'
task.style.width='65vw'
    // localStorage.clear()
    event.preventDefault(); // Prevent form submission behavior
    let submit =document.getElementById('sbtn')
    
submit.addEventListener("click", function () {
    // let div=document.getElementById('task1')
    // parentDiv.innerHTML=`     <div class="btn" id="taskin">
                  
    // <h2 class="margin"  id="addtitle"></h2>
    // <p  class="margin" id="adddes"></p>
    
    
    // </div>`
// let addtitle=document.getElementById('addtitle')
// let adddes=document.getElementById('adddes')
    let title =document.getElementById('title')
    titleValue =title.value
    let desc=document.getElementById('description')
    descValue=desc.value 
      // Create the form element
    let form = document.createElement('div');
    form.id = 'list' + index;
    form.style.position='relative'
form.classList.add('ta')
    form.style.display = 'flex'
    form.style.flexDirection='column'
    form.style.background='white'
    // form.style.width='220px'
    form.style.height='240px'
    
    form.style.margin = '9px 0'
    // form.style.border='2px solid black'
    // form.style.borderRadius = '100px'
    // form.style.marginLeft = '22px'
    add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add new task`
    // Create the input div
    let inputDiv = document.createElement('h2');
    inputDiv.id = 'input' + index;
    // inputDiv.type = 
    inputDiv.style.position='relative'

    inputDiv.style.border = 'none'
    // inputDiv.style.boxShadow = ' 0 0 1px black'
    inputDiv.style.borderRadius = '5px'
    inputDiv.style.padding = '2px 4px'
    inputDiv.style.margin = '2px 10px'
    inputDiv.style.width = '80%'
    inputDiv.style.fontFamily = 'Ubuntu , sans-serif';
    inputDiv.style.display = 'flex'
    inputDiv.style.wordBreak='break-word'
    inputDiv.style.fontSize='1rem'

    inputDiv.style.outline = 'none'
    inputDiv.style.background = 'white'
    inputDiv.style.height = '30px'
    let inputDiv2 = document.createElement('p');
    inputDiv2.id = 'inputname' + index;
    // inputDiv.type = 

    inputDiv2.style.border = 'none'
    inputDiv2.style.position='relative'

    // inputDiv2.style.boxShadow = ' 0 0 1px black'
    inputDiv2.style.borderRadius = '5px'
    inputDiv2.style.padding = '2px 4px'
    inputDiv2.style.margin = '2px 10px'
    inputDiv2.style.width = '80%'
    inputDiv2.style.fontFamily = 'Ubuntu , sans-serif';
    inputDiv2.style.display = 'flex'
    inputDiv2.style.outline = 'none'
    inputDiv2.style.background = 'white'
    inputDiv2.style.wordBreak='break-word'
    inputDiv2.style.height = '200px'
    inputDiv2.style.fontSize='0.8rem'

    let deleteButton = document.createElement('div');
        deleteButton.classList.add('btn');
        // deleteButton.type = 'reset';
        deleteButton.id = 'reset' + index;
        deleteButton.textContent = '';
        deleteButton.innerHTML=` <img class="img3dot" src="1dot.png" alt="" width="20px" height="20px">`
deleteButton.style.top='-20px'
deleteButton.style.borderRadius= 'none'
deleteButton.style.right= '2%'
deleteButton.style.display='flex'
deleteButton.style.justifyContent='flex-end'

        // deleteButton.style.boxShadow = '0 0 3px black';
        deleteButton.style.height= '20px';
        deleteButton.style.width= '100%';
        deleteButton.style.position='relative'
    // let editButton = document.createElement('button');
    // editButton.classList.add('btn');
    // editButton.type = 'reset';
    // editButton.id = 'edit' + index;
    // editButton.textContent = 'Edit';
    // editButton.style.boxShadow = '0 0 3px black';
//     editButton.addEventListener('click', () => {

//         let task=document.getElementById('task')
//         task.style.opacity=1
//         task.style.zIndex='1000'
//         task.style.margin='auto'
//         task.style.height='80vh'
//         task.style.left='37vw'
//         task.style.width='400px'
//         let title =document.getElementById('title')
//   title.value=input2
//         let desc=document.getElementById('description')
// desc.value=descValue
// let submit =document.getElementById('sbtn')

// submit.addEventListener("click", function () {

//  localStorage.setItem('input' + index,input2);
// localStorage.setItem('inputname' +index,descValue);

// inputDiv.innerHTML=input2
// inputDiv2.innerHTML=descValue
// task.style.opacity=0
// task.style.zIndex='-1'
// task.style.margin='auto'
// task.style.height='240px'
// task.style.left='0'
// task.style.width='220px'
// title.value=""
// desc.value=""
// })

//     })
    deleteButton.addEventListener('click', () => {

      
//     let delButton =document.getElementById('delete')
// delButton.style.display='flex'
//     delButton.addEventListener('click', () => {
        // let deleteFile = confirm("Are you sure you want to delete this task?");

        // if (deleteFile) {
        //     parentDiv.removeChild(form)
        //     // localStorage.removeItem('task' + index, form.innerHTML);
        //     // localStorage.removeItem('input' + index, inputDiv.value.innerHTML);
        //     alert('Your task deleted sucessfully')
        //     // User clicked OK, perform the delete operation
        //     if (parentDiv.children.length === 1) {

        //         add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add task`

        //     }
        //     else {
        //         add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add new task`


        //     }
        //     // Your code here
        // } else {
        //     // alert('ypur file not deleted')
        //     event.preventDefault(); // Prevent form submission behavior
        //     console.log(inputDiv.value = input2)

        //     // User clicked Cancel or closed the dialog box
        //     // Your code here
        // }

    })  
      input2 = titleValue
    localStorage.setItem('list' + index, form.outerHTML)
    localStorage.setItem('input' + index, input2)
    localStorage.setItem('date' + index, date)
    localStorage.setItem('day' + index, day)
    localStorage.setItem('year' + index, year)
    localStorage.setItem('delete' + index, deleteButton.outerHTML)
    // localStorage.setItem('edit' + index, editButton.outerHTML)
    localStorage.setItem('inputname' + index, descValue)

    if (input2 !== null) {
        form.appendChild(inputDiv);
        form.appendChild(inputDiv2);
        form.appendChild(deleteButton);
        // form.appendChild(editButton);
        // localStorage.setItem('task', form);
        // localStorage.getItem('task');

        // console.log('task', input2);
        // Append the form to the parent div
        // localStorage.setItem('task' + index, form.innerHTML);
        parentDiv.appendChild(form);

        // parentDiv.removeChild(form)
        console.log(inputDiv.value = input2)
        index += 1
    }
    else if (input2 == null && parentDiv.children.length === 1) {
        // parentDiv.removeChild(form)
        add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add task`


    }
    // localStorage.setItem('task'+index,titleValue)
    // localStorage.setItem('des'+index,descValue)
    
    inputDiv.innerHTML=input2
    inputDiv2.innerHTML=descValue
    task.style.opacity=0
task.style.zIndex='-1'
task.style.margin='auto'
task.style.height='240px'
task.style.left='0'
task.style.width='220px'

setTimeout(()=>{

    location.reload();
},300)
})
    parentDiv = document.getElementById('container');
 
    // form.style.justifyContent='center'

  
    // Append the elements to the form
    // let input=document.getElementById(inputDiv)
 


    // addnewfile()
});
let clear = document.getElementById('clear')
clear.addEventListener('click', () => {
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
    let storedKeys = Object.keys(localStorage).filter((key) => key.startsWith('list'));

    // Sort the stored keys based on index
    storedKeys.sort((a, b) => {
        let indexA = parseInt(a.slice(4));
        let indexB = parseInt(b.slice(4));
        return indexA - indexB;
    });

    storedKeys.forEach((key) => {
        let formHTML = localStorage.getItem(key);
        let inputHTML = localStorage.getItem('input' + key.slice(4));
        let date = localStorage.getItem('date' + key.slice(4));
        let day = localStorage.getItem('day' + key.slice(4));
        let year = localStorage.getItem('year' + key.slice(4));
        let deleteHTML = localStorage.getItem('delete' + key.slice(4));
        let inputName = localStorage.getItem('inputname' + key.slice(4));

        // Recreate form elements based on stored data
        let form = document.createElement('div');
    form.id = key;
    form.style.position='relative'
    form.classList.add('ta')

    form.style.display = 'flex'
    form.style.flexDirection='column'
    form.style.background='white'
    // form.style.width='220px'
    form.style.height='240px'
    
    form.style.margin = '9px 4px'
    // form.innerHTML=formHTML
    // form.style.border='2px solid black'
    // form.style.borderRadius = '100px'
    // form.style.marginLeft = '22px'
    // add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add new task`
    // Create the input div
    let inputDiv = document.createElement('h2');
    inputDiv.id = 'input' + key.slice(4);
    // inputDiv.type = 
    inputDiv.style.position='relative'

    inputDiv.style.border = 'none'
    // inputDiv.style.boxShadow = ' 0 0 1px black'
    inputDiv.style.borderRadius = '5px'
    inputDiv.style.padding = '2px 4px'
    inputDiv.style.margin = '2px 10px'
    inputDiv.style.width = '80%'
    inputDiv.style.fontFamily = 'Ubuntu , sans-serif';
    inputDiv.style.display = 'flex'
    inputDiv.style.wordBreak='break-word'
    inputDiv.style.fontSize='1rem'

    inputDiv.style.outline = 'none'
    inputDiv.style.background = 'white'
    inputDiv.style.height = '30px'
    inputDiv.innerHTML=inputHTML
    let inputDiv2 = document.createElement('p');
    inputDiv2.id = 'inputname' + key.slice(4);
    // inputDiv.type = 

    inputDiv2.style.border = 'none'
    inputDiv2.style.position='relative'

    // inputDiv2.style.boxShadow = ' 0 0 1px black'
    inputDiv2.style.borderRadius = '5px'
    inputDiv2.style.padding = '2px 4px'
    inputDiv2.style.margin = '2px 10px'
    inputDiv2.style.width = '80%'
    inputDiv2.style.fontFamily = 'Ubuntu , sans-serif';
    inputDiv2.style.display = 'flex'
    inputDiv2.style.outline = 'none'
    inputDiv2.style.background = 'white'
    inputDiv2.style.wordBreak='break-word'
    inputDiv2.style.height = '200px'
    inputDiv2.style.fontSize='0.8rem'
    inputDiv2.innerHTML=inputName

        let deleteButton = document.createElement('div');
        deleteButton.classList.add('btn');
        // deleteButton.type = 'reset';
        deleteButton.id = 'reset' + key.slice(4);
        deleteButton.textContent = '';
        deleteButton.innerHTML=`<span class="span2">${date}/ ${day} /${year}</span><img class="img3dot" src="1dot.png" alt="" width="20px" height="20px">`
deleteButton.style.top='-20px'
deleteButton.style.borderRadius= 'none'
deleteButton.style.right= '2%'
deleteButton.style.display='flex'
deleteButton.style.justifyContent='flex-end'
        // deleteButton.style.boxShadow = '0 0 3px black';
        deleteButton.style.height= '20px';
        deleteButton.style.width= '100%';
        deleteButton.style.position='relative'
//         let editButton = document.createElement('button');
//         editButton.classList.add('btn');
//         editButton.type = 'reset';
//         editButton.id = 'edit' + key.slice(4);
//         editButton.textContent = 'Edit';
//         editButton.style.boxShadow = '0 0 3px black';
//         editButton.addEventListener('click', () => {

//             let task=document.getElementById('task')
//             task.style.opacity=1
//             task.style.zIndex='1000'
//             task.style.margin='auto'
//             task.style.height='80vh'
//             task.style.left='37vw'
//             task.style.width='400px'
//             let title =document.getElementById('title')
//       title.value=inputHTML
//             let desc=document.getElementById('description')
// desc.value=inputName
// let submit =document.getElementById('sbtn')
    
// submit.addEventListener("click", function () {
//     let title =document.getElementById('title')
//     titleValue =title.value
//     let desc=document.getElementById('description')
//     descValue=desc.value 
//      localStorage.setItem('input' + key.slice(4),titleValue);
//     localStorage.setItem('inputname' + key.slice(4),descValue);
//      inputHTML = localStorage.getItem('input' + key.slice(4));
//      inputName = localStorage.getItem('inputname' + key.slice(4));
//     inputDiv.innerHTML=inputHTML
//     inputDiv2.innerHTML=inputName
//     task.style.opacity=0
// task.style.zIndex='-1'
// task.style.margin='auto'
// task.style.height='240px'
// task.style.left='0'
// task.style.width='220px'
// title.value=""
// desc.value=""
// })

//         })
        // let delButton =document.getElementById('editbtn')
        deleteButton.addEventListener('click', () => {
            let buttonContainer = form.querySelector('.buttonContainer');
        
            if (!buttonContainer) {
                buttonContainer = document.createElement('div');
                buttonContainer.classList.add('buttonContainer');
                buttonContainer.style.display = 'flex';
                buttonContainer.style.flexDirection = 'column';
                buttonContainer.style.borderRadius = '3px';
                buttonContainer.style.top='-28px'
                buttonContainer.style.right='17px'
        buttonContainer.style.width= '100px';

                buttonContainer.style.border = '1px solid rgb(153, 153, 153)';
                buttonContainer.style.boxShadow='  0 0 3px black'
                buttonContainer.style.position = 'absolute';
        
                let editBtn = document.createElement('button');
                editBtn.classList.add('button');
                editBtn.classList.add('editbtn');
                editBtn.textContent = 'Edit';
        editBtn.style.cursor='pointer'
                let deleteBtn = document.createElement('button');
                deleteBtn.classList.add('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.style.cursor='pointer'
        
                buttonContainer.appendChild(editBtn);
                buttonContainer.appendChild(deleteBtn);
        
                deleteButton.appendChild(buttonContainer);
            } else {
                buttonContainer.parentNode.removeChild(buttonContainer);
                // buttonContainer.classList.toggle('hidden');
            }
        
            let editBtn = buttonContainer.querySelector('.editbtn');
            let deleteBtn = buttonContainer.querySelector('.button:not(.editbtn)');
        
            editBtn.addEventListener('click', () => {
                // Handle edit button click
                let task=document.getElementById('task')
                task.style.opacity=1
task.style.zIndex='1000'
task.style.margin='auto'
task.style.height='80%'
task.style.left='15vw'
task.style.width='65vw'
                let title =document.getElementById('title')
          title.value=inputHTML
                let desc=document.getElementById('description')
    desc.value=inputName
    let submit =document.getElementById('sbtn')
        
    submit.addEventListener("click", function () {
        let title =document.getElementById('title')
        titleValue =title.value
        let desc=document.getElementById('description')
        descValue=desc.value 
         localStorage.setItem('input' + key.slice(4),titleValue);
        localStorage.setItem('inputname' + key.slice(4),descValue);
         inputHTML = localStorage.getItem('input' + key.slice(4));
         inputName = localStorage.getItem('inputname' + key.slice(4));
        inputDiv.innerHTML=inputHTML
        inputDiv2.innerHTML=inputName
        task.style.opacity=0
    task.style.zIndex='-1'
    task.style.margin='auto'
    task.style.height='240px'
    task.style.left='0'
    task.style.width='220px'
   
    })
            });
        
            deleteBtn.addEventListener('click', () => {
                // Handle delete button click
          
     
        
            
            
            
            // delButton.style.display='flex'
            // delButton.addEventListener('click', () => {
                // Delete task functionality

            // let deleteFile = confirm("Are you sure you want to delete this task?");

            // if (deleteFile) {
                parentDiv.removeChild(form)
                localStorage.removeItem(key);
                localStorage.removeItem('input' + key.slice(4));
                localStorage.removeItem('delete' + key.slice(4));
                localStorage.removeItem('date' + key.slice(4));
                localStorage.removeItem('day' + key.slice(4));
                localStorage.removeItem('year' + key.slice(4));
                localStorage.removeItem('inputname' + key.slice(4));
                localStorage.removeItem('task' + index, form.innerHTML);
                // localStorage.removeItem('input' + index, inputDiv.value.innerHTML);
                // alert('Your task deleted sucessfully')
                // User clicked OK, perform the delete operation
                if (localStorage.length === 0) {

                    add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add task`

                }
                else {
                    add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add new task`


                }
                // Your code here
            // } else {
                // alert('ypur file not deleted')
                // event.preventDefault(); // Prevent form submission behavior
            // }
                // console.log(inputDiv.value = input2)

  });
            //     // User clicked Cancel or closed the dialog box
            //     // Your code here
            // }
        });

        // Append the recreated elements to the form
        parentDiv.appendChild(form);
        form.appendChild(inputDiv);
        form.appendChild(inputDiv2);
        form.appendChild(deleteButton);
        // form.appendChild(editButton);

        // Append the form to the parent div
    });
}

// Event listener for adding a new task
add.addEventListener('click', function () {
    // Event handling code...


    // Add new task functionality...
});
