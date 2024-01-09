console.log("Hello")

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
    message.textContent = `${event.target.parentNode.firstChild.textContent} Deleted`;
    revealMessage();
    console.log(event.target.parentNode);
}

function crossOffMovie (event) {
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} Watched`;
    } else {
        message.textContent = `${event.target.textContent} Added Back`;
    }
    revealMessage();
}

function revealMessage () {
    message.classList.remove('hide');
    setTimeout(() => {
        message.classList.add('hide');
    }, 2000);
}

document.querySelector("form").addEventListener('submit', addMovie)
