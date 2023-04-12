document.getElementById("alert-column").style.display = "none";

let errors = [];

function validateForm(){
    
    checkEmptyField("voornaam", "Het veld voornaam is vereist.");
    checkEmptyField("achternaam", "Het veld achternaam is vereist.")
    checkEmptyField("gebruikersnaam", "Het veld gebruikersnaam is vereist.");
    checkEmptyField("adres", "Het veld adres is vereist.");
    checkEmptyField("land", "Het veld land is vereist.");
    checkEmptyField("provincie", "Het veld provincie is vereist.");

    checkEmptyField("email", "Het veld email is vereist.");

    alert(errors.join(', '));
    errors = [];
}

function checkEmptyField(veld, melding){
    //We kijken na of de value van het veld empty is of whitespace. (whitespace kunnen we controleren met trim())
    let elementValue = document.getElementById(veld).value;
    if(elementValue.trim() == ""){
        errors[errors.length] = melding;
    }

    //validate email en als dit false is dan voegen we een error toe aan the error array.
    else if(!validateEmail(elementValue) && veld == "email"){
        errors[errors.length] = "E-mailadres is niet correct."; 
    }
}

function validateEmail(email){

    //Nakijken of de string een @ bevat.
    if(email.indexOf('@') == -1){
        return false;
    }

    return true;
}

function validatePassword(password){
    //Controle wachtwoord.

}