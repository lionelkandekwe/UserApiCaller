//fetch Users
document.addEventListener('DOMContentLoaded', function () {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        let temp = ''
        data.forEach((user) => {
          temp += "<div class='cardContainer'>"
          temp += `<div class="name">${user.name}</div>`
          temp += `<div class="email">${user.email}</div>`
          temp += `<div class="posts" id="post${user.id}"></div>`
          temp += "<div class='button-container'>"
          temp += `<button type="button" id="getPostBtn" onclick="getUserPosts(${user.id})">GET POST</button>`
          temp += `<button type="button"id="hideBtn" onclick="hidePost(${user.id})">HIDE POST</button>`
          temp += '</div>'
          temp += '</div>'
        })

        document.querySelector('.wrapper').innerHTML = temp
      }
    })
})

//Fetch Posts
function getUserPosts(id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((response) => response.json())
    .then((posts) => {
      if (posts.length > 0) {
        let temp = ''
        posts.forEach((post) => {
          temp += "<div class='postCard'>"
          temp += ` <h3 class="post-title">${post.title}</h3> `
          temp += `<p class="post-content">${post.body}</p>`
          temp += '</div>'
        })
        document.getElementById(`post${id}`).style.display = 'flex'
        document.getElementById(`post${id}`).innerHTML = temp
      }
    })
}

//hide Post
function hidePost(id) {
  document.getElementById(`post${id}`).style.display = 'none'
}
