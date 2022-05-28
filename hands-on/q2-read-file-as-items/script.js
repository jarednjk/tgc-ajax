document.querySelector('#btn-load-items').addEventListener('click', async()=>{
    let response = await axios.get('items.txt');
    console.log(response.data);

    let fruitsUL = document.createElement('ul');
    let fruitArray = response.data.split(',')
    for (let fruit of fruitArray) {
        fruitsUL.innerHTML += `<li>${fruit}</li>`;
    }
    let fruitsDiv = document.querySelector('#fruits');
    fruitsDiv.appendChild(fruitsUL);

    // let elements = fruits.map(function(fruit){
    //     let liElement = document.createElement('li');
    //     liElement.innerHTML = fruit;
    //     return liElement;


    // })
})

