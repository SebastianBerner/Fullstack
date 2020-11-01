const app = require('./app') // varsinainen Express-sovellus
//const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

// const server = http.createServer(app)

// server.listen(config.PORT, () => {
//   logger.info(`Server running on port ${config.PORT}`)
// })

const PORT = config.PORT
 app.listen(PORT, () => {
   logger.info(`Server running on port ${config.PORT}`)
})

// const app = require('./app') // the actual Express application
// const config = require('./utils/config')
// const logger = require('./utils/logger')
// const http = require('http')
// const express = require('express')
// const app = express()
// const cors = require('cors')
// const mongoose = require('mongoose')

// const server = http.createServer(app)



// const Blog = mongoose.model('Blog', blogSchema)

// const mongoUrl = process.env.MONGODB_URI

// mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// app.use(cors())
// app.use(express.json())

// app.get('/api/blogs', (request, response) => {
//   Blog
//     .find({})
//     .then(blogs => {
//       response.json(blogs)
//     })
// })

// app.post('/api/blogs', (request, response) => {
//   const blog = new Blog(request.body)

//   blog
//     .save()
//     .then(result => {
//       response.status(201).json(result)
//     })
// })

// const PORT = config.PORT
// app.listen(PORT, () => {
//   logger.info(`Server running on port ${config.PORT}`)
// })