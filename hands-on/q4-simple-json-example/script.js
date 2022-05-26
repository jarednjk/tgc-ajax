async function run() {
    let response = await axios.get('artwork.json');
    document.querySelector('#load-image-btn').addEventListener('click', function(){
        document.querySelector('#artwork').innerHTML = `<h1>${response.data.title}</h1>`;
        document.querySelector('#artwork').innerHTML += `<img src='${response.data.image_url}'>`;
    })
}

run();