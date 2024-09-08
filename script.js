// selectionner les éléments
let fomulaire = document.querySelector('#formulaire');
let input = document.querySelector('#prix');
let erreur = document.querySelector("small");

// déclaration
let nombreAleatoire = Math.floor(Math.random() * 1001)
let coups = 0;
let nombreUtilisateur;

 
erreur.style.display = "none"

// function pour vérifier
function verifier(nombre){
    let instruction = document.createElement('div')
    if(nombre > nombreAleatoire){
        // moin !
        instruction.textContent =`#(${coups}) c'est moins`
        instruction.className = "instruction moins"
    }else if(nombre < nombreAleatoire){
        // plus !
        instruction.textContent =`#(${coups}) c'est plus`
         instruction.className = "instruction plus"
    }else{
        // fini
        instruction.textContent =`#(${coups}) bravo vous avez trouvé le juste prix`
        instruction.className = "instruction fini"
    }
    document.querySelector('#instructions').prepend(instruction)
 }

 // input Add Event
input.addEventListener("keyup", function(){
    if(isNaN(input.value)){
        erreur.style.display = "inline";
    }else{
        erreur.style.display = "none";
    }
})

// input 
fomulaire.addEventListener('submit', function(e){
 e.preventDefault();
 if(isNaN(input.value) || input.value ===""){
    input.style.borderColor = "red";
 }else{
     coups++;
     input.style.borderColor = "silver";
     nombreUtilisateur = input.value
     input.value = "";
     verifier(nombreUtilisateur);
 }
})