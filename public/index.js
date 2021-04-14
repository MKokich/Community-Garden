const url = "https://localhost3001";

$(function () {
  $("#savebtn").on("click", function (e) {
    const name = $("#name").val();
    const username = $("#username").val();
    const email = $("#email").val();
    const password = $("#password").val();

    const newUser = {
      name,
      username,
      email,
      password,
    };
    console.log(newUser);
    fetch(`/api/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  });

  // $("#postbtn").on("click", function (e){
  //   const name = $("#name").val();
  //   const username = $("#username").val();
  //   const email = $("#email").val();
  //   const password = $("#password").val();

  //   const newUser = {
  //     name,
  //     username,
  //     email,
  //     password,
  //   };
  // }

  // method: post
});
