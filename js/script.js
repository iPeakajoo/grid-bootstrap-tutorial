async function getData() {
  const res = await fetch('../json/blogs.json')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

// Path: js/script.js
getData()
  .then(data => data.map(blog => {
    const li = document.createElement('li')
    li.textContent = blog.title
    return li

  }))
  .catch(err => {
    console.error(err)
  })
  