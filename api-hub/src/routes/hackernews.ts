import { Hono } from 'hono'
import axios from 'axios'

const app = new Hono()

//* INTRODUCTION
var welcomeMessage = "Welcome to Hacker News API route! Use /newstories /topstories and /beststories to get filtered news.";
app.get("/", (c) => {
    return c.text(welcomeMessage)
})

//* NEW STORIES 
app.get("/newstories", async (c) => {
    const result = await axios.get<number[]>(`https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`)
    let newsIDList = result.data
    if (newsIDList.length > 30) {
        newsIDList = newsIDList.slice(0, 30)
    }
    const newsContentList: any[] = []
    for (let i = 0; i < newsIDList.length; i++) {
        const currentNews = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsIDList[i]}.json?print=pretty`)
        newsContentList.push(currentNews.data);        
    }
    return c.json(newsContentList)
})

//* TOP STORIES
app.get("/topstories", async (c) => {
    const result = await axios.get<number[]>(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
    let newsIDList = result.data
    if (newsIDList.length > 30) {
        newsIDList = newsIDList.slice(0, 30)
    }
    const newsContentList: any[] = []
    for (let i = 0; i < newsIDList.length; i++) {
        const currentNews = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsIDList[i]}.json?print=pretty`)
        newsContentList.push(currentNews.data);        
    }
    return c.json(newsContentList)
})

//* BEST STORIES
app.get("/beststories", async (c) => {
    const result = await axios.get<number[]>(`https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`)
    let newsIDList = result.data
    if (newsIDList.length > 30) {
        newsIDList = newsIDList.slice(0, 30)
    }
    const newsContentList: any[] = []
    for (let i = 0; i < newsIDList.length; i++) {
        const currentNews = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsIDList[i]}.json?print=pretty`)
        newsContentList.push(currentNews.data);        
    }
    return c.json(newsContentList)
})


export default app;