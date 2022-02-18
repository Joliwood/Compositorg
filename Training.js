
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

let app2 = {

    init: function() {
        
    // un blur pour la perte de focus
    // un let = mon information rentrée dans le placeholder
    let bloc4text = document.getElementById("infosend");
    // un let pour attribuer le texte à respecter (qui est dans le html)
    let respectText = document.getElementById("torespect").innerHTML;
    // un let pour compter les erreurs, soit 0, 1 ou 2
    let nbErrors = 0;
    // une boucle if (si c'est pas bon, ajoute une class au placeholder pour ajouter une bordure rouge, si c'est bon, ça ajoute aussi une bordure mais verte)
    
        bloc4text.addEventListener('blur', () => {
        if (respectText === bloc4text.value) {
            document.getElementById("infosend").classList.remove("wronganswer");
            document.getElementById("infosend").classList.add("goodanswer");
            console.log("C'est une bonne réponse !");
        } 
        if (respectText !== bloc4text.value) {
            document.getElementById("infosend").classList.remove("goodanswer");
            document.getElementById("infosend").classList.add("wronganswer");
            console.log("C'est une mauvaise réponse !");
        }
        });
    
    // une fonction globale qui se déclenchera au clic sur l'envoie à l'équipe
        document.getElementById("sendbutton").addEventListener("click", () => {
    // une seconde boucle if (si l'userValue === azpoazpo21 alors le let compteur = 0, si c'est azpoazpo, let compteur = 1, else -> let compteur = 2)
        if (bloc4text.value === respectText) {
            nbErrors = 0;
        } else if (bloc4text.value === "azpoazpo") {
            nbErrors = 1;
        } else {
            nbErrors = 2;
        }
    // une troisième boucle if (si c'est bon -> je sais pas encore, si c'est pas bon ça va créer une liste avec :)
        if (nbErrors > 0) {

        let errorMessage = ""; 
        let newUlElement = document.createElement("ul");
        let errorElement = document.getElementById("errors");

        if (nbErrors === 1) {
            errorMessage = "Tu as oublié de mettre 21";
        } else if (nbErrors === 2) {
            errorMessage = "Tu fais pas d'efforts aussi...";
        } else {
            errorMessage = "Bravo, tu as créé un bug dans la matrice !";
        }

        errorElement.innerHTML = "";
        newUlElement.innerHTML += "<li class='errors'>" + errorMessage + "</li>";
        errorElement.appendChild(newUlElement);
        }
    // compter le nombre d'erreurs, et créer une liste en fonction intégré dans le html entre le placeholder et le button
        })

    }
}

let app3 = {

  init: function() {
      
    var map = {
      models: {
          squid: [
              "XXXXXXXXX",
              "XX-----XX",
              "XX-8-8-XX",
              "X-------X",
              "XX-X-X-XX",
              "X-xx-xx-X",
              "XXXXXXXXX",
          ],
          crab: [
              "---------",
              "---X-X---",
              "--XXXXX--",
              "--XOXOX--",
              "-XXXXXXX-",
              "-X-X-X-X-",
              "---------",
          ],
          space: [
              "-----------",
              "----X-X----",
              "---XXXXX---",
              "--XX-X-XX--",
              "---xoxox---",
              "--XXXXXXX--",
              "-X-X---X-X-",
              "----X-X----",
              "-----------",
          ],
          ghost: [
              "----------------",
              "------OOOO------",
              "----OOOOOOOO----",
              "---OOOOOOOOOO---",
              "--OOO--OOOO--O--",
              "--OO----OO------",
              "--OO--88OO--OO--",
              "-OOO--88OO--88O-",
              '-OOOO--OOOO--OO-',
              "-OOOOOOOOOOOOOO-",
              "-OOOOOOOOOOOOOO-",
              "-OOOOOOOOOOOOOO-",
              "-OOOOOOOOOOOOOO-",
              "-OO-OOO--OOO-OO-",
              "-O---OO--OO---O-",
              "----------------",
          ],
          deadhead: [
              "---------",
              "-X-XXX-X-",
              "--XXXXX--",
              "--XOXOX--",
              "--XXXXX--",
              "-X-XXX-X-",
              "---------",
          ],
          myth: [
              "XXXXXXXXXXXXX",
              "XXX-XXXXX-XXX",
              "XXXX-XXX-XXXX",
              "XXX-------XXX",
              "X-----------X",
              "X-X-------X-X",
              "X-X-XXXXX-X-X",
              "XXXX--X--XXXX",
              "XXXXXXXXXXXXX",
          ],
        },
         types: {
             "-": "empty",
             "X": "plain",
             "O": "light",
             "8": "highlight",
         },
    };
}

}

document.getElementById("guessnumbutton").addEventListener("click", app.init);
document.addEventListener("DOMContentLoaded", app2.init);
document.getElementById("spaceInvader").addEventListener("click", app3.init);