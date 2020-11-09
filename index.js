document.getElementById("copyEmail").addEventListener("click", myFunction);

function myFunction() {
  const myEmail = document.createElement('textarea');
  myEmail.value = "kevvy206@gmail.com";
  document.body.appendChild(myEmail);
  myEmail.select();
  document.execCommand('copy');
  document.body.removeChild(myEmail);
  alert("Copied Kevin's email address!👍");
}
