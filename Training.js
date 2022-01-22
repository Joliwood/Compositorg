
let app = {
    minNumber: 1,
    maxNumber: 1000,
    init: function() {
        console.log("Je suis dans app init");
        console.log(app.minNumber);
        
        let randomNumber = app.generateRandomNumber(app.minNumber, app.maxNumber);

        console.log(randomNumber);

        let monNum = false;
        while (monNum === false) {

        let userValue = prompt("Devine un chiffre entre 1 et 1000 stp");

        console.log(userValue);
  
        if (userValue === null) {
            alert("WTF MEC TU FAIS QUOI LA ?");
            monNum = false;
        }

        if (parseInt(userValue, 10) > randomNumber) {
            alert("C'est trop élevé pov type");
            monNum = false;
        }

        if (parseInt(userValue, 10) < randomNumber) {
            alert("C'est trop bas pov type");
            monNum = false;
        }

        if (parseInt(userValue, 10) === randomNumber) {
            alert("GGWP");
            monNum = true;
        }
        }

    },

    generateRandomNumber: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
    },

}

console.log(app.init.userValue);


document.getElementById("guessnumbutton").addEventListener("click", app.init);
