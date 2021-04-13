let postTitle;
let postText;
let savePostBtn;
let newPostBtn;
let postList;

if (window.location.pathname === "/posts") {
  postTitle = document.querySelector(".post-title");
  postText = document.querySelector(".post-textarea");
  savePostBtn = document.querySelector(".save-post");
  newPostBtn = document.querySelector(".new-post");
  PostList = document.querySelectorAll(".list-container .list-group");
}

// Show an element
const show = (elem) => {
  elem.style.display = "inline";
};

// Hide an element
const hide = (elem) => {
  elem.style.display = "none";
};

// activeNote is used to keep track of the note in the textarea
let activePost = {};
// get route in routes
const getPosts = () =>
  fetch("/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
// post route in routes
const savePost = (note) =>
  fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
// delete route in routes
const deletePost = (id) =>
  fetch(`/api/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

const renderActivePost = () => {
  hide(savePostBtn);

  if (activePost.id) {
    postitle.setAttribute("readonly", true);
    postText.setAttribute("readonly", true);
    postTitle.value = activePost.title;
    postText.value = activePost.text;
  } else {
    noteTitle.value = "";
    noteText.value = "";
  }
};

const handlePostSave = () => {
  const newPost = {
    title: postTitle.value,
    text: postText.value,
  };
  savePost(newPost).then(() => {
    getAndRenderPosts();
    renderActivePost();
  });
};

// Delete the clicked note
const handlePostDelete = (e) => {
  // prevents the click listener for the list from being called when the button inside of it is clicked
  e.stopPropagation();

  const post = e.target;
  const postId = JSON.parse(post.parentElement.getAttribute("data-post")).id;

  if (activePost.id === postId) {
    activePost = {};
  }

  deletePost(postId).then(() => {
    getAndRenderPosts();
    renderActivePost();
  });
};

// Sets the activeNote and displays it
const handlePostView = (e) => {
  e.preventDefault();
  activePost = JSON.parse(e.target.parentElement.getAttribute("data-post"));
  renderActivePost();
};

// Sets the activeNote to and empty object and allows the user to enter a new note
const handleNewPostView = (e) => {
  activePost = {};
  renderActivePost();
};

const handleRenderSaveBtn = () => {
  if (!postTitle.value.trim() || !postText.value.trim()) {
    hide(savePostBtn);
  } else {
    show(savePostBtn);
  }
};

// Render the list of note titles
const renderPostList = async (posts) => {
  let jsonPosts = await posts.json();
  if (window.location.pathname === "/posts") {
    postList.forEach((el) => (el.innerHTML = ""));
  }

  let postListItems = [];

  // Returns HTML element with or without a delete button
  const createLi = (text, delBtn = true) => {
    const liEl = document.createElement("li");
    liEl.classList.add("list-group-item");

    const spanEl = document.createElement("span");
    spanEl.innerText = text;
    spanEl.addEventListener("click", handlePostView);

    liEl.append(spanEl);

    if (delBtn) {
      const delBtnEl = document.createElement("i");
      delBtnEl.classList.add(
        "fas",
        "fa-trash-alt",
        "float-right",
        "text-danger",
        "delete-note"
      );
      delBtnEl.addEventListener("click", handlePostDelete);

      liEl.append(delBtnEl);
    }

    return liEl;
  };

  if (jsonPosts.length === 0) {
    postListItems.push(createLi("No saved Posts", false));
  }

  jsonPosts.forEach((post) => {
    const li = createLi(post.title);
    li.dataset.post = JSON.stringify(post);

    postListItems.push(li);
  });

  if (window.location.pathname === "/posts") {
    postListItems.forEach((post) => postList[0].append(post));
  }
};

// Gets posts from the db and renders them to the sidebar
const getAndRenderPost = () => getPosts().then(renderPostList);

if (window.location.pathname === "/posts") {
  savePostBtn.addEventListener("click", handlePostSave);
  newPostBtn.addEventListener("click", handleNewPostView);
  postTitle.addEventListener("keyup", handleRenderSaveBtn);
  postText.addEventListener("keyup", handleRenderSaveBtn);
}

getAndRenderPosts();
