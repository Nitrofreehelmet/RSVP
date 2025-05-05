document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const attendance = document.getElementById("attendance").value;
  const message = document.getElementById("message").value;

  fetch("https://script.google.com/macros/s/AKfycbz0Ij8WCz6Z6o5SSmrFs0oRwq-XSUACONhlF3K17ijp96lGeRoy-0w1DwbFGT8XBsPSLg/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, attendance, message })
  }).then(() => {
    document.getElementById("responseMsg").innerText = "Thank you for your RSVP!";
    document.getElementById("rsvpForm").reset();
  }).catch(() => {
    document.getElementById("responseMsg").innerText = "Failed to send RSVP. Try again.";
  });
});
