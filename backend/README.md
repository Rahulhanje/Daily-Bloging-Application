# Backend

## Project Overview

This project provides a backend API using Cloudflare Workers. It leverages Prisma for database interactions and provides endpoints for various functionalities, including:

* Blog Management
* User Management

## Features

* **Prisma:** Database interaction using Prisma ORM.
* **Cloudflare Workers:** API endpoints hosted on Cloudflare Workers.
* **Blog Management:** CRUD operations for blog posts.
* **User Management:** User authentication and management.

## Installation

1. **Prerequisites:** Ensure you have Node.js and npm installed.

2. **Dependencies:** Install project dependencies using npm:
   ```bash
   npm install
   ```

3. **Database:**
   * Create a new Prisma database by running:
     ```bash
     npx prisma init
     ```
   * Configure the database connection details in `prisma/schema.prisma`.

4. **Cloudflare:**
   * Create a new Cloudflare Workers project.
   * Upload the `wrangler.toml` file to the project.

## Usage

1. **Run the development server:**
   ```bash
   npm run dev
   ```

2. **Deploy to Cloudflare Workers:**
   ```bash
   wrangler publish
   ```
