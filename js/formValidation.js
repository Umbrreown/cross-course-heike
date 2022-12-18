const fname = document.getElementById("name");
const contactEmail = document.getElementById("contactEmail");
const subject = document.getElementById("subject");


contactForm.addEventListener("submit", (err) => {

    let formWarning = "";

    if (fname.value.length < 1) {
        formWarning = "Please submit a name."
        err.preventDefault()
    } else if (parseInt(fname.value)) {
        formWarning = "Please submit a valid name"
        err.preventDefault()
    } else if (contactEmail.value.length < 6 || !contactEmail.value.includes("@")) {
        formWarning = "Please submit a valid E-Mail address."
        err.preventDefault()
    };

    document.getElementById("formWarningDiv").innerHTML = formWarning;
})