const heading = document.getElementById('main-heading'); 
const changeTextBtn = document.querySelector('#change-text-btn');
const addItemBtn = document.querySelector('#add-item-btn');
const itemList = document.querySelector('#item-list');
const form = document.querySelector('#myForm');
const formResponse = document.querySelector('#form-response');

changeTextBtn.addEventListener('click', () => {
    heading.textContent = 'You just changed the text!';
    heading.classList.add('highlight');
});

addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'New List Item';
    itemList.appendChild(newItem);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.username.value === '') {
        alert('Please enter a username!');
    } else {
        formResponse.style.display = 'block';
        formResponse.textContent = 'Submitted! Username: ' + form.username.value;
        form.reset();
    }
});
