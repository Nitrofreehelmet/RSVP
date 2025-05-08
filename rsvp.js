document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const attendance = document.querySelector('input[name="attendance"]:checked').value;
  const pax = document.getElementById("pax").value;

  // Create data object to send
  const data = {
    name: name,
    phone: phone,
    attendance: attendance,
    pax: pax
  };

  // Send data to Google Apps Script
  fetch("https://script.google.com/macros/s/AKfycbz0Ij8WCz6Z6o5SSmrFs0oRwq-XSUACONhlF3K17ijp96lGeRoy-0w1DwbFGT8XBsPSLg/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(() => {
    document.getElementById("responseMsg").innerText = "Terima kasih! Kehadiran anda telah direkodkan.";
    document.getElementById("rsvpForm").reset();
  }).catch(() => {
    document.getElementById("responseMsg").innerText = "Ralat semasa menghantar. Sila cuba lagi.";
  });
});
