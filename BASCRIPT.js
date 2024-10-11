function validateForm() {
  const cliName = document.getElementById("cliName").value;
  const dateTime = document.getElementById("dateTime").value;
  const lpName = document.getElementById("lpName").value;
  const lpCmsid = document.getElementById("lpCmsid").value;
  const alpName = document.getElementById("alpName").value;
  const alpCmsid = document.getElementById("alpCmsid").value;
  const location = document.getElementById("location").value;
  const trainNo = document.getElementById("trainNo").value;
  const locoNo = document.getElementById("locoNo").value;
  const lpBaResult = document.getElementById("lpBaResult").value;
  const alpBaResult = document.getElementById("alpBaResult").value;

  if (!cliName || !dateTime || !lpName || !lpCmsid || !alpName || !alpCmsid || !location || !trainNo || !locoNo || !lpBaResult || !alpBaResult) {
    alert("Please fill out all fields.");
    return false;
  }
  return true;
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw4vSoGMXfcABYjhiOFc6HXKupdgxLpnA25S6rAQYOuxWFFMzNOkuLVW-lz0Z95yey1/exec';
const form = document.forms['baTestForm'];
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async e => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  try {
    alert("Wait! Your form is submitting");
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    });

    if (response.ok) {
      alert("Your details have been recorded, thank you.");
      window.location.reload();
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error!', error.message);
    alert("An error occurred during form submission. Please try again.");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Submit";
  }
});
