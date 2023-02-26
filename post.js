function dynamicPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => loadPost(data));
}

function loadPost(posts) {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList = "flex";
    div.innerHTML = `

    <h2>Id: ${post.id} </h2>
    <h3>UserId: ${post.userId} </h3>
    <h2>Title: ${post.title}</h2>
    <p>Post: ${post.body}</p>

    `;

    postContainer.appendChild(div);
  }
}

dynamicPost();
