

function validateEmail(email) {
  const re = /.+\@.+\..+/;
  return re.test(email);
}

const inpgroup = document.getElementById("inp-group");
const textinput = document.getElementById("email");
const warningElements = document.querySelectorAll(".warning");

function validation() {
  validEmail = validateEmail(textinput.value);

  if (!validEmail) {
    inpgroup.classList.add("not-valid");
    for (let i = 0; i < 2; i++) {
      warningElements[i].style.display = "block";
    }
    // warningElements.style.display = "block";
  } else {
    inpgroup.classList.remove("not-valid");
    for (let i = 0; i < 2; i++) {
      warningElements[i].style.display = "none";
    }
  }
}
