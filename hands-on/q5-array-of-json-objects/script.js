document.querySelector('#load-users-btn').addEventListener('click', async ()=>{

    let response = await axios.get('users.json');
    let allUsersDiv = document.querySelector('#all-users');

    for (let u of response.data.users) {
        let ulElement = document.createElement('ul');
        let firstNameElement = document.createElement('li');
        firstNameElement.innerHTML = u.firstName;
        ulElement.appendChild(firstNameElement);
        let lastNameElement = document.createElement('li');
        lastNameElement.innerHTML = u.lastName;
        ulElement.appendChild(lastNameElement);
        let emailElement = document.createElement('li');
        emailElement.innerHTML = u.emailAddress;
        ulElement.appendChild(emailElement);
        allUsersDiv.appendChild(ulElement);
    }
})