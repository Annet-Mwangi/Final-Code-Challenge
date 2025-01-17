# Week-3-code-challenge-Flatdango.
# Flatdango Theater Application

 This web application allows users to browse movies, and purchase tickets if available. The application interacts with a API to fetch and update movie data.

## Features

1. Display All Movies;
 Shows a list of all available movies with their titles. Sold-out movies are visually indicated.

 2. Users can buy tickets for available movies directly through the interface. The number of available tickets updates dynamically after each purchase.

 ## Usage
- Upon loading, the first movie's details are displayed automatically.
- Click on a movie title in the menu to view its details in the main section.
- Purchase tickets by clicking "Buy Ticket". The available tickets update dynamically.


## Technologies Used

 API-Interacts with a backend server to fetch movie data (`GET` requests) and update ticket sales (`PATCH` requests).

 -*Javascript Details
The application uses JavaScript to interact with the JSON server and update the DOM dynamically. Key functions include:

- fetchAllMovies(): Fetches all movies from the server and -  populates the movie menu (#films) with clickable items.
- fetchMovie(id): Fetches details of a specific movie based on its ID and updates the movie details section (#movie-details).
- buyTicket(): Handles the purchase of tickets for a movie, updating the server with the new number of tickets sold and updating the UI accordingly.
- deleteFilm(id): Deletes a movie from both the server and the movie menu when the delete button is clicked.


## Getting Started

To run the Flatdango Theater application locally,Clone the Repository.
## AUTHORS
 Annet Stephens

 ### License
 Flatdango is licensed under the MIT license that can be found in the LICENSE file.# Final-Code-Challenge
#   F i n a l - C o d e - C h a l l e n g e  
 