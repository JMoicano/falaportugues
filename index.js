const express = require('express')
const routes = require('./routes/routes')
const cors = require('cors')
const app = express()
const PORT = 4000

app.use(cors())
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`app is running on PORT ${PORT}`)
})
module.exports = app