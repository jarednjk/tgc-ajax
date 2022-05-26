

async function run() {

    let response = await axios.get('contact.txt');
    document.querySelector('#load-btn').addEventListener('click', function(){
        document.querySelector('#content').innerHTML = response.data;
    })

}

run();