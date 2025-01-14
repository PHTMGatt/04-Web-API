// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

function toggleMode() {
  const body = document.body;
  ;

  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    
    localStorage.setItem('mode', 'light');
  } else {
    body.classList.add('dark');
    
    localStorage.setItem('mode', 'dark');
  }
}



document.querySelector('#toggle').addEventListener('click', toggleMode);

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

const readLocalStorage = function () {
  const data = JSON.parse(localStorage.getItem('blogData'));
  return data ? data : [];
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

const storeLocalStorage = function (data) {
  const blogData = readLocalStorage();
    blogData.push(data);
  localStorage.setItem('blogData', JSON.stringify(blogData));
};

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};