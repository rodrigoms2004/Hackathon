'use strict'

const { apiPort } = require('../config')
const app = require('../app')
const port = process.env.PORT || apiPort


app.listen(port, () => {
    console.log(`Started up at port ${port}`)
    console.log('Server running')
})


