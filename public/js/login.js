const loginFormHandler = async (event) => {
  event.preventDefault();

  // adjust to what is in our code 
  const email = document.querySelector("#exampleInputEmail1").value.trim();
  const password = document.querySelector("#exampleInputPassword1").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

// adjust to what is in our code 
document
  .querySelector(".submit")
  .addEventListener("submit", loginFormHandler);
