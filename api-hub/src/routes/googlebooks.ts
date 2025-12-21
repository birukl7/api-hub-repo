import { Hono } from 'hono'
import axios from 'axios'

const app = new Hono()

//* INTRODUCTION
var welcomeMessage = "Welcome to Google's Books API route! Use /search to search for books.";
app.get("/", (c) => {
    return c.text(welcomeMessage)
})

//* SEARCH
app.get("/search", (c) => {
    var response = "/googlebooks/search/:book route fetches all results mentioning the searched book."
    return c.json(response);
})
app.get("/search/:book", async (c) => {
    var book = c.req.param("book")
    var result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
    var books = result.data
    return c.json(books)
})

app.get('/volumes', (c) => {
    var response = "/googlebooks/volumes/:id route fetches a single volume by its volume ID."
    return c.json(response)
})
app.get('/volumes/:id', async (c) => {
    var id = c.req.param('id')
    var result = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    return c.json(result.data)
})

app.get('/search-advanced', (c) => {
    var response = "Use /googlebooks/search-advanced/results?q=...&startIndex=0&maxResults=10&orderBy=relevance&langRestrict=en&printType=books&projection=lite"
    return c.json(response)
})
app.get('/search-advanced/results', async (c) => {
    var q = c.req.query('q') || ''
    var startIndex = c.req.query('startIndex')
    var maxResults = c.req.query('maxResults')
    var orderBy = c.req.query('orderBy')
    var langRestrict = c.req.query('langRestrict')
    var printType = c.req.query('printType')
    var projection = c.req.query('projection')

    var params: Record<string, string> = { q }
    if (startIndex) params.startIndex = startIndex
    if (maxResults) params.maxResults = maxResults
    if (orderBy) params.orderBy = orderBy
    if (langRestrict) params.langRestrict = langRestrict
    if (printType) params.printType = printType
    if (projection) params.projection = projection

    const qs = new URLSearchParams(params).toString()
    var result = await axios.get(`https://www.googleapis.com/books/v1/volumes?${qs}`)
    return c.json(result.data)
})

export default app;
