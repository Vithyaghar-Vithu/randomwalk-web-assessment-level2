var b11, b12, b13, b21, b22, b23, b31, b32, b33;
var btn11, btn12, btn13, btn21, btn22, btn23, btn31, btn32, btn33;
var winner;
var flag = 0;

function initializeVariables() {
    b11 = document.getElementById("b11").value;
    b12 = document.getElementById("b12").value;
    b13 = document.getElementById("b13").value;
    b21 = document.getElementById("b21").value;
    b22 = document.getElementById("b22").value;
    b23 = document.getElementById("b23").value;
    b31 = document.getElementById("b31").value;
    b32 = document.getElementById("b32").value;
    b33 = document.getElementById("b33").value;

    btn11 = document.getElementById("b11");
    btn12 = document.getElementById("b12");
    btn13 = document.getElementById("b13");
    btn21 = document.getElementById("b21");
    btn22 = document.getElementById("b22");
    btn23 = document.getElementById("b23");
    btn31 = document.getElementById("b31");
    btn32 = document.getElementById("b32");
    btn33 = document.getElementById("b33");

    winner = document.getElementById("winnerDisplay").innerHTML;
}

function game(){


    initializeVariables();


    if(b11 == 'X' && b12 == 'X' && b13 == 'X'){
        winner = "Player X won"

        btn11.style.color="red";
        btn12.style.color="red";
        btn13.style.color="red";

        btn21.disabled = true;
        btn22.disabled = true;
        btn23.disabled = true;
        btn31.disabled = true;
        btn32.disabled = true;
        btn33.disabled = true;
        

    }
    else if(b11 == 'X' && b22 == 'X' && b33 == 'X'){
        winner = "Player X won"

        btn11.style.color="red";
        btn22.style.color="red";
        btn33.style.color="red";

        btn12.disabled = true;
        btn13.disabled = true;
        btn21.disabled = true;
        btn23.disabled = true;
        btn31.disabled = true;
        btn32.disabled = true;
    
    }
    else if(b11 == 'X' && b21 == 'X' && b31 == 'X'){
        winner = "Player X won"

        btn11.style.color="red";
        btn21.style.color="red";
        btn31.style.color="red";

        btn12.disabled = true;
        btn13.disabled = true;
        btn22.disabled = true;
        btn23.disabled = true;
        btn32.disabled = true;
        btn33.disabled = true;
    
    }
    else if(b12 == 'X' && b22 == 'X' && b32 == 'X'){
        winner = "Player X won"

        btn12.style.color="red";
        btn22.style.color="red";
        btn32.style.color="red";

        btn11.disabled = true;
        btn13.disabled = true;
        btn21.disabled = true;
        btn23.disabled = true;
        btn31.disabled = true;
        btn33.disabled = true;
    
    }
    else if(b13 == 'X' && b23 == 'X' && b33 == 'X'){
        winner = "Player X won"

        btn13.style.color="red";
        btn23.style.color="red";
        btn33.style.color="red";

        btn11.disabled = true;
        btn12.disabled = true;
        btn21.disabled = true;
        btn22.disabled = true;
        btn31.disabled = true;
        btn32.disabled = true;
    
    }
    else if(b13 == 'X' && b22 == 'X' && b31 == 'X'){
        winner = "Player X won"

        btn13.style.color="red";
        btn22.style.color="red";
        btn31.style.color="red";

        btn11.disabled = true;
        btn12.disabled = true;
        btn21.disabled = true;
        btn22.disabled = true;
        btn31.disabled = true;
        btn32.disabled = true;
    
    }
    else if(b21 == 'X' && b22 == 'X' && b23 == 'X'){
        winner = "Player X won";

        btn21.style.color="red";
        btn22.style.color="red";
        btn23.style.color="red";

        btn11.disabled = true;
        btn12.disabled = true;
        btn13.disabled = true;
        btn31.disabled = true;
        btn32.disabled = true;
        btn33.disabled = true;
    
    }
    else if(b31 == 'X' && b32 == 'X' && b33 == 'X'){
        winner = "Player X won";

        btn31.style.color="red";
        btn32.style.color="red";
        btn33.style.color="red";

        btn11.disabled = true;
        btn12.disabled = true;
        btn13.disabled = true;
        btn21.disabled = true;
        btn22.disabled = true;
        btn23.disabled = true;
    
    }
    
//---------------- FOR "O" -----------------------------
    
    else if(b11 == 'O' && b12 == 'O' && b13 == 'O'){
        winner = "Player O won"

        btn11.style.color="red";
        btn12.style.color="red";
        btn13.style.color="red";

        btn21.disabled = true;
        btn22.disabled = true;
        btn23.disabled = true;
        btn31.disabled = true;
        btn32.disabled = true;
        btn33.disabled = true;
        

    }
    else if(b11 == 'O' && b22 == 'O' && b33 == 'O'){
        winner = "Player O won"

        btn11.style.color="red";
        btn22.style.color="red";
        btn33.style.color="red";

        btn12.disabled = true;
        btn13.disabled = true;
        btn21.disabled = true;
        btn23.disabled = true;
        btn31.disabled = true;
        btn32.disabled = true;
    
    }
    else if(b11 == 'O' && b21 == 'O' && b31 == 'O'){
        winner = "Player O won"

        btn11.style.color="red";
        btn21.style.color="red";
        btn31.style.color="red";

        btn12.disabled = true;
        btn13.disabled = true;
        btn22.disabled = true;
        btn23.disabled = true;
        btn32.disabled = true;
        btn33.disabled = true;
    
    }
    else if(b12 == 'O' && b22 == 'O' && b32 == 'O'){
        winner = "Player O won"

        btn12.style.color="red";
        btn22.style.color="red";
        btn32.style.color="red";

        btn11.disabled = true;
        btn13.disabled = true;
        btn21.disabled = true;
        btn23.disabled = true;
        btn31.disabled = true;
        btn33.disabled = true;
    
    }
    else if(b13 == 'O' && b23 == 'O' && b33 == 'O'){
        winner = "Player O won"

        btn13.style.color="red";
        btn23.style.color="red";
        btn33.style.color="red";

        btn11.disabled = true;
        btn12.disabled = true;
        btn21.disabled = true;
        btn22.disabled = true;
        btn31.disabled = true;
        btn32.disabled = true;
    
    }
    else if(b13 == 'O' && b22 == 'O' && b31 == 'O'){
        winner = "Player O won"

        btn13.style.color="red";
        btn22.style.color="red";
        btn31.style.color="red";

        btn11.disabled = true;
        btn12.disabled = true;
        btn21.disabled = true;
        btn22.disabled = true;
        btn31.disabled = true;
        btn32.disabled = true;
    
    }
    else if(b21 == 'O' && b22 == 'O' && b23 == 'O'){
        winner = "Player O won";

        btn21.style.color="red";
        btn22.style.color="red";
        btn23.style.color="red";

        btn11.disabled = true;
        btn12.disabled = true;
        btn13.disabled = true;
        btn31.disabled = true;
        btn32.disabled = true;
        btn33.disabled = true;
    
    }
    else if(b31 == 'O' && b32 == 'O' && b33 == 'O'){
        winner = "Player O won";

        btn31.style.color="red";
        btn32.style.color="red";
        btn33.style.color="red";

        btn11.disabled = true;
        btn12.disabled = true;
        btn13.disabled = true;
        btn21.disabled = true;
        btn22.disabled = true;
        btn23.disabled = true;
    
    }
    else if ((b11 == 'X' || b11 == 'O') && (b12 == 'X' || b12 == 'O') && (b13 == 'X' || b13 == 'O') && (b21 == 'X' || b21 == 'O') && (b22 == 'X' || b22 == 'O') && (b23 == 'X' || b23 == 'O') && (b31 == 'X' || b31 == 'O') && (b32 == 'X' || b32 == 'O') && (b33 == 'X' || b33 == 'O')){
        winner = "Match Tie";
    }

    else{
        if(flag%2 == 0){
            winner = "Player X Turn";
        }
        else{
            winner = "Player O Turn";
        }
    }
}

