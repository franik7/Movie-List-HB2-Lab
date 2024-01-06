console.log('hello world');
const form = document.querySelector('form');
const message = document.querySelector('#message');

function addMovie(event) {
    event.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    document.querySelector('ul').appendChild(movie);
    movieTitle.addEventListener('click', crossOffMovie);
    inputField.value = "";
    movie.appendChild(deleteBtn);
}

function deleteMovie (event) {
    event.target.parentNode.remove();
    message.textContent = "Movie Deleted!";
}

function crossOffMovie (event) {
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked')) {
        message.textContent = "Movie Watched";
    } else {
        message.textContent = "Movie Added Back";
    }
}

form.addEventListener('submit', addMovie);