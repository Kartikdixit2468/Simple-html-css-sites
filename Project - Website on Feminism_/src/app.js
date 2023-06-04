const express = require("express")
const hbs = require("hbs")
const path = require("path")
const port = 8000


app = express()

// Template Engine

app.set("view engine", "hbs")
app.set("views", "C:/Users/Karti/Desktop/Project - Website on Feminism/views")
app.set("view engine", "hbs")
app.use("/static", express.static(path.join(__dirname, "../public")))

app.listen(port, () => {
    console.log(`Your Application is running on - Localhost:${port}`)
})

// Home Page
app.get('/', (req, res) => {
    res.render('index')
})

