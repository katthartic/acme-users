const usersList = document.querySelector('#usersList')
const pageList = document.querySelector('#pages')
const pages = document.querySelector('#pages')
let idx = window.location.hash.slice(1)

window.addEventListener('hashchange', () => {
  idx = window.location.hash.slice(1)
  goFetch(idx)
})

if (idx) {
  goFetch(idx)
} else {
  goFetch(0)
}

function renderUsers(users){
  const html = users.map(user => {
    return `<tr>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      <td>${user.title}</td>
      </tr>`   
  })
  html.unshift('<tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Title</th></tr>')
  usersList.innerHTML = html.join('')
}

function renderPages(count, id){
  let pageTotal = Math.ceil(count / 50, 0)
  let html = []
  for (let i = 1; i <= pageTotal; i++) { //Could also do while loop
    if ((i - 1) === Number(id)) {
      html.push(
        `<div class='selected' data-id=${i - 1}><a href='#${i - 1}'>${i}</a></div>`
      ) //Could use ternary operator
    } else {
      html.push(
      `<div data-id=${i}><a href='#${i - 1}'>${i}</a></div>`
      )
    }
  }
  pageList.innerHTML = html.join('')
}

function goFetch (id) {
  fetch(`https://acme-users-api-rev.herokuapp.com/api/users/${id}`)
    .then(response => response.json())
    .then(response => {
      renderUsers(response.users)
      renderPages(response.count, id)
    })
}
