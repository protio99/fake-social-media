document.addEventListener('DOMContentLoaded', () => getParams());
let postId;

function getParams() {
    const params = window.location.search;
    const searchParams = new URLSearchParams(params);
    const postId = searchParams.get('postId');
    getPost(postId);
    console.log(postId);
}

async function getPost(postId) {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await postResponse.json();
    const postContainer = document.getElementById('post');
    const postDivElement = document.createElement('div');
    postDivElement.id = post.id;
    postDivElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>`;
    postContainer.appendChild(postDivElement);
    getComments(postId)
}

async function getComments(postId) {
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);    
    const comments = await commentsResponse.json();  
    const commentsContainer = document.getElementById('comments');
    comments.forEach(comment => {
        const commentDivElement = document.createElement('div');
        commentDivElement.id = comment.id;
        commentDivElement.innerHTML = `
        <h4>${comment.email}</h4>
        <h3>${comment.name}</h3>
        <p>${comment.body}</p>`;
        commentsContainer.appendChild(commentDivElement);
    });
    console.log(comments);
}
