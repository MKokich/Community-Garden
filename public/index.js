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

  $("#postbtn").on("click", function (e) {
    const plant_name = $("#plant_name").val();
    // const image = $("#newImage").val();
    const description = $("#description").val();
    const sun_requirement = $("#sun_requirement").val();
    const pet_safe = $("#pet_safe").val();
    const edible = $("#edible").val();
    const easy_care = $("#easy_care").val();
    const water_needed = $("#water_needed").val();
    const growth_rate = $("#growth_rate").val();
    const size = $("#size").val();
    const user_email = $("#user_email").val();

    const newPost = {
      plant_name,
      // maybe
      // image,
      description,
      sun_requirement,
      pet_safe,
      edible,
      easy_care,
      water_needed,
      growth_rate,
      size,
      user_email,
    };
    // console.log(newPost);
    fetch(`/api/posts/newPost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  });
});
