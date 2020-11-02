const { Z_ASCII } = require("zlib")

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const likes = blogs.reduce((sum, x) => sum + x.likes, 0)
  return likes
}

const favoriteBlog = (blogs) => {
  let favorite = {}
  if(blogs[0] === undefined) {
    return favorite
  } 
  else {
  blogs.forEach(x => {
    if(favorite.likes === undefined) {
      favorite = x
    } else if (x.likes > favorite.likes) {
      favorite = x
    }
  })
  return favorite
  }
}

const mostBlogs = (blogs) => {
  if(blogs[0] === undefined) {
    return {}
  } 
  else {
    const author_names = Object.values(blogs.map(x => x.author))
    const mostAuthor = author_names.map(author => {
      const numOfAuthor = author_names.filter(x => x === author).length
      return {author:author, blogs: numOfAuthor}
    }).reduce((prev, current) => prev.blogs > current.blogs ? prev : current)
    return mostAuthor

}
}

const mostLikes = (blogs) => {
  if(blogs[0] === undefined) {
    return {}
  } 
  else {
    const author_names = Object.values(blogs.map(x => x.author))
    const mostAuthor = author_names.map(author => {
      const authorLikes = blogs.filter(x => x.author === author).map(x => x.likes).reduce((sum, x) => sum + x)
      return {author:author, likes: authorLikes}
    }).reduce((prev, current) => prev.likes > current.likes ? prev : current)
    return mostAuthor
  }
}




module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
  
