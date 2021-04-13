// const createPost = document.querySelector("#savebtn");
const url = "https://localhost3001";

$(function () {
  $("#savebtn").on("click", function (e) {
    const name = $("#name").val();
    const username = $("#username").val();
    const email = $("#email").val();
    const password = $("#password").val();
    const password2 = $("#password2").val();

    const newUser = {
      name,
      username,
      email,
      password,
    };

    fetch(`/api/users/create`, {
      method: "POST",
      body: newUser,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
    // console.log(newUser);
  });
});
