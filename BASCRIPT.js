function validateForm() {
  const cliName = document.getElementById("cliName").value;
  const dateTime = document.getElementById("dateTime").value;
  const lpName = document.getElementById("lpName").value;
  const lpCmsid = document.getElementById("lpCmsid").value;
  const alpName = document.getElementById("alpName").value;
    const lpCmsid = document.getElementById("alpCmsid").value;
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
const scriptURL = 'https://script.google.com/macros/s/AKfycbyodCTlAsd3jvSyw51YtcwSFEkz4__Mc4hn7daPdt6mp6KvhkO2lY3_kDnq_Xb27JPz/exec';
const form = document.forms['baTestForm'];
const submitButton = form.querySelector('button[type="submit"]');  // Select the submit button

form.addEventListener('submit', async e => {
  e.preventDefault();  // Prevent the default form submission

  // Disable the submit button to prevent multiple submissions
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
      window.location.reload();  // Reload the page after form submission
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error!', error.message);
    alert("An error occurred during form submission. Please try again.");
  } finally {
    // Re-enable the submit button after submission is complete
    submitButton.disabled = false;
    submitButton.textContent = "Submit";
  }
});
