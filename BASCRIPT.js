function validateForm() {
  const cliName = document.getElementById("cliName").value;
  const dateTime = document.getElementById("dateTime").value;
  const lpName = document.getElementById("lpName").value;
  const lpCmsid = document.getElementById("lpCmsid").value;
  const alpName = document.getElementById("alpName").value;
  const location = document.getElementById("location").value;
  const trainNo = document.getElementById("trainNo").value;
  const locoNo = document.getElementById("locoNo").value;
  const lpBaResult = document.getElementById("lpBaResult").value;
  const alpBaResult = document.getElementById("alpBaResult").value;

  if (!cliName || !dateTime || !lpName || !lpCmsid || !alpName || !location || !trainNo || !locoNo || !lpBaResult || !alpBaResult) {
    alert("Please fill out all fields.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
