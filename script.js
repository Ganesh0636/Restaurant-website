document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display an alert (or you could send data to a server)
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Reset the form
    this.reset();
  });
