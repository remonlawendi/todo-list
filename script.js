
window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form')
  const input = document.querySelector('#new-task-input')
  const list_el = document.querySelector('#tasks')


  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const task = input.value
    if (!task) {
      alert('Please add Task First')
      return;
    }

    //Create The Task Div That Contain whole Task
    const task_content = document.createElement('div')
    task_content.setAttribute('class', 'task')

    // Append The Task content inside task list

    console.log(task_content)



    // create the element for the content 
    const content = document.createElement('div')
    content.setAttribute('class', 'content')

    // append the chiled into Task Content 



    console.log(list_el)
    const task_input = document.createElement('input')
    task_input.setAttribute('class', 'text')
    task_input.setAttribute('readonly', 'readonly ')
    task_input.setAttribute('value', task)



    const btn_action = document.createElement('div')
    btn_action.setAttribute('class', 'actions')

    const edit_btn = document.createElement('button')
    edit_btn.setAttribute('class', 'edit')
    edit_btn.setAttribute('value', 'Edit')
    edit_btn.innerText = 'edit'

    const del_btn = document.createElement('button')
    del_btn.setAttribute('class', 'delete')
    del_btn.setAttribute('value', 'delete')
    del_btn.innerText = "delete"

    content.appendChild(task_input)
    content.appendChild(btn_action)
    btn_action.appendChild(edit_btn)
    btn_action.appendChild(del_btn)
    task_content.appendChild(content)
    list_el.appendChild(task_content)

    del_btn.addEventListener('click', () => {
      tasks.removeChild(task_content)
    })
    edit_btn.addEventListener('click', () => {
      if (edit_btn.innerText.toLowerCase() == "edit") {
        task_input.removeAttribute('readonly')
        task_input.focus()
        edit_btn.innerText = "save"
      }
      else {
        task_input.setAttribute('readonly', 'readonly')
        edit_btn.innerText = 'Edit'
      }
    })
  })
})