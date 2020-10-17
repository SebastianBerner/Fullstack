const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
      id: 1,
      name: "Arto H",
      number: "01230123",
    },
    {
      id: 2,
      name: "Sini kakka",
      number: "123",
    },
    {
      id: 3,
      name: "Kakka pussi",
      number: "12345",
    }
  ]

  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log(id)
    const person= persons.find(person => person.id === id)
    if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(note => note.id !== id)
  
    response.status(204).end()
  })

  app.post('/api/notes', (request, response) => {
    const body = request.body
  
    if (!body.content) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
  
    const person = {
      id: generateId(),
      name: body.name,
      number: body.number

    }
  
    notes = notes.concat(note)
  
    response.json(note)
  })


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)