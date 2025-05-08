document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const attendance = document.querySelector('input[name="attendance"]:checked').value;
  const pax = document.getElementById("pax").value;

  console.log("Sending:", { name, phone, attendance, pax }); // debug

  fetch("YOUR_WEB_APP_URL", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      phone: phone,
      attendance: attendance,
      pax: pax
    })
  }).then(() => {
    document.getElementById("responseMsg").innerText = "Thank you for your RSVP!";
    document.getElementById("rsvpForm").reset();
  }).catch(() => {
    document.getElementById("responseMsg").innerText = "Something went wrong. Try again.";
  });
});
