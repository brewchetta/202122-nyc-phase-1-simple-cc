const container = document.querySelector('#task-container')

const taskDisplay = document.querySelector('#task-display')
const h2 = document.querySelector('#task-display-name')
const h3 = document.querySelector('#task-display-due-date')

const newTaskForm = document.querySelector('#new-task-form')

function insertTask(task) {
    const li = document.createElement('li')
    li.textContent = task.name
    li.addEventListener('mouseover', () => {
        h2.textContent = task.name
        h3.textContent = task['due-date']
    })
    container.append(li)
}

newTaskForm.addEventListener('submit', event => {
    event.preventDefault()
    const newTaskName = document.querySelector('#new-task-input').value
    const newTaskDueDate = document.querySelector('#new-due-date-input').value

    const newTaskObj = {
        name: newTaskName,
        "due-date": newTaskDueDate
    }

    insertTask(newTaskObj)
    newTaskForm.reset()
})

fetch('http://localhost:3000/tasks')
.then(res => res.json())
.then(dataArray => dataArray.forEach(task => insertTask(task)))