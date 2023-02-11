function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "davidmphande18@gmail.com",
    Password: "252993",
    To: "davidmphande18@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone no: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message Sent Succesfully"));
}
