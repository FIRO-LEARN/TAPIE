const main = document.getElementById('main');

const fetchPosts = async () => {
    const params = new URLSearchParams(window.location.search);
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.get('id')}`).then(response => response.json());
}


const Service = async () => {
    const data = await fetchPosts();
    const loading = document.getElementsByClassName('loading');
    loading[0].style.display = 'none';

    const div = document.createElement('div');

    const title = document.createElement('h1');
    title.classList.add('post-title');
    title.textContent = data.title;
    div.appendChild(title);

    const body = document.createElement('p');
    body.classList.add('post-body');
    body.textContent = data.body;
    div.appendChild(body);

    document.getElementById('main').appendChild(div);
}

Service();