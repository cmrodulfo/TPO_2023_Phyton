const firstName = document.getElementById("name");
const lastName = document.getElementById("lastName");
const dni = document.getElementById("dni");
const birthDate = document.getElementById("birthDate");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const service = document.getElementById("services");
const appointmentDate = document.getElementById("appointmentDate");
const button = document.querySelector("button");

//Expresiones Regulares

const alfabetRegExp = /[a-zA-Z]/
const dniRegExp = /^\d{1,2}\.?\d{3}\.?\d{3}$/
const emailRegExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
const dateRegExp = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
const phoneRegExp = /^\+?\(?\d{2,4}\)?[\d\s-]{3,}$/

button.addEventListener("click", (e) => {
    event.preventDefault()

    validationForm()
    //console.log(validForm);
    validationForm() ? console.log("bien") : console.log("error");
//console.log(email.value)

}
)

const validationForm = () => {
    const validatingFirstName = validationInput(firstName.value, alfabetRegExp)
    const validatingLastName = validationInput(lastName.value, alfabetRegExp)
    const validatingDni = validationInput(dni.value, dniRegExp)
    const validatingBirthDate = validationInput(birthDate.value, dateRegExp)
    const validatingPhone = validationInput(phone.value, phoneRegExp)
    const validatingEmail = validationInput(email.value, emailRegExp)
    const validatingService = validationInput(service.value, alfabetRegExp)
    const validatingAppointDate = validationInput(appointmentDate.value, dateRegExp)

    const gender = document.querySelector('input[name="gender"]:checked');
    const validatingGender = validationInput(gender.value, alfabetRegExp)
    //console.log(validatingEmail);

    if (validatingFirstName == false) {
        var validFirstName = false
        firstName.style.borderColor = "#FF0000"
    } else {
        var validFirstName = true
        firstName.style.borderColor = "#ccc"
    }

    if (validatingLastName == false) {
        var validLastName = false
        lastName.style.borderColor = "#FF0000"
    } else {
        var validLastName = true
        lastName.style.borderColor = "#ccc"
    }

    if (validatingDni == false) {
        var validDni = false
        dni.style.borderColor = "#FF0000"
    } else {
        var validDni = true
        dni.style.borderColor = "#ccc"
    }

    if (validatingBirthDate == false) {
        var validBirthDate = false
        birthDate.style.borderColor = "#FF0000"
    } else {
        var validBirthDate = true
        birthDate.style.borderColor = "#ccc"
    }

    if (validatingGender == false) {
        var validGender = false
        gender.style.borderColor = "#FF0000"
    } else {
        var validGender = true
        gender.style.borderColor = "#ccc"
    }

    if (validatingPhone == false) {
        var validPhone = false
        phone.style.borderColor = "#FF0000"
    } else {
        var validPhone = true
        phone.style.borderColor = "#ccc"
    }

    if (validatingEmail == false) {
        var validEmail = false
        email.style.borderColor = "#FF0000"
    } else {
        var validEmail = true
        email.style.borderColor = "#ccc"
    }

    if (validatingService == false) {
        var validService = false
        service.style.borderColor = "#FF0000"
    } else {
        var validService = true
        service.style.borderColor = "#ccc"
    }

    if (validatingAppointDate == false) {
        var validAppointDate = false
        appointmentDate.style.borderColor = "#FF0000"
    } else {
        var validAppointDate = true
        appointmentDate.style.borderColor = "#ccc"
    }

    if (validFirstName && validLastName && validDni && validGender && validEmail && validPhone && validService && validAppointDate) {
        return true
    } else return false
}

const validationInput = (data, regExp) => {
console.log(data);

    if (data == "") {
        return false
    }
    else if (regExp.test(data)) {
            console.log("validación ok");
            return true
        }
        else {
            console.log("validación no ok");
            return false
        }
}

function showAlert() {
    alert('Gracias por contactarnos. Le responderemos a la brevedad');
  }