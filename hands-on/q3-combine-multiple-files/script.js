document.querySelector('#load-btn').addEventListener('click', async()=>{
    let response1 = await axios.get('file1.txt');
    let response2 = await axios.get('file2.txt');
    console.log(response1.data);
    console.log(response2.data);

    document.querySelector('#content').innerHTML += response1.data;
    document.querySelector('#content').innerHTML += `\n\n${response2.data}`;
})