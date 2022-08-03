
    //=============== START - DECLARATION DU FORMULAIRE ===============//

    (function() {
        'use strict'

        let form = document.getElementById('ContactForm');

    form.addEventListener('submit', function(event) {

        Array.from(form.elements).forEach((input) => {
            if (input.type !== "submit") {
                if (!validateFields(input)) {

                    event.preventDefault();
                    event.stopPropagation();

                    input.classList.remove("is-valid");
                    input.classList.add("is-invalid");
                    input.nextElementSibling.style.display = 'block';
                }
                else {
                    input.nextElementSibling.style.display = 'none';
                    input.classList.remove("is-invalid");
                    input.classList.add("is-valid");
                }
            }
        });
        }, false)
    })()


//=============== END - DECLARATION DU FORMULAIRE ===============//

    // Validation d'un champ REQUIRED
    function validateRequired(input) {
        return !(input.value == null || input.value == "");
    }

    function validateFields(input) {

    let fieldName = input.name;

    // Validaton de l'input PRENOM
    if (fieldName == "firstName") {
        if (!validateFirstname(input)) {
            return false;
        }

        return (true);
    }
    if (fieldName =="lastName"){
        if(!validateLastname(input)){
            return false;
        }
        return (true);
    }
    if (fieldName =="email"){
        if(!validateEmail(input)){
            return false;
        }
        return (true);
    }
    if (fieldName =="phoneNumber"){
        if(!validatePhoneNumber(input)){
            return false;
        }
        return (true)
    }
    if (fieldName =="Message"){
        if(!validateLength(input))
        return false;
    }
        return (true)
}

    // Validation d'un champ Prénom
    function validateFirstname(input) {
        
        return !(input.value == null || input.value == "");
    }

    // Validation d'un champ Nom
    function validateLastname(input) {
    
        return !(input.value == null || input.value == "");
    }

    // Validation du nombre de caractéres : MIN & MAX
    function validateLength(input, minLength, maxLength) {
        return !(input.value.length < minLength || input.value.length > maxLength);
    }

    // Validation des caractères : LATIN & LETTRES
    function validateText(input) {
        return input.value.match("^[A-Za-z]+$");
    }

    // Validation d'un e-mail
    function validateEmail(input) {
        let EMAIL = input.value;
        let POSAT = EMAIL.indexOf("@");
        let POSDOT = EMAIL.lastIndexOf(".");

        return !(POSAT < 1 || (POSDOT - POSAT < 2));
    }

    // Validation du Numéro de téléphone
    function validatePhoneNumber(input) {
        return input.value.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/);
    }
//Focus automatique sur 1er champ 'UserName'
let firstName = document.getElementById('firstName')
    firstName.focus();

