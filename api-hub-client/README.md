<h1 align="center">api-hub-client</h1>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"/>
  <img src="https://img.shields.io/badge/npm-v1.0.0-blue.svg" alt="npm version"/>
  <img src="https://img.shields.io/badge/build-passing-brightgreen.svg" alt="build status"/>
  <img src="https://img.shields.io/badge/coverage-95%25-yellow.svg" alt="coverage"/>
  
</p>

<p align="center">
  A TypeScript client library for consuming the API Hub backend with full type support.
</p>

<p align="center">
  <em>Companion package to <strong>api-hub</strong> in the monorepo</em>
</p>

---

## Overview

`api-hub-client` provides a **developer-friendly TypeScript interface** to interact with the `api-hub` server.  
It simplifies API calls by handling requests, responses, and type definitions automatically, enabling **type-safe and maintainable integration** in frontend or Node.js applications.

---

## Features

- Fully typed TypeScript API for IntelliSense and compile-time safety  
- Async/await interface for all requests  
- Supports all endpoints exposed by the `api-hub` server  
- Easy configuration with `baseUrl`  
- Handles errors and responses consistently

---

## Supported API Endpoints 

| Module      | Endpoint | Description | Example Method |
|------------|----------|------------|----------------|
| [GitHub](../api-hub/src/routes/github.ts) | `/github/repos/:username` | Fetch GitHub repositories for a given username | `client.github.getRepos(username)` |
| [YouTube](../api-hub/src/routes/youtube.ts) | `/youtube/search/:query` | Search YouTube videos by query | `client.youtube.search(query)` |
| [TheMealDB](../api-hub/src/routes/mealdb.ts) | `/mealdb/search/:query` | Search for meals and recipes | `client.mealdb.search(query)` |
| [NewsAPI](../api-hub/src/routes/newsapi.ts) | `/newsapi/top-headlines` | Fetch latest news articles | `client.newsapi.topHeadlines(country)` |
| [Weather](../api-hub/src/routes/weather.ts) | `/weather/current/:city` | Get current weather info for a city | `client.weather.getCurrent(city)` |

> Click the module name to view the corresponding backend route implementation.

---

## Project Structure

```text
api-hub-client/
├── src/
│   ├── index.ts         # Entry point exporting ApiHubClient class
│   ├── client.ts        # HTTP client implementation
│   └── types/           # TypeScript types for requests and responses
├── package.json
├── tsconfig.json
├── README.md
└── .env.example
````

---

## Prerequisites

* Node.js **v18 or later**
* npm, yarn, or pnpm
* Access to a running `api-hub` server

---

## Installation

Install the package in your project:

```bash
npm install api-hub-client
# or
yarn add api-hub-client
```

---

## Configuration

Create an instance of the client with your API Hub server base URL:

```ts
import { ApiHubClient } from "api-hub-client";

const client = new ApiHubClient({
  baseUrl: "http://localhost:8080",
});
```

---

## Usage Examples

### Fetch GitHub Repositories

```ts
const repos = await client.github.getRepos("facebook");
console.log(repos);
```

### Search TheMealDB

```ts
const recipes = await client.mealdb.search("carbonara");
console.log(recipes);
```

### Search YouTube

```ts
const videos = await client.youtube.search("nextjs tutorial");
console.log(videos);
```

---

## TypeScript Support

Provides types for:

* Request parameters
* API responses
* Error handling
* Optional pagination helpers

This ensures **full IntelliSense and compile-time safety**.

---

## Development

```bash
cd api-hub-client
npm install
npm run build
```

Link the client locally for testing:

```bash
npm link
```

> Ensure the `api-hub` server is running for real-time testing.

---

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start development with watch mode |
| `npm run build` | Compile TypeScript to JavaScript  |
| `npm test`      | Run unit tests (if available)     |

---

## Contributing

This package follows the monorepo contribution guidelines.

Please review [`CONTRIBUTING.md`](../CONTRIBUTING.md) before submitting a pull request.

---

## License

MIT


