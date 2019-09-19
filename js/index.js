let canvas = document.getElementById("tutoriel");
let ctx = canvas.getContext("2d");
ctx.strokeStyle = '#9d0007';


let wordtoguess= [
      ["L","O","V","E"],
      ["J","A","V","A","S","C","R","I","P","T"],
      ["F","O","R","E","V","E","R"],
      ["H","E","L","L","O","W","O","R","L","D"],
      ["C","O","D","I","N","G"]
]
let random = Math.floor((Math.random()*(wordtoguess.length-1))); 
// Les mots a deviner seront dans ce tableau  
let randomWord = wordtoguess[random]; 
let tableWord = new Array(randomWord.length);
let mistake = 0;

 // chaque lettre sera remplacée par un underscore dans le champ deviner
    for (let i = 0; i < tableWord.length; i++){
        tableWord[i] = "_ ";
    }
    
    // affichage champs deviner
    function printTableWord(){
        for (let i = 0; i < tableWord.length; i++){
            let guessField = document.getElementById("guess-field");
            let letter = document.createTextNode(tableWord[i]);
            guessField.appendChild(letter);
        }
    }
    
    //verifier que la lettre rentrée est dans le mot une ou plusieurs fois
    let letterMatch = function(){
        let win;
        let f = document.getElementById("answer"); 
        let checkLet= f.value; // lettre rentrée
        checkLet = checkLet.toUpperCase();
        for (let i = 0; i < randomWord.length; i++){
            if(randomWord[i] === checkLet){
                tableWord[i] = checkLet + " ";
                win = true;
            }
            f.value = "";
        }
    
        //effacer le champ deviner et en mettre un nouveau
        let guessField = document.getElementById("guess-field");
        guessField.innerHTML=""; 
        printTableWord();
      
        // si la lettre n'est pas dans le mot, la lettre ira dans "wrong letters"-list et le pendu apparait
        if(!win){
            let guessLetter = document.getElementById("wrong-answer");
            let letter = document.createTextNode(" " + checkLet);
            // guessLetter.appendChild(letter); 
            mistake++;
        }
        
       
        //verifier que toute les lettres ont été trouvé
        let fullWordGuessed = true;
        for (let i = 0; i < tableWord.length; i++){
            if(tableWord[i] === "_ "){
                fullWordGuessed = false;
            }
        }
        if(fullWordGuessed){
            window.alert("You win!");
        }


//déclancher le pendu pour chaque erreur

if(mistake === 1){
// tete

ctx.beginPath();
// ctx.moveTo(250,250);
ctx.arc(220,150,30,0,Math.PI*2,true);
ctx.moveTo(240,170);
// bouche
ctx.arc(220,170,20,0, Math.PI, true); 
ctx.moveTo(215,140);
// oeil1
ctx.arc(210,140, 6, 0, Math.PI * 2, true);  
ctx.moveTo(235,140);
// oeil 2
ctx.arc(230,140, 6, 0, Math.PI * 2, true); 

ctx.stroke();
ctx.closePath();

}

if(mistake === 2){
// corps
ctx.beginPath();
ctx.moveTo(220,180);
ctx.lineTo(220,300);
ctx.stroke();
ctx.closePath();
}
if(mistake === 3){
   // bras gauche
ctx.beginPath();
ctx.moveTo(220,200);
ctx.lineTo(170,240);
ctx.stroke();
ctx.closePath();
}
if(mistake === 4){
// bras droit
ctx.beginPath();
ctx.moveTo(220,200);
ctx.lineTo(280,240);
ctx.stroke();
ctx.closePath();
}
if(mistake === 5){
// jambe gauche

ctx.beginPath();
ctx.moveTo(220,300);
ctx.lineTo(170,340);
ctx.stroke();
ctx.closePath();
}
//once you got six wrong letters, you lose
if(mistake === 6){
    // jambe droite
    ctx.beginPath();
    ctx.moveTo(220,300);
    ctx.lineTo(280,340);
    ctx.stroke();
    ctx.closePath();
    window.alert("You're dead now !");
        }
    }

function init(){
    printTableWord();
}
window.onload = init;

ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(50,400);
ctx.moveTo(50,50);
ctx.lineTo(220,50);
ctx.moveTo(220,50);
ctx.lineTo(220,120);
ctx.stroke();
ctx.closePath();
// poutre haut

ctx.beginPath();
ctx.moveTo(100,50);
ctx.lineTo(50,100);
ctx.stroke();
ctx.closePath();

// poutre bas droite

ctx.beginPath();
ctx.moveTo(50,400);
ctx.lineTo(90,420);
ctx.stroke();
ctx.closePath();

// poutre bas gauche

ctx.beginPath();
ctx.moveTo(50,400);
ctx.lineTo(20,420);
ctx.stroke();
ctx.closePath();


// ctx.fillRect(10,20,100,200);
// ctx.strokeRect(300,300,100,200);

// ctx.beginPath();
// ctx.moveTo(100,200);
// ctx.lineTo(100,300);
// ctx.lineTo(200,300);
// ctx.lineTo(100,200);
// ctx.lineTo(100,200);
// ctx.stroke();

// ecrire un M
/*ctx.beginPath();
ctx.moveTo(100,200);
ctx.lineTo(100,50);
ctx.lineTo(150,150);
ctx.lineTo(200,50);
ctx.lineTo(200,200);
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(390,480);
ctx.lineTo(440,240);
ctx.lineTo(490,480);
ctx.stroke();
ctx.closePath();

// faire un cercle*/

/*ctx.beginPath();
// ctx.moveTo(250,250);
ctx.arc(100,100,50,0,Math.PI*2,true);
ctx.moveTo(130,100);

ctx.arc(100, 105,30,0, Math.PI, false); 
ctx.moveTo(95,85);

ctx.arc(90,80, 6, 0, Math.PI * 2, true);  
ctx.moveTo(115, 80);

ctx.arc(110,80, 6, 0, Math.PI * 2, true); 

ctx.stroke();*/


/*ctx.beginPath();
// ctx.moveTo(250,250);
ctx.arc(100,100,50,0,Math.PI*2,true);
ctx.moveTo(130,130);

ctx.arc(100, 130,30,0, Math.PI, true); 
ctx.moveTo(95,85);

ctx.arc(90,80, 6, 0, Math.PI * 2, true);  
ctx.moveTo(115, 80);

ctx.arc(110,80, 6, 0, Math.PI * 2, true); 

ctx.stroke();*/










    
  













