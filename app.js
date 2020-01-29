let userCount=0;
function renderUsers(users){
    console.log(users.count);
    const html=users.users.map(user=>{
        return `
            <li>
            ${user.fullName}
            ${user.email}
                </li>`
    }).join('');
    usersList.innerHTML=html;
}
const usersList=document.querySelector('#usersList');
const height=userCount;
const width=4;
const table = document.createElement("tbody");
// build a table row <tr>
for (let h = 0; h < height; h++) {
  const tr = document.createElement("tr");
  // build a table column <td>
  for (let w = 0; w < width; w++) {
    const td = document.createElement("td");
    // We'll put the coordinates on the cell
    // Element itself (using dataset),
    // letting us fetch it in a click listener later.
    td.dataset.row = h.;
    td.dataset.col = w;
    console.log(td.dataset.row);
    tds.push(td);
    tr.append(td);
  }
  table.append(tr);
}

document.getElementById("userTable").append(table);

fetch('https://acme-users-api-rev.herokuapp.com/api/users') 
.then (response =>response.json())
.then( users =>{
    userCount=users.count;
    renderUsers(users);
});
    

