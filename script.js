const addTaskBtnTodo = document.getElementById("add-task-btn-todo");
const addTaskBtnProgress = document.getElementById("add-task-btn-progress");
const addTaskBtnDone = document.getElementById("add-task-btn-done");
const todoBoard = document.getElementById("todo-board");
const progressBoard = document.getElementById("progress-board");
const doneBoard = document.getElementById("done-board");
const allBoards = document.querySelectorAll(".tasks");
const todoBoardItemCount = document.getElementById("todo-board-item-count");
const progressBoardItemCount = document.getElementById(
  "progress-board-item-count"
);
const doneBoardItemCount = document.getElementById("done-board-item-count");

function createTaskElement(text) {
  const taskCard = document.createElement("p");
  taskCard.classList.add("task-item");
  taskCard.setAttribute("draggable", "true");
  taskCard.innerText = text;

  taskCard.addEventListener("dragstart", () => {
    taskCard.classList.add("dragging");
  });

  taskCard.addEventListener("dragend", () => {
    taskCard.classList.remove("dragging");
  });

  return taskCard;
}

addTaskBtnTodo.addEventListener("click", () => {
  const todoInput = prompt("Enter the task you want to add");
  if (!todoInput) {
    return;
  }
  const taskCard = createTaskElement(todoInput);
  todoBoard.appendChild(taskCard);

  todoBoardItemCount.innerText = todoBoard.children.length;
});

addTaskBtnProgress.addEventListener("click", () => {
  const progressInput = prompt("Enter the task you want to add");
  if (!progressInput) {
    return;
  }
  const taskCard = createTaskElement(progressInput);
  progressBoard.appendChild(taskCard);

  progressBoardItemCount.innerText = progressBoard.children.length;
});

addTaskBtnDone.addEventListener("click", () => {
  const doneInput = prompt("Enter the task you want to add");
  if (!doneInput) {
    return;
  }
  const taskCard = createTaskElement(doneInput);
  doneBoard.appendChild(taskCard);
  doneBoardItemCount.innerText = doneBoard.children.length;
});

allBoards.forEach((boardItem) => {
  boardItem.addEventListener("dragover", (event) => {
    event.preventDefault();
    const currentDragging = document.querySelector(".dragging");
    if (currentDragging) {
      boardItem.appendChild(currentDragging);
    }
  });
});
