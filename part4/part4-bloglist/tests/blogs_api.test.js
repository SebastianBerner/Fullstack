const mongoose = require('mongoose')
const helper = require('./test_helper')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')


beforeEach(async () => {
    await Blog.deleteMany({})
  
    for (let blog of helper.initialBlogs) {
      let blogObject = new Blog(blog)
      await blogObject.save()
    }
  })

// test('blogs are returned as json', async () => {
//   await api
//     .get('/api/blogs')
//     .expect(200)
//     .expect('Content-Type', /application\/json/)
// })


test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(helper.initialBlogs.length)
})

test('a specific blog is within the returned blogs', async () => {
    const response = await api.get('/api/blogs')

    const titles = response.body.map(r => r.title)
    expect(titles).toContain(
        'First class tests'
    )
})

test('blogs should contain id property', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0]._id).toBeDefined()
})

test('a valid blog can be added', async () => {

    const newBlog = {
        _id: "5a422aa71b54a676234d17f1",
        title: "lol",
        author: "zacke",
        url: "hello.com",
        likes: 0,
        __v: 0
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(helper.initialBlogs.length + 1)
})

test('like value defaults at 0 if it is missing', async () => {

    const newBlog = {
        _id: "5a422aa71b54a676234d17f0",
        title: "lol",
        author: "zacke",
        url: "hello.com",
        __v: 0
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd[helper.initialBlogs.length].likes).toBe(0)
})

test("blog without title and url responds with 400 bad request", async () => {

    const newBlog = {
        _id: "5a422aa71b54a676234d17f0",
        url: "hello.com",
        __v: 0
      }
  
      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)
  
      const blogsAtEnd = await helper.blogsInDb()
  
      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
})



//   test('blog without content is not added', async () => {
//     const newBlog = {
//       important: true
//     }

//     await api
//       .post('/api/blogs')
//       .send(newBlog)
//       .expect(400)

//       const blogsAtEnd = await helper.blogsInDb()

//     expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
//   })

//   test('a specific note can be viewed', async () => {
//     const notesAtStart = await helper.notesInDb()

//     const noteToView = notesAtStart[0]

//     const resultNote = await api
//       .get(`/api/notes/${noteToView.id}`)
//       .expect(200)
//       .expect('Content-Type', /application\/json/)

//     const processedNoteToView = JSON.parse(JSON.stringify(noteToView))

//     expect(resultNote.body).toEqual(processedNoteToView)
//   })

//   test('a note can be deleted', async () => {
//     const notesAtStart = await helper.notesInDb()
//     const noteToDelete = notesAtStart[0]

//     await api
//       .delete(`/api/notes/${noteToDelete.id}`)
//       .expect(204)

//     const notesAtEnd = await helper.notesInDb()

//     expect(notesAtEnd).toHaveLength(
//       helper.initialNotes.length - 1
//     )

//     const contents = notesAtEnd.map(r => r.content)

//     expect(contents).not.toContain(noteToDelete.content)
//   })


afterAll(() => {
    mongoose.connection.close()
})