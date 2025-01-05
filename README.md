# Assignment 2 - Web API.

Name: Simon Hickey
Demo: {LINK WILL GO HERE}

## Features.
 
 + Integrated movies-api from lab work.
 + Added login and sign-up pages.
 + Added protected routes to protect all routes except the home, sign-up, and login pages to restrict to logged-in users. 
 + Added Alert pop-up if sign-up is unsuccessful.
 + React app calls API endpoints for movies, this includes upcoming, now-playing, credits, and similar movies.
 + Added Now Playing page to display movies that are now playing in cinemas.
 + Added Similar Movies to display movies that are sort of the same in relation to the current movie in the movie details page.

## Setup requirements.

1. Clone the repo to your local machine.
2. Run `npm install` in both the movies-api and react-movies folders to install dependencies.
3. Ensure MongoDB is running locally or update connction string to a remote MongoDB server.
4. Create the .env file in the root of the movies-api folder.
5. Start the Movies-API server: `npm run dev`
6. Start the Movies App: `npm start`

## API Configuration

Inside of your created `.env` file put in the following content:
______________________
NODEENV=development
PORT=*8080*
HOST=*YOUR_HOST_CHOICE*
mongoDB=*YourMongoURL*
seedDb=true
TMDB_KEY=*YOUR_TMDB_KEY*
secret=*YourJWTSecret*
______________________

*REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated above.*

## API Design
Give an overview of your web API design, perhaps similar to the following: 

| Endpoint                      | HTTP Method | Description                                         | Parameterized? |
|-------------------------------|-------------|-----------------------------------------------------|----------------|
| /api/movies/tmdb/now-playing  | GET         | Fetches the list of now-playing movies.             | No             |
| /api/movies/tmdb/:id/similar  | GET         | Fetches similar movies for a given movie ID.        | Yes            |
| /api/movies/tmdb/:id/credits  | GET         | Fetches movie credits for a given movie ID.         | Yes            |
| /api/movies/tmdb/upcoming     | GET         | Fetches the list of upcoming movies.                | No             |
| /api/users                    | GET         | Fetches the list of current users registered.       | No             |
| /api/users?action=register    | POST        | Registers a new user.                               | No             |
| /api/users                    | POST        | Authenticates a user and returns a JWT.             | No             |

## Security and Authentication

1. Protected Routes:
    - All routes bar the Home, Login, and Sign-up pages are protected and require you to be logged in to gain access.
    - Any unauthorized requests to protected endpoints are redirected straigt to the `/login` page.
2. JWT Authentication: The API uses JSON Web Tokens (JWT) to secure endpoints.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One. 