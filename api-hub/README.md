
<h1 align="center">api-hub</h1>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"/>
  <img src="https://img.shields.io/badge/npm-v1.0.0-blue.svg" alt="npm version"/>
  <img src="https://img.shields.io/badge/build-passing-brightgreen.svg" alt="build status"/>
  <img src="https://img.shields.io/badge/coverage-95%25-yellow.svg" alt="coverage"/>
  
</p>

<p align="center">
  A unified backend service that provides a single, consistent gateway to multiple public APIs.
</p>

<p align="center">
  <em>Part of the <strong>api-hub-repo</strong> monorepo</em>
</p>

---

## Overview

`api-hub` is the **server-side package** of the API Hub project.  
It exposes a centralized REST API that aggregates and normalizes responses from various third-party public APIs, allowing client applications to interact with them through a single interface.

This package is responsible for request routing, configuration management, and external API integrations.

---

## Responsibilities

This package handles:

- HTTP server initialization
- Routing and versioned endpoints
- Integration with external public APIs
- Environment-based configuration
- Request validation and error handling
- Cross-origin request support (CORS)

---

## Project Structure

```text
api-hub/
├── src/
│   ├── routes/           # API route definitions per service
│   ├── createApiHub.ts   # Route registration and app setup
│   └── index.ts          # Application entry point
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
````

---

## Prerequisites

* Node.js **v18 or later**
* npm, yarn, or pnpm
* API keys for services that require authentication

---

## Installation

From the monorepo root:

```bash
cd api-hub
npm install
```

---

## Configuration

Create a `.env` file by copying the example configuration:

```bash
cp .env.example .env
```

Provide the required environment variables:

```env
PORT=8080

YOUTUBE_API_KEY=your_youtube_api_key
NEWS_API_KEY=your_news_api_key
NY_TIMES_API_KEY=your_ny_times_api_key
WEATHER_API_KEY=your_weather_api_key
```

✅ Environment variables match the actual routes used in the server.

---

## Scripts

| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start the development server (hot reload) |
| `npm run build` | Build the project for production          |
| `npm start`     | Run the production server                 |

---

## Server Access

By default, the server runs on:

```
http://localhost:8080
```

You can change the port using the `PORT` environment variable.

---

## Example Endpoints

| Module    | Endpoint                  | Description               | Link                             |
| --------- | ------------------------- | ------------------------- | -------------------------------- |
| GitHub    | `/github/repos/:username` | Fetch GitHub repositories | [Route](./src/routes/github.ts)  |
| YouTube   | `/youtube/search/:query`  | Search YouTube videos     | [Route](./src/routes/youtube.ts) |
| TheMealDB | `/mealdb/search/:query`   | Search meals & recipes    | [Route](./src/routes/mealdb.ts)  |
| NewsAPI   | `/newsapi/top-headlines`  | Fetch news articles       | [Route](./src/routes/newsapi.ts) |
| Weather   | `/weather/current/:city`  | Get current weather info  | [Route](./src/routes/weather.ts) |

> Click "Route" to view the corresponding backend implementation.

---

## Adding a New API Integration

To add a new API source:

1. Create a new route file inside `src/routes/`
2. Define endpoints using the Hono router
3. Register the route in `createApiHub.ts`
4. Add required environment variables to `.env.example`
5. Document the endpoint behavior

---

## Contributing

This package follows the monorepo contribution guidelines.

Please review [`CONTRIBUTING.md`](../CONTRIBUTING.md) before submitting a pull request.

---

## License

MIT
