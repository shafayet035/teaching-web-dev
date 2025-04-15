let todoInput = document.querySelector('#todoInput');
let todoAddBtn = document.querySelector('#todoAddBtn');
let todoList = document.querySelector('#todoList');

// A Function to create a list item
function createTodoList(text) {
    // create li element
    let li = document.createElement('li');
    li.className = 'todo-item';

    // create checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-check';
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed');
    })

    // create span
    let textSpan = document.createElement('span');
    textSpan.className = 'todo-text';
    textSpan.textContent = text;
    textSpan.addEventListener('dblclick', function() {
        let currentText = textSpan.textContent;
        let ipt = document.createElement('input');
        ipt.type = 'text';
        ipt.value = currentText;
        ipt.style.width = '100%';

        textSpan.textContent = '';
        textSpan.appendChild(ipt);
        ipt.focus();

        ipt.addEventListener('blur',finishEditing);
        ipt.addEventListener('keyup', function(e) {
            if(e.key == 'Enter') {
                finishEditing();
            }
        })

        function finishEditing() {
            let newText = ipt.value;
            textSpan.textContent = newText;
        }
    })

    // create button
    let delBtn = document.createElement('button');
    delBtn.className = 'todo-del-btn';
    delBtn.textContent = 'delete';
    delBtn.addEventListener('click', function() {
        li.remove();
    })

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(delBtn);

    return li;
}

// A Function to add todo to List
function addTodo() {
    let inputValue = todoInput.value;
    if (!inputValue) return;

   let li = createTodoList(inputValue);
   todoList.appendChild(li);
   todoInput.value = '';
}

todoAddBtn.addEventListener('click', addTodo);
