const express = require('express')
const app = express()


app.get('/',(req, res) => {
    res.json({
        msg: 'Hello Theecode'
    })
})


app.listen(5000)

