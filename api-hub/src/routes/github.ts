import { Hono } from 'hono'
import axios from 'axios'

const app = new Hono()

//* INTRODUCTION
const welcomeMessage = "Welcome to GitHub API route!";
app.get("/", (c) => {
    return c.text(welcomeMessage)
})

//* USER 
app.get("/user", (c) => {
    const response = "/github/user/:username route fetches public profile information."
    return c.json(response);
})
app.get("/user/:username", async (c) => {
    const username = c.req.param("username")
    const profile = await axios.get(`https://api.github.com/users/${username}`)
    const repos = await axios.get(`https://api.github.com/users/${username}/repos`)
    const result = {
        "profile": profile.data,
        "repos": repos.data,
    }
    return c.json(result)
})

//* REPOSITORY
app.get("/repo", (c) => {
    const response = "/github/repo/:username/:repository route fetches public repository information."
    return c.json(response);
})
app.get("/repo/:username/:repository", async (c) => {
    const username = c.req.param("username")
    const repository = c.req.param("repository")
    const result = await axios.get(`https://api.github.com/repos/${username}/${repository}`)
    return c.json(result.data)
})

//* SEARCH
app.get("/search", (c) => {
    const response = "/github/search route searches for the specified user or repository profile. Use /github/search/users/:username or /github/search/repos/:repository to search."
    return c.json(response);
})
// SEARCH USER
app.get("/search/users/:username", async (c) => {
    const username = c.req.param("username")
    const result = await axios.get(`https://api.github.com/search/users?q=${username}`)
    return c.json(result.data)
})
// SEARCH REPOSITORY
app.get("/search/repos/:repository", async (c) => {
    const repository = c.req.param("repository")
    var result = await axios.get(`https://api.github.com/search/repositories?q=${repository}&type=repository`)
    return c.json(result.data)
})

export default app;


