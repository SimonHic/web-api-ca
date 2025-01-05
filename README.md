# Assignment 2 - Web API.

__Name:__ `Simon Hickey`

__Demo:__ [Demo-Video](https://www.youtube.com/watch?v=39CleLj3LKI)

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
3. Ensure MongoDB is running locally or update connection string to a remote MongoDB server.
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
    - Any unauthorized requests to protected endpoints are redirected straight to the `/login` page.
2. JWT Authentication: The API uses JSON Web Tokens (JWT) to secure endpoints.
3. Middleware: The backend uses middleware to verify tokens for access to any protected routes.

## Integrating with React App

### Overview

The React Movies App has been updated to connect with the Movies API for several features, replacing or extending functionality that was dependent on the TMDB in `CA-1`.

### Views using API

The following views now fetch data from the API instead of directly requesting a fetch to the TMDB API:

1. __Now Playing Movies:__
    - Data is fetched using the `/api/movies/tmdb/now-playing` endpoint.
    - It is displayed on the *Now Playing Movies Page*, which features a list of movies with add-to-watchlist functionality.
2. __Similar Movies:__
    - Data is fetched using the `/api/movies/tmdb/:id/similar` endpoint.
    - Displayed in the *Movie Details Page*, which shows similar movies based on the currently-selected movie's ID.
3. __Movie Credits:__
    - Data is fetched using the `/api/movies/tmdb/:id/credits` endpoint.
    - Displayed in the *Movie Details Page*, which shows a list of cast memebrs and their roles of a seclected movie's ID.
4. __Upcoming Movies:__
    - Data is fetched using the `/api/movies/tmdb/upcoming` endpoint.
    - Displayed in the *Upcoming Movies Page*, which features a list of movies that will be out soon, with add to watch-list functionality.

### Other Integration with the React Movies App

1. __Authentication Integration:__
    - Implemented a signup and login system from labs using the `/api/users` and `/api/users?action=register` endpoints.
    - JWT token authentication ensures secure access to the protected routes.

2. __Protected Routes:__
    - Introduced route-level protection, ensuring certain pages are only visible to logged-in users.
    - Users are redirected to the login page if they aren't authorized.

3. __UI Enhancements:__
    - Added navigation links to new pages in the site header.
    - Improved integration of new data in the *Movie Details Page.*

4. __Backend Integration:__
    - Any API calls for now-playing, similar movies, movie credits, and upcoming movies are now routed through `localhost:8080.`
    - API responses are handled using React Query for efficient data fetching and caching.
    - Users created using the `/api/users?action=register` (sign-up page) will have their credentials stored in the MongoDB database for later use.

## Additional Features

1. __New API Endpoints:__
    - /api/movies/tmdb/now-playing
    - /api/movies/tmdb/:id/similar

2. __Frontend Integrations:__
    - *Now Playing Movies:*fetch movies `now-playing` in cinemas .
    - *Similar Movies:*fetch movies `similar` to a movie given a specific movie ID.

3. __Protected Routes:__
    - Implemented route-level protection for all pages, bar the homepage, login page, and sign-up page.
    - If a user isn't logged in: All access attempts will redirect to the login page.

4. __Navigation Updates:__
    - Added new navigation links for Now Playing Movies to site header.

5. __General Enhancements:__
    - Redesigned movie credits and similar movies in movie details page with a clear and structured layout.