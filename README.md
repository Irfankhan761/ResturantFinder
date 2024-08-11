# RestaurantFinder

**MERN stack 3 Days Task**

## Table of Contents
1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Backend Setup](#backend-setup)
   - [Database Setup](#database-setup)
   - [Server Setup](#server-setup)
4. [Frontend Setup](#frontend-setup)
   - [Installing Dependencies](#installing-dependencies)
   - [Running the Frontend](#running-the-frontend)
5. [Project Usage](#project-usage)
   - [User Authentication](#user-authentication)
   - [Restaurant Search Interface](#restaurant-search-interface)

---

## Project Overview
**RestaurantFinder** is a full-stack application that allows users to search for restaurants based on various attributes such as name, cuisine type, location, and rating. It also provides user authentication, enabling users to create an account and log in to access the restaurant search interface.

## Prerequisites
Before setting up the project, ensure that you have the following software installed:

- **Node.js** (v14 or higher)
- **MongoDB** (v6.8 or higher)
- **npm** (v6.14 or higher)
- **Git**

## Backend Setup

### Database Setup
1. **Create the Database**:
   - Go to [MongoDB.com](https://www.mongodb.com/).
   - Set the project name to **DineFinder**.
   - Create a cluster (e.g., **cluster0**).
   - Set up a user name and password.

2. **Database Connectivity**:
   Open your terminal and run the following commands inside the `Backend` directory:
   - npm init -y
   - npm install mongodb@6.8
   - npm install dotenv
   - Copy the connection string from your MongoDB database.(skip incase of running this project)
   - Update the placeholder username and password in the connection string.(Skip incase of running this project)
   - Paste the updated connection string in your main file (e.g., index.js) for database connectivity. (Skip incase of running this project)
   - Execute the server by run the below commond inside backed dir:
      - node index.js
## Frontend
### Frontend Setup
1. **Installing Dependencies**:
   - Open your terminal and navigate to the frontend directory:
   - cd myfrontend
   - npm install
2. **Running the Frontend**:
   - Start the frontend server:
   - npm start
## Project Usage
### User Authentication
1. Registration:
   - Navigate to the registration page from the homepage.
   - Fill in the required details (username, email, password).
   - Click on the "Register" button.
   - On successful registration, you will be redirected to the login page.
2. Login:
   - Navigate to the login page.
   - Enter your credentials (email and password).
   - Click on the "Login" button.
   - On successful login, you will be redirected to the homepage.
3. Restaurant Search Interface Search by Name:
   - Use the search bar to enter the restaurant name.
   - The results will display matching restaurants.
   - Filter by Attributes:
   - Use the filter options to narrow down the search results by cuisine type, location, and rating.
4. Pagination:
   - Use the pagination controls at the bottom of the search results to navigate through multiple pages.
