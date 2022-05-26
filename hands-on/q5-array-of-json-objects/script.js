// async function run() {
//     let response = await axios.get('users.json');
//     document.querySelector('#load-users-btn').addEventListener('click', function(){
//         console.log(response.data)
//         for (let i =0; i < users.length; i++)
//         document.querySelector('#all-users').innerHTML += `<h1>${response.data.users[i].firstName}</h1>`;
//     })
// }

// run();

document.querySelector('#load-users-btn').addEventListener('click', async ()=>{

    let response = await axios.get('users.json');

    let firstNameTitle = document.createElement('h2')
    firstNameTitle.innerHTML = "First Name";
    let lastNameTitle = document.createElement('h2')
    lastNameTitle.innerHTML = "Last Name";
    let emailTitle = document.createElement('h2')
    emailTitle.innerHTML = "Email";

    let firstNameUL = document.createElement('ul');
    let lastNameUL = document.createElement('ul');
    let emailUL = document.createElement('ul');
    for (let i=0; i <response.data.users.length; i++) {
        firstNameUL.innerHTML += `<li>${response.data.users[i].firstName}</li>`;
        lastNameUL.innerHTML += `<li>${response.data.users[i].lastName}</li>`;
        emailUL.innerHTML += `<li>${response.data.users[i].emailAddress}</li>`;
    }
    // let allUsersDiv = document.querySelector('#all-users');
    let firstNameDiv = document.querySelector('#first-name');
    firstNameDiv.appendChild(firstNameTitle);
    firstNameDiv.appendChild(firstNameUL);

    let lastNameDiv = document.querySelector('#last-name');
    lastNameDiv.appendChild(lastNameTitle);
    lastNameDiv.appendChild(lastNameUL);

    let emailDiv = document.querySelector('#email');
    emailDiv.appendChild(emailTitle)
    emailDiv.appendChild(emailUL);
    

    console.log(response.data);
})