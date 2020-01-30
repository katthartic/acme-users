const usersList = document.querySelector('#usersList')
const pageList = document.querySelector('#pages')
const pages = document.querySelector('#pages')
let idx = window.location.hash.slice(1)

pages.addEventListener('click', (ev) => {
  const target = ev.target
  const targetTag = target.tagName
  const parentTag = target.parentElement.tagName
  console.log(target, targetTag, parentTag)

  if (targetTag === 'A' && parentTag === 'DIV') {
  target.parentElement.classList.add('selected')
  }
})

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

function renderPages(count){
  let pageTotal = Math.ceil(count / 50, 0)
  let html = []
  for (let i = 1; i <= pageTotal; i++) {
    html.push(
      `<div><a href='#${i - 1}'>${i}</a></div>`
    )
  }
  pageList.innerHTML = html.join('')
}

function goFetch (id) {
  fetch(`https://acme-users-api-rev.herokuapp.com/api/users/${id}`)
    .then(response => response.json())
    .then(response => {
      renderUsers(response.users)
      renderPages(response.count)
})
}
