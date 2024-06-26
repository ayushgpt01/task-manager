# Task Management Application

## Description

Build a task management application where users can create, update, delete, and prioritize tasks. The application will have user authentication, allowing users to register, login, and manage their tasks.

## Technologies

- **Backend:** Laravel (PHP)
- **Frontend:** React with TypeScript
- **Database:** MySQL or PostgreSQL (Laravel's Eloquent ORM for database interactions)
- **State Management:** Redux (for frontend state management)
- **Authentication:** Laravel Passport (for API authentication)

## Features

1. **User Authentication:** Implement user authentication using Laravel Passport. Users should be able to register, login, logout, and update their profile.
2. **Task Management:** Users can create, read, update, and delete tasks. Tasks should have properties like title, description, priority, status, due date, etc.
3. **Task Filtering and Sorting:** Implement filtering and sorting options for tasks, such as filtering by status (e.g., pending, completed) and sorting by priority or due date.
4. **Task Assignment:** Allow users to assign tasks to themselves or other users.
5. **Real-time Updates:** Implement real-time updates using WebSockets or a library like Pusher, so users can see changes to tasks in real-time without refreshing the page.
6. **Responsive UI:** Design a responsive UI using React and CSS frameworks like Bootstrap or Tailwind CSS to ensure the application works well on different devices and screen sizes.

## Learning Objectives

- **Laravel Basics:** Learn the fundamentals of Laravel, including routing, controllers, models, migrations, and relationships.
- **RESTful API Development:** Develop a RESTful API with Laravel for CRUD operations on tasks.
- **Authentication and Authorization:** Understand how to implement user authentication and authorization using Laravel Passport.
- **Database Interactions:** Learn how to use Laravel's Eloquent ORM for interacting with the database, including querying, creating, updating, and deleting records.
- **Frontend Integration:** Integrate the React frontend with the Laravel backend using Axios or Fetch API to consume the API endpoints.
- **TypeScript Usage:** Utilize TypeScript for type-checking and improving code quality in the frontend React application.
