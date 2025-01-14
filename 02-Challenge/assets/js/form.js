// TODO: Create a variable that selects the form element

const form = document.querySelector('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

const handleFormSubmit = function (event) {
    console.log('form submitted');
    event.preventDefault();
    
    const userName = document.querySelector('#username').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const pTag = document.querySelector('p');

    if (title === '' || content === '') {
        pTag.textContent = 'Please complete the form.';
        return;
    }
    
    
    storeLocalStorage({ userName, title, content });
    
    redirectPage('blog.html');
    };

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

form.addEventListener('submit', handleFormSubmit);