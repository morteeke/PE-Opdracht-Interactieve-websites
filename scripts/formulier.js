document.getElementById("alert-column").style.display = "none";

let errors = [];

function validateForm(){
    
    checkEmptyField("voornaam", "Het veld voornaam is vereist.");
    checkEmptyField("achternaam", "Het veld achternaam is vereist.")
    checkEmptyField("gebruikersnaam", "Het veld gebruikersnaam is vereist.");
    checkEmptyField("adres", "Het veld adres is vereist.");
    checkEmptyField("land", "Het veld land is vereist.");
    checkEmptyField("provincie", "Het veld provincie is vereist.");

}

function checkEmptyField(veld, melding){
    //We kijken na of de value van het veld empty is of whitespace. (whitespace kunnen we controleren met trim())
    if(document.getElementById(veld).value.trim() == ""){
        errors[errors.length] = melding;
    }
}

function validateEmail(email){
    //Hier gaan we de email valideren.
    if(!email.indexOf('@')){
        return false;
    }

    return true;
}

function validatePassword(password){
    //Controle wachtwoord.

}