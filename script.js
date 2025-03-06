const addTaskbtnTodo = document.getElementById('add-task-btn-todo');
const addTaskbtnProgeress = document.getElementById('add-task-btn-progress');
const addTaskbtnDone = document.getElementById('add-task-btn-done');
const todoboard = document.getElementById('todo-board');
const progressboard = document.getElementById('progress-board');
const doneboard = document.getElementById('done-board');
const allboards = document.querySelectorAll('.tasks');
const todoBoardItemCount = document.getElementById('todo-board-item-count');
const progressBoardItemCount = document.getElementById('progress-board-item-count');
const doneBoardItemCount = document.getElementById('done-board-item-count');

function createTaskElement(text) {
    const taskCard = document.createElement('p');
    taskCard.classList.add('task-item');
    taskCard.setAttribute('draggable', 'true');
    taskCard.innerText = text;

    taskCard.addEventListener('dragstart', () => {
        taskCard.classList.add('dragging');
    });

    taskCard.addEventListener('dragend', () => {
        taskCard.classList.remove('dragging');
    });

    return taskCard;
}


addTaskbtnTodo.addEventListener('click', () => {
    const todoInput = prompt('Enter the task you want to add');
    if (!todoInput) {
        return;
    }
    const taskCard = createTaskElement(todoInput);
    todoboard.appendChild(taskCard);

    todoBoardItemCount.innerText = todoboard.children.length;

});


addTaskbtnProgeress.addEventListener('click', () => {
    const progressInput = prompt('Enter the task you want to add');
    if (!progressInput) {
        return;
    }
    const taskCard = createTaskElement(progressInput);
    progressboard.appendChild(taskCard);

    progressBoardItemCount.innerText = progressboard.children.length;
});


addTaskbtnDone.addEventListener('click', () => {
    const doneInput = prompt('Enter the task you want to add');
    if (!doneInput) {
        return;
    }
    const taskCard = createTaskElement(doneInput);
    doneboard.appendChild(taskCard);
    doneBoardItemCount.innerText = doneboard.children.length;
});



allboards.forEach((boarditem) => {
    boarditem.addEventListener('dragover', (event) => {
        event.preventDefault();
        const currentDragging = document.querySelector('.dragging');
        if (currentDragging) {
            boarditem.appendChild(currentDragging);
        }
    });
});


