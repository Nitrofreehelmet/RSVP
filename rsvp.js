document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();                // ✅ OK
  const phone = document.getElementById("phone").value.trim();              // ✅ Not attendance!
  const attendance = document.querySelector('input[name="attendance"]:checked').value;
  const pax = document.getElementById("pax").value;

  console.log({ name, phone, attendance, pax }); // Check in DevTools

  fetch("https://script.google.com/macros/s/PASTE_YOUR_DEPLOYED_URL_HERE/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, attendance, pax })
  }).then(() => {
    document.getElementById("responseMsg").innerText = "Terima kasih!";
    document.getElementById("rsvpForm").reset();
  }).catch(() => {
    document.getElementById("responseMsg").innerText = "Ralat!";
  });
});
