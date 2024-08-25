Here’s a comprehensive `README.md` file for the frontend part of your project, including details for the login and registration routes:

---

# ZuAi Frontend

## Overview

ZuAi Frontend is the client-side application for interacting with the ZuAi backend service. It provides a user interface for managing blog posts, user authentication, and more. This application is built using React.

## Project Structure

```
c:/My Projects/ZuAi/zuaifrontend/
  ├─ node_modules/ (ignored)
  ├─ public/
  │  ├─ favicon.ico
  │  ├─ index.html
  │  ├─ logo192.png
  │  ├─ logo512.png
  │  ├─ manifest.json
  │  └─ robots.txt
  ├─ src/
  │  ├─ components/
  │  │  ├─ CreateBlog/
  │  │  │  ├─ index.css
  │  │  │  └─ index.js
  │  │  ├─ EditBlog/
  │  │  │  ├─ index.css
  │  │  │  └─ index.js
  │  │  ├─ Header/
  │  │  │  ├─ index.css
  │  │  │  └─ index.js
  │  │  ├─ Home/
  │  │  │  ├─ index.css
  │  │  │  └─ index.js
  │  │  ├─ LoginForm/
  │  │  │  ├─ index.css
  │  │  │  └─ index.js
  │  │  ├─ PostDetail/
  │  │  │  ├─ index.css
  │  │  │  └─ index.js
  │  │  ├─ ProtectedRoute/
  │  │  │  └─ index.js
  │  │  ├─ RegisterForm/
  │  │  │  ├─ index.css
  │  │  │  └─ index.js
  │  │  └─ SpecificPost/
  │  │     ├─ index.css
  │  │     └─ index.js
  │  ├─ App.css
  │  ├─ App.js
  │  ├─ App.test.js
  │  ├─ index.css
  │  ├─ index.js
  │  ├─ logo.svg
  │  ├─ reportWebVitals.js
  │  └─ setupTests.js
  ├─ .gitignore
  ├─ package-lock.json
  ├─ package.json
  └─ README.md
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd zuaifrontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   The frontend application will be available at `http://localhost:3000`.

## API Integration

The frontend interacts with the ZuAi backend API deployed at `https://zuaibackend-vtsf.onrender.com`.

### 1. User Authentication

#### Login

- **Endpoint:** `POST /blogs/login`
- **Request Body:**

   ```json
   {
       "username": "rohan",
       "password": "rohan@2001"
   }
   ```

- **Description:** Authenticates a user and returns a JWT token for subsequent requests.

#### Register

- **Endpoint:** `POST /blogs/register`
- **Request Body:**

   ```json
   {
       "username": "rohan",
       "password": "rohan@2001"
   }
   ```

- **Description:** Registers a new user in the system.

### 2. Blog Management

#### Create a Blog

- **Endpoint:** `POST /blogs/posts`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Request Body:**

   ```json
   {
     "title": "My First Updated Blog Post",
     "content": "This is the content of my first blog post."
   }
   ```

- **Description:** Allows an authenticated user to create a new blog post.

#### Edit a Blog

- **Endpoint:** `PUT /blogs/posts/:id`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Request Body:**

   ```json
   {
     "title": "Updated Blog Post Title",
     "content": "This is the updated content for the blog post."
   }
   ```

- **Description:** Allows an authenticated user to edit an existing blog post.

#### Delete a Blog

- **Endpoint:** `DELETE /blogs/posts/:id`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Description:** Allows an authenticated user to delete a specific blog post.

### 3. Viewing Blog Posts

#### Get All Posts

- **Endpoint:** `GET /blogs/posts`
- **Description:** Retrieves a list of all blog posts.

#### Get a Specific Post

- **Endpoint:** `GET /blogs/posts/:id`
- **Description:** Retrieves a specific blog post by its ID.

#### Get Posts Based on Logged-in User

- **Endpoint:** `GET /blogs/userposts`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Description:** Retrieves all blog posts created by the logged-in user.

## Testing

Run the tests using:

```bash
npm test
```

## License

This project is licensed under the MIT License.

---

Feel free to customize any sections as needed!
