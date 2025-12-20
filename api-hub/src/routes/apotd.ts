import { Hono } from 'hono'
import axios from 'axios'
import moment from 'moment'
import type { ApiHubEnv } from '../createApiHub'

const app = new Hono<ApiHubEnv>()

//* INTRODUCTION
var welcomeMessage = "Welcome to NASA's Astronomy Picture of the Day (APOTD) API route! Use /today /random /weekly /monthly and /specific/:year/:month/:day to get respective APOTD data.";
app.get("/", (c) => {
    return c.text(welcomeMessage)
})

//* TODAY APOTD
app.get("/today", async (c) => {
    const config = c.get('config')
    const apotdApiKey = config.apotdApiKey
    const result = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apotdApiKey}`)
    const apotd = result.data
    return c.json(apotd)
})

//* RANDOM APOTD
app.get("/random", (c) => {
    var response = "/apotd/random/:amount route fetches the specified amoung of random photographs from the archive."
    return c.json(response);
})
app.get("/random/:amount", async (c) => {
    const {apotdApiKey} = c.get("config")                    
    var amount = c.req.param("amount")
    var result = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apotdApiKey}&count=${amount}`)
    var apotd = result.data
    return c.json(apotd)
})

//* WEEKLY APOTD 
app.get("/weekly", async (c) => {
    const {apotdApiKey} = c.get("config")                    
    var today = moment()
    var dateObject = moment(today);
    var sevenDaysAgo = dateObject.subtract(7, 'days');
    var formattedSevenDaysAgo = `${sevenDaysAgo.year()}-${(sevenDaysAgo.month() + 1).toString().padStart(2,"0")}-${sevenDaysAgo.date().toString().padStart(2,"0")}`
    var result = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apotdApiKey}&start_date=${formattedSevenDaysAgo}`)
    var weeklyAPOTD = result.data
    return c.json(weeklyAPOTD)
})

//* MONTHLY APOTD 
app.get("/monthly", async (c) => {
    const {apotdApiKey} = c.get("config")                    
    var today = moment()
    var dateObject = moment(today);
    var oneMonthAgo = dateObject.subtract(30, 'days');
    var formattedoneMonthAgo = `${oneMonthAgo.year()}-${(oneMonthAgo.month() + 1).toString().padStart(2,"0")}-${oneMonthAgo.date().toString().padStart(2,"0")}`
    var result = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apotdApiKey}&start_date=${formattedoneMonthAgo}`)
    var monthlyAPOTD = result.data
    return c.json(monthlyAPOTD)
})

//* SPECIFIC DATE APOTD 
app.get("/specific/:year/:month/:day", async (c) => {
    const {apotdApiKey} = c.get("config")                    
    var year = c.req.param("year")
    var month = c.req.param("month").toString().padStart(2, "0")
    var day = c.req.param("day").toString().padStart(2, "0")
    var result = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apotdApiKey}&date=${year}-${month}-${day}`)
    var apotd = result.data
    return c.json(apotd)
})

//* FUTURE: We can set Start and End Date Range

export default app;





