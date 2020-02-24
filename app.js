if (process.NODE_ENV === 'development'){
    require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const PORT = process.env.PORT || 3000
const app = express()

app.use(cors)
app.use(morgan('dev'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))