require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const Person = require('./models/person')

morgan.token('person', req => {
  return JSON.stringify(req.body)
})



app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person'))
app.use(cors())
app.use(express.static('build'))


// const generateId = () => {
//   const maxId = persons.length > 0
//     ? Math.max(...persons.map(n => n.id))
//     : 0
//   return maxId + 1
// }

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/info', (request, response) => {
  const date = new Date()
  Person.find({}).then(persons => {
    const l = persons.map(person => person.toJSON()).length
    response.send(`Phonebook has info ${l} for people\n\n <p>${date} </p>`)
  })
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

// app.get('/api/persons/:id', (request, response) => {
//   const id = Number(request.params.id)
//   console.log(id)
//   const person= persons.find(person => person.id === id)
//   if (person) {
//       response.json(person)
//     } else {
//       response.status(404).end()
//     }
// })

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

// app.delete('/api/persons/:id', (request, response) => {
//   const id = Number(request.params.id)
//   persons = persons.filter(note => note.id !== id)

//   response.status(204).end()
// })

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})



app.post('/api/persons', (request, response) => {
  const body = request.body
  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson => savedPerson.toJSON())
    .then(changedPerson => {
      response.json(changedPerson)
    }).catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson.toJSON())
    })
    .catch(error => next(error))
})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectID') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})