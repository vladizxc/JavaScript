const onTodoItemClick = (todoItemElement) => {
    todoItemElement.classList.add('is-completed')
}

document.addEventListener((event) => {

    const todoItemElement = event.target.closest('todo__item')

    if(todoItemElement) {
        onTodoItemClick(todoItemElement)
    }
})

const addTodoItem = () => {
    const todoListElement = document.querySelector('.todo_list')
    const newTodoItemMarkup = '<li class="todo__item"><span>Todo item...</span></li>'
}

const linkElement = document.querySelector("a")
const formElement = document.querySelector("form")

linkElement.addEventListener("click", (event) => {
    event.preventDefault()
})

formElement.addEventListener("submit", (event) => {
    event.preventDefault()
})



