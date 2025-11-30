# Simple URL Shortener API

A lightweight and efficient URL shortening service built with **Node.js**, **Express**, and **PostgreSQL**. This project follows the **MVC architecture** and provides a clean API for generating short links.

## Features

- **Shorten URL:** Accepts a long URL and returns a short code (e.g., `AbC12`).
- **Redirection:** Redirects visitors to the original URL when accessing the short link.
- **Click Tracking:** Counts how many times a link has been visited (visible in database/API).
- **Web Interface:** Includes a simple HTML frontend to generate links easily.

## Tech Stack

- **Node.js** & **Express.js**
- **PostgreSQL** & **Prisma ORM**
- **nanoid** (for ID generation)
- **HTML/CSS** (Basic Frontend)

## Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SabinaNorbekova/CodeAlpha_URLShortener
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Database Setup:**
   - Create a `.env` file.
   - Add your database connection string:
     ```env
     DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/url_shortener_db?schema=public"
     ```

4. **Run Migrations:**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to see the interface.

## API Endpoints

- **POST** `/shorten`
  - Body: `{ "originalUrl": "https://example.com" }`
  - Response: `{ "shortUrl": "http://localhost:3000/xYz12", ... }`

- **GET** `/:code`
  - Redirects to the original URL.

- **GET** `/stats/:code`
  - Returns statistics (clicks, created date) for the link.

---

**Author:** Sabina Norbekova
**Internship:** CodeAlpha
