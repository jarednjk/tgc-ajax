document.querySelector('#load-btn').addEventListener('click', async()=>{
    let request1 = axios.get('file1.txt');
    let request2 = axios.get('file2.txt');

    let response1 = await request1;
    let response2 = await request2;
    console.log(response1.data);
    console.log(response2.data);

    document.querySelector('#content').innerHTML = response1.data + response2.data;

    // Shortcut
    // let responses = await axios.all([axios.get('file1.txt'), axios.get('file2.txt')])
})

