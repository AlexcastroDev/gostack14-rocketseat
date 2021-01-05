const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({
        Hey: "Thanks for calling me"
    })
})

app.listen(3000, () => {
    console.log('🔥 Server has started successfully 🔥')
})