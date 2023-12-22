const express = require('express')

const app = express()



app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "SO LET'S SAY I CHANGE THE CODE NKO?"
    })
})

app.listen(8080, () => {
    console.log('server running on port 8080')
})