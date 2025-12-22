import { Hono } from 'hono'
import axios from 'axios'

const app = new Hono()
const baseUrl = 'https://hacker-news.firebaseio.com/v0'

function parseLimit(raw: string | undefined, fallback: number) {
    const n = raw ? Number(raw) : fallback
    if (!Number.isFinite(n) || n <= 0) return fallback
    return Math.min(Math.floor(n), 200)
}

async function getStoryListAndHydrate(listName: string, limit: number) {
    const result = await axios.get<number[]>(`${baseUrl}/${listName}.json?print=pretty`)
    const newsIDList = result.data.slice(0, limit)
    const itemPromises = newsIDList.map((id) => axios.get(`${baseUrl}/item/${id}.json?print=pretty`))
    const itemResults = await Promise.all(itemPromises)
    return itemResults.map((r) => r.data)
}

//* INTRODUCTION
var welcomeMessage = "Welcome to Hacker News API route! Use /newstories /topstories and /beststories to get filtered news.";
app.get("/", (c) => {
    return c.text(welcomeMessage)
})

//* NEW STORIES 
app.get("/newstories", async (c) => {
    const limit = parseLimit(c.req.query('limit'), 30)
    const newsContentList = await getStoryListAndHydrate('newstories', limit)
    return c.json(newsContentList)
})

//* TOP STORIES
app.get("/topstories", async (c) => {
    const limit = parseLimit(c.req.query('limit'), 30)
    const newsContentList = await getStoryListAndHydrate('topstories', limit)
    return c.json(newsContentList)
})

//* BEST STORIES
app.get("/beststories", async (c) => {
    const limit = parseLimit(c.req.query('limit'), 30)
    const newsContentList = await getStoryListAndHydrate('beststories', limit)
    return c.json(newsContentList)
})

app.get("/askstories", async (c) => {
    const limit = parseLimit(c.req.query('limit'), 30)
    const newsContentList = await getStoryListAndHydrate('askstories', limit)
    return c.json(newsContentList)
})

app.get("/showstories", async (c) => {
    const limit = parseLimit(c.req.query('limit'), 30)
    const newsContentList = await getStoryListAndHydrate('showstories', limit)
    return c.json(newsContentList)
})

app.get("/jobstories", async (c) => {
    const limit = parseLimit(c.req.query('limit'), 30)
    const newsContentList = await getStoryListAndHydrate('jobstories', limit)
    return c.json(newsContentList)
})

app.get('/item/:id', async (c) => {
    const id = c.req.param('id')
    const result = await axios.get(`${baseUrl}/item/${id}.json?print=pretty`)
    return c.json(result.data)
})

app.get('/user/:id', async (c) => {
    const id = c.req.param('id')
    const result = await axios.get(`${baseUrl}/user/${id}.json?print=pretty`)
    return c.json(result.data)
})

app.get('/updates', async (c) => {
    const result = await axios.get(`${baseUrl}/updates.json?print=pretty`)
    return c.json(result.data)
})

app.get('/maxitem', async (c) => {
    const result = await axios.get(`${baseUrl}/maxitem.json?print=pretty`)
    return c.json(result.data)
})

export default app;