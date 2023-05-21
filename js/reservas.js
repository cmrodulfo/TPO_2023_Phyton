const firstName = document.getElementById("name");
const lastName = document.getElementById("lastName");
const dni = document.getElementById("dni");
const birthDate = document.getElementById("birthDate");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const service = document.getElementById("services");
const appointmentDate = document.getElementById("appointmentDate");
const facilities = document.getElementById("facilities");
const button = document.querySelector("button");
const errorMessage = document.getElementById("errorMessage")
const submitSucces = document.getElementById("submitSucces")
//Expresiones Regulares
 console.log(errorMessage);
const alfabetRegExp = /[a-zA-Z]/
const dniRegExp = /^\d{1,2}\.?\d{3}\.?\d{3}$/
const emailRegExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
const dateRegExp = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
const phoneRegExp = /^\+?\(?\d{2,4}\)?[\d\s-]{3,}$/

button.addEventListener("click", (e) => {
    event.preventDefault()

    const validation = validationForm()
    //console.log(validation);

    if (validation == false) {
    errorMessage.style.display = "flex"
    submitSucces.style.display = "noe"
}
    //console.log(email.value)
    else {
        errorMessage.style.display = "none"
        submitSucces.style.display = "flex"
    }

}
)

const validationForm = () => {
    const validFirstName = validationInput(firstName, alfabetRegExp)
    const validLastName = validationInput(lastName, alfabetRegExp)
    const validDni = validationInput(dni, dniRegExp)
    const validBirthDate = validationInput(birthDate, dateRegExp)
    const validPhone = validationInput(phone, phoneRegExp)
    const validEmail = validationInput(email, emailRegExp)
    const validService = validationInput(service, alfabetRegExp)
    const validAppointDate = validationInput(appointmentDate, dateRegExp)
    const validFacilities = validationInput(facilities, alfabetRegExp)
    const gender = document.querySelector('input[name="gender"]:checked');
    const validGender = validationInput(gender, alfabetRegExp)


    if (validFirstName && validLastName && validDni && validBirthDate && validGender && validEmail && validPhone && validService && validAppointDate && validFacilities) {
        return true
    } else return false
}

const validationInput = (data, regExp) => {
    //console.log(data);

    if (data.value == "") {
        data.style.borderColor = "#FF0000"
        return false
    }
    else if (!regExp.test(data.value)) {
        data.style.borderColor = "#FF0000"
        return false
    }
    else {
        data.style.borderColor = "#ccc"
        return true
    }



}
