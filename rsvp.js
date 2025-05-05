document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const attendance = document.querySelector('input[name="attendance"]:checked').value;
  const pax = document.getElementById("pax").value;

  fetch("https://script.google.com/macros/s/AKfycbz0Ij8WCz6Z6o5SSmrFs0oRwq-XSUACONhlF3K17ijp96lGeRoy-0w1DwbFGT8XBsPSLg/exec", {
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
    document.getElementById("responseMsg").innerText = "Terima kasih atas maklum balas!";
    document.getElementById("rsvpForm").reset();
  }).catch(() => {
    document.getElementById("responseMsg").innerText = "Gagal hantar. Sila cuba lagi.";
  });
});
