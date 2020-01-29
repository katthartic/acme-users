const usersList = document.querySelector('#usersList')
const pageList = document.querySelector('#pages')

function renderUsers(users){
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

function renderPages(count){
  let pages = Math.ceil(count / 50, 0)
  console.log('render pages', pages)
}

fetch('https://acme-users-api-rev.herokuapp.com/api/users') 
.then(response => response.json())
.then(response => {
    renderUsers(response.users)
    renderPages(response.count)
})



// const usersTable = document.querySelector('#usersTable tbody');
// const userPaginator = document.querySelector('#userPaginator');
// const countPerPage = 50;

// const renderUsers = (users) => {
//   const html = users.map( user => {
//     return `
//       <tr>
//         <td>
//           <a href="#${user.id}" data-userId='${ user.id }'>${ user.firstName }</a>
//         </td>
//         <td>
//           ${ user.lastName }
//         </td>
//         <td>
//           ${ user.email }
//         </td>
//         <td>
//           ${ user.title }
//         </td>
//       </tr>
//     `;
//   }).join('');
//   usersTable.innerHTML = html;
// }

// window.addEventListener('hashchange', (e) => {
//   const id = window.location.hash.slice(1);

//   console.log('run', id);

//   const userId = document.querySelector(`a[data-userId='${id}']`);

//   if (userId) {
//     fetch(`https://acme-users-api-rev.herokuapp.com/api/users/detail/${id}`)
//       .then(response => response.json())
//       .then(result => {
//         renderUsers(result.users);
//         renderPaginator(result.count);
//       });
//   } else {
//     fetch(`https://acme-users-api-rev.herokuapp.com/api/users/${id}`)
//       .then(response => response.json())
//       .then(result => {
//         renderUsers(result.users);
//         renderPaginator(result.count);
//       });
//   }

//   console.log(userId);

  
// });

// const id = window.location.hash.slice(1);

// if (id) {
//   fetch(`https://acme-users-api-rev.herokuapp.com/api/users/${id}`)
//   .then(response => response.json())
//   .then(result => {
//     renderUsers(result.users);
//     renderPaginator(result.count);
//   });
// }

// const renderPaginator = (count) => {
//   const totalPages = Math.ceil(count / countPerPage);
//   const pagesArray = new Array(totalPages).fill('');

//   const html = pagesArray.map( (page, ind) => {
//     const id = window.location.hash.slice(1);

//     return (ind === parseInt(id)) ? 
//       `<li class="active">${ind + 1}</li>` :
//       `<li><a href='#${ind}'>
//         ${ind + 1}
//       </a></li>`;
//   }).join('');
//   userPaginator.innerHTML = html;

// }

// fetch('https://acme-users-api-rev.herokuapp.com/api/users/')
//   .then(response => response.json())
//   .then(result => {
//     renderUsers(result.users);
//     renderPaginator(result.count);
//   });


