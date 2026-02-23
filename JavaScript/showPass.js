function showPassword() {
  let inputRef = document.querySelector("#password");
  let buttonRef = document.getElementById("showPass");
  if (inputRef.type === "password") {
    inputRef.type = "text";
    buttonRef.innerText = "Hide Password";
  } else {
    inputRef.type = "password";
    buttonRef.innerText = "Show Password";
  }
}
