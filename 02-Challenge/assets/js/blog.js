// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const main = document.querySelector('main');
const backButton = document.querySelector('#back');

// TODO: Create a function that builds an element and appends it to the DOM

const parentEl = function () {
    return document.querySelector();
    };

const buildElement = function (element, text, parentEl) {
    console.log(parentEl); //testing
    const el = document.createElement(element);
    el.textContent = text;
    parentEl.appendChild(el);
    };

// TODO: Create a function that handles the case where there are no blog posts to display

const noPosts = function () {
    buildElement('h3', 'No posts to display', 'no-posts');
    };

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

const renderBlogList = function () {
    const blogData = readLocalStorage();
    if (!blogData.length) {
        noPosts();
        return;
    }

    blogData.forEach((post) => {
        const article = document.createElement('article');
        buildElement('h2', post.title, article);
        buildElement('blockquote', post.content, article);
        buildElement('p', post.userName, article);
        main.appendChild(article);
    });
    };

// TODO: Call the `renderBlogList` function

renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

backButton.addEventListener('click', function () {
    redirectPage('index.html');
    });