let userCount = 0;
let pageCount = 0;

const usersList = document.querySelector('#usersList');
const pageList = document.querySelector('#pages')

function renderUsers(users){
    console.log(users.count);
    const html=users.users.map(user=>{
        return `
            <tr>
              <td>${user.firstName}</td>
              <td>${user.lastName}</td>
              <td>${user.email}</td>
              <td>${user.title}</td>
            </tr>`
    });
    html.unshift('<tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Title</th></tr>')
    html.join('')
    usersList.innerHTML = html;
}

// function renderPages(){
//   console.log(pageCount);
//   let html = []
//   for (let i = 0; i < pageCount; i++) {
//       html.push(`<div>${i}</div>`)
//   }
//   html.join('')
//   console.log(html)
//   pageList.innerHTML = html;
// }

fetch('https://acme-users-api-rev.herokuapp.com/api/users') 
.then (response => response.json())
.then( users => {
    userCount = users.count;
    pageCount = Math.round(userCount/50, 0)
    console.log('page', pageCount)
    renderUsers(users);
});