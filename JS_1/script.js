const main = document.getElementById('main');

const fetchPosts = async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
}


const Service = async () => {
    const data = await fetchPosts();
    data.forEach(post => {
        const loading = document.getElementsByClassName('loading');
        loading[0].style.display = 'none';

        const div = document.createElement('div');
        div.onclick = () => {
            window.location.href = `post.html?id=${post.id}`;
        };
        div.classList.add('post');

        const topDiv = document.createElement('div');
        topDiv.classList.add('post-top');
        div.appendChild(topDiv);

        const title = document.createElement('h1');
        title.classList.add('post-title');
        title.textContent = post.title;
        topDiv.appendChild(title);

        const postId = document.createElement('span');
        title.classList.add('post-id');
        postId.textContent = `id : ${post.id}`;
        topDiv.appendChild(postId);

        const body = document.createElement('p');
        body.classList.add('post-body');
        body.textContent = post.body;
        div.appendChild(body);

        document.getElementById('main').appendChild(div);
    });
}

Service();