import { Hono } from 'hono'
import axios from 'axios'
import type { ApiHubEnv } from '../createApiHub'

const app = new Hono<ApiHubEnv>()

//* INTRODUCTION
var welcomeMessage = "Welcome to The Bible API route! ";
app.get("/", (c) => {
    return c.text(welcomeMessage)
})


//* BOOKS
app.get("/books", async (c)=>{
    const {bibleApiKey} = c.get('config')
    var result = await axios.get(`https://ajith-holy-bible.p.rapidapi.com/GetBooks?rapidapi-key=${bibleApiKey}`)
    return c.json(result.data)    
})

//* CHAPTER
app.get("/:book/:chapter", async (c)=>{
    const {bibleApiKey} = c.get('config')
     var book = c.req.param("book")
     var chapter = c.req.param("chapter")
     var result = await axios.get(`https://ajith-holy-bible.p.rapidapi.com/GetChapter?book=${book}$chapter=${chapter}&rapidapi-key=${bibleApiKey}`)
    return c.json(result.data)    
})

//* VERSES
app.get("/:book/:chapter/:verses_from/:verses_to", async (c)=>{
    const {bibleApiKey} = c.get('config')
    var book = c.req.param("book")
    var chapter = c.req.param("chapter")
    var verses_from = c.req.param("verses_from")
    var verses_to = c.req.param("verses_to")
    var result = await axios.get(`https://ajith-holy-bible.p.rapidapi.com/GetVerses?book=${book}&chapter=${chapter}&VerseFrom=${verses_from}&VerseTo = ${verses_to}&rapidapi-key=${bibleApiKey}`)
    return c.json(result.data)    
})

//* VERSE OF CHAPTER
app.get("/:book/:chapter/:verse", async (c)=>{
    const {bibleApiKey} = c.get('config')
    var book = c.req.param("book")
    var chapter = c.req.param("chapter")
    var verse = c.req.param("verse")
    var result = await axios.get(`https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?book=${book}&chapter=${chapter}&Verse=${verse}&rapidapi-key=${bibleApiKey}`)
    return c.json(result.data)    
})

export default app;
