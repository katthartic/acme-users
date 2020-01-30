const usersList = document.querySelector('#usersList')
const pageList = document.querySelector('#pages')

function renderUsers(users){
  console.log(users)
  const html = users.map(user=>{
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

fetch('https://acme-users-api-rev.herokuapp.com/api/users') 
.then(response => response.json())
.then(response => {
  renderUsers(response.users)
  renderPages(response.count)
})

//only returns 50
//connect page to idx of user
//fill array based on idx + 49


