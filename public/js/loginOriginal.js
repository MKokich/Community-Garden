let button = document.querySelector("#submit")

const loginFormHandler = async (event) => {
  
  // adjust to what is in our code 
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  console.log(email);
  console.log(password);

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

button.addEventListener("submit", loginFormHandler);

