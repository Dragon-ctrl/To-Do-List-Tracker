// Toggle between dark and light mode
const toggleDarkModeBtn = document.querySelector('.toggle-dark-mode-btn');

toggleDarkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Create a new list
const createListForm = document.querySelector('.list-container form');

createListForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the list name and deadline
    const listName = createListForm.querySelector('input[type="text"]').value;
    const listDeadline = createListForm.querySelector('input[type="date"]').value;

    // Create the list
    const list = document.createElement('ul');
    list.classList.add('list');

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    // Create an input with a checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    // Create a span for the list item name
    const listItemName = document.createElement('span');
    listItemName.classList.add('list-item-name');
    listItemName.textContent = listName;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';

    // Add event listener for delete button
    deleteBtn.addEventListener('click', function (e) {
        e.preventDefault();
        list.remove();
    });

    // Append elements
    listItem.appendChild(checkbox);
    listItem.appendChild(listItemName);
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);

    // Add the list to the DOM
    const listContainer = document.querySelector('.list-container');
    listContainer.appendChild(list);

    // Reset the form
    createListForm.reset();
});

// Add a new task
const addTaskForm = document.querySelector('.add-task-form');

addTaskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the task name
    const taskName = addTaskForm.querySelector('input[type="text"]').value;

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    // Create an input with a checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    // Create a span for the list item name
    const listItemName = document.createElement('span');
    listItemName.classList.add('list-item-name');
    listItemName.textContent = taskName;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';

    // Add event listener for delete button
    deleteBtn.addEventListener('click', function (e) {
        e.preventDefault();
        listItem.remove();
    });

    // Append elements
    listItem.appendChild(checkbox);
    listItem.appendChild(listItemName);
    listItem.appendChild(deleteBtn);

    // Add the list item to the list
    const list = document.querySelector('.list');
    list.appendChild(listItem);

    // Reset the form
    addTaskForm.reset();
});