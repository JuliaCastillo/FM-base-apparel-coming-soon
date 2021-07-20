

function validateEmail(email) {
  const re = /.+\@.+\..+/;
  return re.test(email);
}

const inpgroup = document.getElementById("inp-group");
const textinput = document.getElementById("email");

function validation() {
  validEmail = validateEmail(textinput.value);

  if (!validEmail) {
    inpgroup.classList.add("not-valid");
  } else {
    inpgroup.classList.remove("not-valid");
  }
}
