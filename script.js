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


//Form submitted to backend
document.getElementById("mbbsForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      country: document.getElementById("country").value
  };

  fetch("https://mbbs-backend-8lag.onrender.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => alert(data.message))
  .catch(error => console.error("Error:", error));
});
