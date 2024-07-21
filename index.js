const BASE_URL = 'http://localhost:3000/films';

document.addEventListener('DOMContentLoaded', () => {
    fetchAllMovies();
});

function fetchAllMovies() {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(movies => {
            movies.forEach(movie => {
                const li = document.createElement('li');
                li.textContent = movie.title;
                li.classList.add('film', 'item');
                li.addEventListener('click', () => fetchMovie(movie.id));
                if (movie.capacity <= movie.tickets_sold) {
                    li.classList.add('sold-out');
                }
                document.getElementById('films').appendChild(li);
            });

            if (movies.length > 0) {
                fetchMovie(movies[0].id);
            }
        })
        .catch(error => console.error('Error:', error));
}

function fetchMovie(id) {
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(movie => {
            document.getElementById('poster').src = movie.poster;
            document.getElementById('title').textContent = movie.title;
            document.getElementById('runtime').textContent = `${movie.runtime} minutes`;
            document.getElementById('showtime').textContent = movie.showtime;
            document.getElementById('film-info').textContent = movie.description;
            updateAvailableTickets(movie);
            document.getElementById('buy-ticket').setAttribute('data-id', movie.id);
        })
        .catch(error => console.error('Error:', error));
}

function updateAvailableTickets(movie) {
    const availableTickets = movie.capacity - movie.tickets_sold;
    document.getElementById('ticket-num').textContent = `${availableTickets} remaining tickets`;

    if (availableTickets === 0) {
        document.getElementById('buy-ticket').disabled = true;
        document.getElementById('buy-ticket').textContent = 'Sold Out';
    } else {
        document.getElementById('buy-ticket').disabled = false;
        document.getElementById('buy-ticket').textContent = 'Buy Ticket';
    }
}

document.getElementById('buy-ticket').addEventListener('click', buyTicket);

function buyTicket() {
    const movieId = document.getElementById('buy-ticket').getAttribute('data-id');

    if (movieId) {
        fetch(`${BASE_URL}/${movieId}`)
            .then(response => response.json())
            .then(movie => {
                if (movie.tickets_sold < movie.capacity) {
                    const updatedTicketsSold = movie.tickets_sold + 1;

                    fetch(`${BASE_URL}/${movieId}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ tickets_sold: updatedTicketsSold })
                    })
                    .then(response => response.json())
                    .then(updatedMovie => {
                        updateAvailableTickets(updatedMovie);
                        alert('Ticket purchased successfully!');
                    })
                    .catch(error => console.error('Error:', error));
                } else {
                    alert('Sorry, this movie is sold out.');
                }
            })
            .catch(error => console.error('Error:', error));
    }
}

function runMovie(movie) {
    console.log(`Running movie: ${movie.title}`);

    const titleElement = document.getElementById('title');
    const originalTitle = titleElement.textContent;
    titleElement.textContent = `Now Playing: ${movie.title}`;
    titleElement.style.color = 'red';

    setTimeout(() => {
        console.log(`Movie "${movie.title}" has finished running.`);
        titleElement.textContent = originalTitle;
        titleElement.style.color = 'black';
    }, 5000);
}
