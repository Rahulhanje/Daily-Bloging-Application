# Full Stack Blog Application

## Project Overview

This project implements a full-stack blog application, leveraging a combination of frontend (React) and backend (Node.js with Prisma ORM) technologies. It provides users with the ability to create, read, update, and delete blog posts, offering a comprehensive platform for content creation and sharing.

## Features

* **Frontend (React):**
    * User-friendly interface for browsing and interacting with blog posts.
    * Responsive design adapting to different screen sizes.
    * Authentication system for user registration and login.
    * Features for creating, editing, and publishing blog posts.
* **Backend (Node.js with Prisma):**
    * REST API for managing blog posts and user data.
    * Secure authentication and authorization mechanisms.
    * Database persistence using Prisma ORM for data management.
    * Deployment using Cloudflare Workers for scalability and performance.

## Installation

### Prerequisites

* Node.js and npm (or yarn) installed on your system.

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rahulhanje/Daily-Bloging-Application.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd full-stack-blog
   ```

3. **Install frontend dependencies:**

   ```bash
   cd frontend
   npm install 
   ```

4. **Install backend dependencies:**

   ```bash
   cd ../backend
   npm install
   ```

5. **Install common dependencies:**

   ```bash
   cd ../common
   npm install
   ```

6. **Initialize Prisma:**

   ```bash
   cd ../backend
   npx prisma init
   ```

7. **Run Prisma migrations:**

   ```bash
   npx prisma migrate dev
   ```

## Usage

### Development Mode

1. **Start the frontend development server:**

   ```bash
   cd frontend
   npm run dev
   ```

2. **Start the backend development server:**

   ```bash
   cd ../backend
   npm run dev
   ```

### Production Mode

1. **Build the frontend application:**

   ```bash
   cd frontend
   npm run build
   ```

2. **Build the backend application:**

   ```bash
   cd ../backend
   npm run build
   ```

3. **Deploy to Cloudflare Workers:**

   ```bash
   cd ../backend
   npm run deploy
   ```

## Contact Information

For any questions or support requests, please contact the project maintainers.

Email: rahulhanje0.7@gmail.com
