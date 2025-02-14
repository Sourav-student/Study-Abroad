let more = document.querySelectorAll(".more");
let box = document.querySelectorAll(".box");
let mbbsForm = document.getElementById("mbbsForm");

// For make Functionating button to show more information
more.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const isOpen = btn.innerHTML === "x";
    
    more.forEach((b) => (b.innerHTML = "+"));
    box.forEach((b) => (b.style.display = "none"));

    if (!isOpen) {
      btn.innerHTML = "x";
      box[index].style.display = "block";
    }
  });
});

document.getElementById("mbbsForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let country = document.getElementById("country").value;
  let errorMessage = "";

  if (name === "") {
      errorMessage += "Name is required.\n";
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
      errorMessage += "Enter a valid email.\n";
  }

  if (!/^\d{10}$/.test(phone)) {
      errorMessage += "Enter a valid 10-digit phone number.\n";
  }

  if (country === "") {
      errorMessage += "Select a country.\n";
  }

  if (errorMessage) {
      alert(errorMessage);
  } else {
      alert("Form submitted successfully!");
      document.getElementById("mbbsForm").submit();
  }

  console.log(name, email, phone, country)
});
