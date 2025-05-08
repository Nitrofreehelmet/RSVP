document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim(); // Make sure it's before attendance
  const attendance = document.querySelector('input[name="attendance"]:checked').value;
  const pax = document.getElementById("pax").value;

  const data = { name, phone, attendance, pax };

  console.log("Sending JSON:", data); // 🔍 Check in DevTools

  fetch("https://script.google.com/macros/s/AKfycbz0Ij8WCz6Z6o5SSmrFs0oRwq-XSUACONhlF3K17ijp96lGeRoy-0w1DwbFGT8XBsPSLg/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(() => {
    document.getElementById("responseMsg").innerText = "Terima kasih!";
    document.getElementById("rsvpForm").reset();
  }).catch(() => {
    document.getElementById("responseMsg").innerText = "Ralat semasa hantar.";
  });
});
