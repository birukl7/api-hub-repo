<div align="center">

<div style="display: flex; align-items: center; justify-content: center; gap: 20px;">
  <div style="background: white; padding: 8px; border-radius: 8px; display: inline-block; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <img src="api-hub-logo.png" alt="API Hub Logo" style="height: 60px; width: auto; display: block;">
  </div>
  <div>
    <h1 style="margin: 0;">API Hub</h1>
    <p style="margin: 0;"><strong>Your Central Gateway to the Web's Best Public APIs.</strong></p>
  </div>
</div>

</div>

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-black?logo=nodedotjs)](https://nodejs.org/)
[![Hono](https://img.shields.io/badge/Powered%20by-Hono-orange)](https://hono.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

</div>

---

**API Hub** is a powerful, open-source aggregator designed to simplify interactions with multiple public APIs. It acts as a unified server interface, allowing you to fetch data from diverse sources like GitHub, YouTube, TheMealDB, and many more, all through a single, consistent entry point.

Say goodbye to managing dozens of API keys, endpoints, and response formats. With API Hub, you get one streamlined workflow, backed by a lightweight server and a type-safe client library.

- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Supported APIs](#supported-apis)
- [Contributing](#contributing)
- [License](#license)

## Key Features

✨ **Unified API Gateway**: Access a wide range of services through a single base URL. No more juggling different API specs.

⚡️ **Fast & Lightweight**: Built with [Hono](https://hono.dev/) on Node.js, the server is designed for performance and minimal overhead.

🔩 **20+ Integrated APIs**: Out-of-the-box support for a curated list of popular public APIs. See the full list [below](#supported-apis).

🤝 **Type-Safe Client**: The `api-hub-client` library provides a fully-typed TypeScript interface, enabling auto-completion and compile-time safety.

🔧 **Extensible by Design**: The modular architecture makes it simple to add new APIs. Contributions are welcome!

⚙️ **Simple Configuration**: Manage all your API keys centrally using a single `.env` file.

🌐 **CORS Enabled**: Ready for use in web applications, with Cross-Origin Resource Sharing (CORS) enabled by default.

## Project Structure

The project is a monorepo containing two core packages:

- **/api-hub**: The Node.js server that aggregates the external APIs. It exposes a RESTful interface for consumption.
- **/api-hub-client**: The TypeScript client library that provides a convenient, typed wrapper for interacting with the `api-hub` server from any JavaScript/TypeScript application.

```
api-hub-repo/
├── api-hub/          # The Node.js server (Hono)
│   ├── src/
│   │   ├── routes/   # Each file here defines endpoints for a public API
│   │   ├── index.ts  # Main server entry point
│   └── package.json
└── api-hub-client/   # The TypeScript client library
    ├── src/
    │   ├── index.ts  # Exports the ApiHubClient
    │   └── ...       # Typed methods for each API
    └── package.json
```

## Getting Started

This repository contains two separate packages: the backend server (`api-hub`) and the frontend SDK (`api-hub-client`). Choose the setup guide based on what you want to use.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.x or later recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

---

## Backend Setup (API Hub Server)

If you want to run your own API Hub server, follow these steps.

### 1. Install the Backend Package

Install the `@birukl7/api-hub` package from npm:

```bash
npm install @birukl7/api-hub
```

Or if you're working with the source code:

```bash
git clone https://github.com/your-username/api-hub-repo.git
cd api-hub-repo/api-hub
npm install
```

### 2. Configure API Keys

The server requires API keys for certain routes (e.g., YouTube, NewsAPI).

1.  Navigate to the server directory (if working with source):
    ```bash
    cd api-hub
    ```
2.  Create a `.env` file by copying the example:
    ```bash
    cp .env.example .env
    ```
3.  Open the `.env` file and add your API keys.

    ```dotenv
    # .env
    YOUTUBE_API_KEY=your_youtube_api_key_here
    NEWS_API_KEY=your_news_api_key_here
    NY_TIMES_API_KEY=your_ny_times_api_key_here
    WEATHER_API_KEY=your_weather_api_key_here
    ```

    _Note: APIs that do not require a key will work without any configuration._

### 3. Run the Server

Start the development server. It will watch for file changes and automatically restart.

```bash
npm run dev
```

The API Hub server is now running and accessible at **`http://localhost:7000`** (or your configured port).

---

## Frontend Setup (API Hub Client SDK)

If you want to use the API Hub client in your TypeScript/JavaScript project, follow these steps.

### 1. Install the Client Package

Install the `api-hub-client` package from npm:

```bash
npm install api-hub-client
```

Or if you're working with the source code:

```bash
git clone https://github.com/your-username/api-hub-repo.git
cd api-hub-repo/api-hub-client
npm install
```

## Usage

You can interact with the API Hub in two ways: by making direct HTTP requests to the server or by using the `api-hub-client` library for a more integrated experience.

### Direct API Requests

Use any HTTP client like `curl` or `fetch` to call the endpoints.

**Example: Get GitHub repositories for a user**

```bash
curl http://localhost:7000/github/repos/facebook
```

**Example: Search for a meal recipe**

```bash
curl http://localhost:7000/mealdb/search/carbonara
```

### Using the `api-hub-client`

For TypeScript/JavaScript projects, the client library provides the best experience.

#### Installation

```bash
npm install api-hub-client
```

#### Code Example

Instantiate the client with the server's base URL and call the available methods.

```typescript
import { ApiHubClient } from "api-hub-client";

async function fetchData() {
  const client = new ApiHubClient({
    baseUrl: "http://localhost:7000", // Default port is 7000
  });

  try {
    // 1. Fetch GitHub repositories for the 'honojs' organization
    console.log("Fetching GitHub repos...");
    const repos = await client.github.getRepos("honojs");
    console.log(`Found ${repos.length} repos. First one: ${repos[0]?.name}`);

    // 2. Search for a meal from TheMealDB
    console.log("\nSearching for meals...");
    const meals = await client.mealdb.search("Arrabiata");
    console.log(`Found ${meals.length} meals. First one: ${meals[0]?.strMeal}`);

    // 3. Search for YouTube videos
    console.log("\nSearching YouTube...");
    const videos = await client.youtube.search("Next.js 15 features");
    console.log(
      `Found ${videos.length} videos. First one: ${videos[0]?.snippet?.title}`
    );
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

fetchData();
```

## Supported APIs

API Hub provides a unified interface for the following public APIs:

| Category          | API Name                            | Requires Key |
| ----------------- | ----------------------------------- | :----------: |
| **Development**   | GitHub                              |      No      |
|                   | Hacker News                         |      No      |
|                   | JSONPlaceholder                     |      No      |
|                   | APIC Agent                          |      No      |
| **Data & Info**   | REST Countries                      |      No      |
|                   | Google Books                        |      No      |
|                   | Crypto (CoinGecko)                  |      No      |
|                   | Bible                               |      No      |
| **Entertainment** | TheMealDB                           |      No      |
|                   | TheMovieDB (TMDB)                   |     Yes      |
|                   | FlixQuest                           |     Yes      |
|                   | TV Maze                             |      No      |
|                   | Lyrics.ovh                          |      No      |
|                   | Chuck Norris Jokes                  |      No      |
|                   | Random User Generator               |      No      |
|                   | Reddit                              |      No      |
| **News**          | NewsAPI                             |     Yes      |
|                   | New York Times                      |     Yes      |
| **Science**       | APOD (Astronomy Picture of the Day) |      No      |
|                   | Weather API                         |     Yes      |
| **Media**         | YouTube                             |     Yes      |

## Contributing

We welcome contributions from the community! Whether it's adding a new API, fixing a bug, or improving documentation, your help is appreciated.

### Contributing to the Backend (`api-hub`)

If you want to add a new API or fix issues in the backend server:

1.  **Clone and Setup**: Clone the repository and navigate to the `api-hub` directory:
    ```bash
    git clone https://github.com/your-username/api-hub-repo.git
    cd api-hub-repo/api-hub
    npm install
    ```

2.  **Create a Route File**: In `api-hub/src/routes/`, create a new file (e.g., `my-new-api.ts`).

3.  **Define Endpoints**: Use the Hono framework to define the endpoints. Fetch data from the external API using `axios`.

4.  **Add to Hub**: Import and register your new route in `api-hub/src/createApiHub.ts`.

5.  **Submit a Pull Request**: Open a PR with your changes. Please ensure your code follows the existing style and includes clear descriptions.

### Contributing to the Frontend SDK (`api-hub-client`)

If you want to add client methods or fix issues in the frontend SDK:

1.  **Clone and Setup**: Clone the repository and navigate to the `api-hub-client` directory:
    ```bash
    git clone https://github.com/your-username/api-hub-repo.git
    cd api-hub-repo/api-hub-client
    npm install
    ```

2.  **Create Client Methods**: In `api-hub-client/src/`, create a new file to define typed methods for your new API (or update existing ones).

3.  **Export from Index**: Make sure to export your new client methods from `api-hub-client/src/index.ts`.

4.  **Submit a Pull Request**: Open a PR with your changes. Please ensure your code follows the existing style and includes clear descriptions.

### Adding a Complete New API

To add a new API that works with both the backend and frontend:

1.  Follow the **Backend** contribution steps above to add the server route.
2.  Follow the **Frontend SDK** contribution steps above to add the client methods.
3.  Ensure both implementations are consistent and properly typed.

For more details, please see the `CONTRIBUTING.md` file.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

<div align="center">
Authored by Group 2(EthioHub)
</div>