function button11(){
    initializeVariables();
    if( flag % 2 == 0 ){
        b11="X";
        btn11.value="X"
        btn11.disabled = true;
        flag+=1;
    }
    else{
        b11="O";
        btn11.value="X"
        btn11.disabled = true;
        flag+=1;
    }

    game();

}
function button12(){
    initializeVariables();
    if( flag % 2 == 0 ){
        b12="X";
        btn12.value="X";
        btn12.disabled = true;
        flag+=1;
    }
    else{
        b12="O";
        btn12.value="X";
        btn12.disabled = true;
        flag+=1;
    }
    game();
}
function button13(){
    initializeVariables();
    if( flag % 2 == 0 ){
        b13="X";
        btn13.value="X";
        btn13.disabled = true;
        flag+=1;
    }
    else{
        b13="O";
        btn13.value="X";
        btn13.disabled = true;
        flag+=1;
    }
    game();
}

function button21(){
    initializeVariables();
    if( flag % 2 == 0 ){
        b21="X";
        btn21.value="X";
        btn21.disabled = true;
        flag+=1;
    }
    else{
        b21="O";
        btn21.value="X";
        btn21.disabled = true;
        flag+=1;
    }
    game();
}
function button22(){
    initializeVariables();
    if( flag % 2 == 0 ){
        b22="X";
        btn22.value="X";
        btn22.disabled = true;
        flag+=1;
    }
    else{
        b22="O";
        btn22.value="X";
        btn22.disabled = true;
        flag+=1;
    }
    game();
}
function button23(){
    initializeVariables();
    if( flag % 2 == 0 ){
        b23="X";
        btn23.value="X";
        btn23.disabled = true;
        flag+=1;
    }
    else{
        b23="O";
        btn23.value="X";
        btn23.disabled = true;
        flag+=1;
    }
    game();
}

function button31(){
    initializeVariables();
    if( flag % 2 == 0 ){
        b31="X";
        btn31.value="X";
        btn31.disabled = true;
        flag+=1;
    }
    else{
        b31="O";
        btn31.value="X";
        btn31.disabled = true;
        flag+=1;
    }
    game();
}
function button32(){
    initializeVariables();
    if( flag % 2 == 0 ){
        b32="X";
        btn32.value="X";
        btn32.disabled = true;
        flag+=1;
    }
    else{
        b32="O";
        btn32.value="X";
        btn32.disabled = true;
        flag+=1;
    }
    game();
}
function button33(){
    initializeVariables();
    if( flag % 2 == 0 ){
        b33="X";
        btn33.value="X";
        btn33.disabled = true;
        flag+=1;
    }
    else{
        b33="O";
        btn33.value="X";
        btn33.disabled = true;
        flag+=1;
    }
    game();
}

