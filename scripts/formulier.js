const alertDiv = document.getElementById("alert-column");
alertDiv.style.display = "none";

let errors = [];

function validateForm(){
    
    checkEmptyField("voornaam", "Het veld voornaam is vereist.");
    checkEmptyField("achternaam", "Het veld achternaam is vereist.")
    checkEmptyField("gebruikersnaam", "Het veld gebruikersnaam is vereist.");
    checkEmptyField("adres", "Het veld adres is vereist.");
    checkEmptyField("land", "Het veld land is vereist.");
    checkEmptyField("provincie", "Het veld provincie is vereist.");

    checkEmptyField("email", "Het veld email is vereist.");

    checkEmptyField("wachtwoord", "Het veld wachtwoord is vereist.");
    checkEmptyField("herhaalWachtwoord", "Het veld herhaal wachtwoord is vereist.");

    validatePayment(checkSelectedRadioButton());
    showAlerts();
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

    else if(veld == "herhaalWachtwoord" && validatePassword() != ""){
        errors[errors.length] = validatePassword();
    }
}

function validateEmail(email){
    const alphabet = ['a','z','e','r','t','y','u','i','o','p','q','s','d','f','g','h','j','k','l','m','w','x','c','v','b','n'];

    //Nakijken of de string een @ bevat.
    if(email.indexOf('@') == -1){
        return false;
    }
    //we kijken na of de eerste character na de @ kan geparsed worden. zo niet dan gaan we kijken of de eerste karakter na @ voorkomt in het alfabet.
    else if(isNaN(parseInt(email.split('@')[1][0]))){
        if(alphabet.indexOf(email.split('@')[1][0]) == -1){
            return false;
        }
    }

    return true;
}

function validatePassword(){

    const pass = document.getElementById("wachtwoord").value;
    const repeatPass = document.getElementById("herhaalWachtwoord").value;
    //Controle wachtwoord.
    if(pass != repeatPass){
        return "Je wachtwoorden komen niet overeen.";
    }
    else if(pass.length < 7){
        return "Je wachtwoord moet minstens uit 7 characters bestaan.";
    }

    return "";
}

function showAlerts(){

    const dangerDiv = document.getElementById("danger-div");
    const successDiv = document.getElementById("success-div");
    const infoDiv = document.getElementById("info-div");

    alertDiv.style.display = "initial";
    if(errors.length != 0){
        
        dangerDiv.style.display = "inherit";
        dangerDiv.getElementsByTagName("p")[0].innerText = errors.join("\n");
        successDiv.style.display = "none";
        infoDiv.style.display = "none";
    }
    else{
        dangerDiv.style.display = "none";
        successDiv.style.display = "inherit";
        infoDiv.style.display = "inherit";
    }
}

function validatePayment(veld){
    document.getElementById("info-div").getElementsByTagName("p")[0].innerText = "Je betalingswijze is " + veld + ".";
}

function checkSelectedRadioButton(){

    //we loopen door een button lijst om te kijken welke checked is.
    let buttons = document.getElementsByName("betalingRadio");
    
    for(let c = 0; c < buttons.length; c++){
        if(buttons[c].checked){
            return buttons[c].value;
        }
    }

    return false;
}