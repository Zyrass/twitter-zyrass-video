
const textarea = document.getElementById("contentMessage");
const feedback = document.getElementById("feedbackMessage");
const btnSubmit = document.getElementById("btnSubmit");
const counter = document.getElementById("counter");

const counterINIT = 0
counter.textContent = `${counterINIT}/256`

textarea.addEventListener("keyup", $event => {
  
  const data = $event.target.value.length

  if ( data === 0 ) {
    counter.textContent = `${counterINIT}/256`
    if ( textarea.classList.contains("is-invalid") ) {
      textarea.classList.remove("is-invalid")
    }
    if ( feedback.classList.contains("invalid-feedback") ) {
      feedback.classList.remove("invalid-feedback")
    }
    if ( btnSubmit.classList.contains("btn-outline-danger") ) {
      btnSubmit.classList.remove("btn-outline-danger")
    }

  } else {
    counter.textContent = `${data}/256`

    if ( data < 20 || data > 256 ) {
      if ( textarea.classList.contains("is-valid") ) {
        textarea.classList.remove("is-valid")
      }
      if ( feedback.classList.contains("valid-feedback") ) {
        feedback.classList.remove("valid-feedback")
      }
      if ( btnSubmit.classList.contains("btn-outline-success") ) {
        btnSubmit.classList.remove("btn-outline-success")
      }
      textarea.classList.add("is-invalid")
      feedback.classList.add("invalid-feedback")
      feedback.textContent = "Entre 20 et 256 caractères"

      btnSubmit.setAttribute("disabled", "disabled")
      btnSubmit.classList.add("btn-outline-danger")

    } else {
      if ( textarea.classList.contains("is-invalid") ) {
        textarea.classList.remove("is-invalid")
      }
      if ( feedback.classList.contains("valid-feedback") ) {
        feedback.classList.remove("invalid-feedback")
      }
      if ( btnSubmit.classList.contains("btn-outline-danger") ) {
        btnSubmit.classList.remove("btn-outline-danger")
      }

      btnSubmit.removeAttribute("disabled")
      btnSubmit.classList.add("btn-outline-success")
      textarea.classList.add("is-valid")
      feedback.classList.add("valid-feedback")
      feedback.textContent = "Super tout est OK."
    }

  }

})
