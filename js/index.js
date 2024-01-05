document.addEventListener("DOMContentLoaded", () => getUsersPhotos());
// document.addEventListener("DOMContentLoaded", () => getPosts());
let userPhotoUrl = {};

async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        displayPosts(posts);
        return posts;
    } catch (error) {
        console.error("Error obteniendo los datos", error);
        
    }
}

async function getUsersPhotos() {
    const numberOfUsers = 10;
    for (let i = 1; i <= numberOfUsers; i++) {
        try {
            const response = await fetch(`https://randomuser.me/api/?seed=${i}`,{
                mode: "cors",
                headers: {
                "Access-Control-Allow-Origin":"true",
                "Content-Type": "application/json"
            }});
            let userData = await response.json();
            userPhotoUrl[i] = userData.results[0].picture.thumbnail;
            console.log("user", userData.results[0].picture.thumbnail);

        } catch (error) {
            console.log(error, "paila");
        }
        
    }
    console.log("objeto de fotos", userPhotoUrl);
    getPosts();
    
}

function displayPosts (posts) {
    const container = document.getElementById("display-posts");
    posts.forEach(async post => {
        let user;
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
            user = await response.json();
        } catch (error) {
            console.error("Error obteniendo la informacion del usuario", error);
        }
        console.log("photo url", userPhotoUrl[post.userId]);
        const divElement = document.createElement('div');
        //agregar onclick 
        //por accesibilidad es mejor usar una etiqueta <a href="" target></a> para redireccionar
        //Metodos propios ecma script 6 
        divElement.addEventListener('click', () => openComments(post.id));
        divElement.classList.add("display-posts__card");
        divElement.id = post.id;
        divElement.innerHTML = `
        <div class="display-posts__card__header">
            <img src=${userPhotoUrl[post.userId]} alt=${user.mail} class="display-posts__card__thumb">
            <h4 class="display-posts__card__user-data">${user.email}</h4>
        </div>
        <h3 class="display-posts__card__title">${post.title}</h3>
        <p class="display-posts__card__description">${post.body}</p>`;
        container.appendChild(divElement);
    });
}

function openComments(postId) {
    const url = `comments.html?postId=${postId}`;
    window.open(url,'_self');
}
