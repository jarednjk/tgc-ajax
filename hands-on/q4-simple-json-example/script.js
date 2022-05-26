// async function run() {
//     let response = await axios.get('artwork.json');
//     document.querySelector('#load-image-btn').addEventListener('click', function(){
//         document.querySelector('#artwork').innerHTML = `<h1>${response.data.title}</h1>`;
//         document.querySelector('#artwork').innerHTML += `<img src='${response.data.image_url}'>`;
//     })
// }

// run();

document.querySelector('#load-image-btn').addEventListener('click', async()=>{
    let response = await axios.get('artwork.json');

    let h2Element = document.createElement('h2');
    h2Element.innerHTML = response.data.title;

    let imageElement = document.createElement('img');
    imageElement.src = response.data.image_url;

    let artworkDiv = document.querySelector('#artwork');
    artworkDiv.appendChild(h2Element);
    artworkDiv.appendChild(imageElement);
})