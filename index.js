var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");
var message = document.getElementById("print");  
function my_func(){
    if(b1.innerHTML == "X" && b2.innerHTML == "X" && b3.innerHTML == "X"){
        message.innerHTML = "Congratulations! Player1 wins";
        document.getElementById("b4").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true; 
        window.alert('Congratulations! Player1 wins'); 
    }
    else if(b1.innerHTML == "X" && b4.innerHTML == "X" && b7.innerHTML == "X"){
        message.innerHTML = "Congratulations! Player1 wins";
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true; 
        window.alert('Congratulations! Player1 wins');
    }
    else if(b7.innerHTML == "X" && b8.innerHTML == "X" && b9.innerHTML == "X"){
        message.innerHTML = "Congratulations! Player1 wins";
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b1").disabled = true; 
        window.alert('Congratulations! Player1 wins');
    }
    else if(b3.innerHTML == "X" && b6.innerHTML == "X" && b9.innerHTML == "X"){
        message.innerHTML = "Congratulations! Player1 wins";
        document.getElementById("b1").disabled = true; 
        document.getElementById("b2").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        window.alert('Congratulations! Player1 wins');
    }
    else if(b1.innerHTML == "X" && b5.innerHTML == "X" && b9.innerHTML == "X"){
        message.innerHTML = "Congratulations! Player1 wins";
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        window.alert('Congratulations! Player1 wins');
    }
    else if(b3.innerHTML == "X" && b5.innerHTML == "X" && b7.innerHTML == "X"){
        message.innerHTML = "Congratulations! Player1 wins";
        document.getElementById("b1").disabled = true; 
        document.getElementById("b2").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true; 
        window.alert('Congratulations! Player1 wins');
    }
    else if(b2.innerHTML == "X" && b5.innerHTML == "X" && b8.innerHTML == "X"){
        message.innerHTML = "Congratulations! Player1 wins";
        document.getElementById("b1").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b9").disabled = true; 
        window.alert('Congratulations! Player1 wins');
    }
    else if(b4.innerHTML == "X" && b5.innerHTML == "X" && b6.innerHTML == "X"){
        message.innerHTML = "Congratulations! Player1 wins";
        document.getElementById("b1").disabled = true; 
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true; 
        window.alert('Congratulations! Player1 wins');
    }

    else if(b1.innerHTML == "0" && b2.innerHTML == "0" && b3.innerHTML == "0"){
        message.innerHTML = "Congratulations! Player2 wins";
        document.getElementById("b4").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true; 
        window.alert('Congratulations! Player2 wins'); 
    }
    else if(b1.innerHTML == "0" && b4.innerHTML == "0" && b7.innerHTML == "0"){
        message.innerHTML = "Congratulations! Player2 wins";
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true; 
        window.alert('Congratulations! Player2 wins');
    }
    else if(b7.innerHTML == "0" && b8.innerHTML == "0" && b9.innerHTML == "0"){
        message.innerHTML = "Congratulations! Player2 wins";
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b1").disabled = true; 
        window.alert('Congratulations! Player2 wins');
    }
    else if(b3.innerHTML == "0" && b6.innerHTML == "0" && b9.innerHTML == "0"){
        message.innerHTML = "Congratulations! Player2 wins";
        document.getElementById("b1").disabled = true; 
        document.getElementById("b2").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        window.alert('Congratulations! Player2 wins');
    }
    else if(b1.innerHTML == "0" && b5.innerHTML == "0" && b9.innerHTML == "0"){
        message.innerHTML = "Congratulations! Player2 wins";
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        window.alert('Congratulations! Player2 wins');
    }
    else if(b3.innerHTML == "0" && b5.innerHTML == "0" && b7.innerHTML == "0"){
        message.innerHTML = "Congratulations! Player2 wins";
        document.getElementById("b1").disabled = true; 
        document.getElementById("b2").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true; 
        window.alert('Congratulations! Player2 wins');
    }
    else if(b2.innerHTML == "0" && b5.innerHTML == "0" && b8.innerHTML == "0"){
        message.innerHTML = "Congratulations! Player2 wins";
        document.getElementById("b1").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b9").disabled = true; 
        window.alert('Congratulations! Player2 wins');
    }
    else if(b4.innerHTML == "0" && b5.innerHTML == "0" && b6.innerHTML == "0"){
        message.innerHTML = "Congratulations! Player2 wins";
        document.getElementById("b1").disabled = true; 
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true; 
        window.alert('Congratulations! Player2 wins');
    }
    else if((b1.innerHTML == 'X' || b1.innerHTML == '0') && (b2.innerHTML == 'X' || b2.innerHTML == '0') && (b3.innerHTML == 'X' || b3.innerHTML == '0') &&  (b4.innerHTML == 'X' || b4.innerHTML == '0') 
    && (b5.innerHTML == 'X' || b5.innerHTML == '0') && (b6.innerHTML == 'X' || b6.innerHTML == '0') && (b7.innerHTML == 'X' || b7.innerHTML == '0') && (b8.innerHTML == 'X' || b8.innerHTML == '0') && (b9.innerHTML == 'X' || b9.innerHTML == '0')){
        message.innerHTML = "Draw!";
        window.alert('Draw!');
    }
    else{
        if (flag == 1) { 
            message.innerHTML = "Player 1 Turn"; 
        } 
        else { 
            message.innerHTML = "Player 2 Turn"; 
        } 
    }
}

flag = 1;

function my_func1(){
    if(flag == 1){
        b1.innerHTML = "X";
        b1.style.pointerEvents = 'none';
        flag = 0;
    }
    else{
        b1.innerHTML = "0";
        b1.style.pointerEvents = 'none';
        flag = 1;
    }
}

function my_func2(){
    
    if(flag == 1){
        b2.innerHTML = "X";
        b2.style.pointerEvents = 'none';
        flag = 0;
    }
    else{
        b2.innerHTML = "0";
        b2.style.pointerEvents = 'none';
        flag = 1;
    }
}

function my_func3(){
    if(flag == 1){
        b3.innerHTML = "X";
        b3.style.pointerEvents = 'none';
        flag = 0;
    }
    else{
        b3.innerHTML = "0";
        b3.style.pointerEvents = 'none';
        flag = 1;
    }
}

function my_func4(){
    if(flag == 1){
        b4.innerHTML = "X";
        b4.style.pointerEvents = 'none';
        flag = 0;
    }
    else{
        b4.innerHTML = "0";
        b4.style.pointerEvents = 'none';
        flag = 1;
    }
}

function my_func5(){
    if(flag == 1){
        b5.innerHTML = "X";
        b5.style.pointerEvents = 'none';
        flag = 0;
    }
    else{
        b5.innerHTML = "0";
        b5.style.pointerEvents = 'none';
        flag = 1;
    }
}

function my_func6(){
    if(flag == 1){
        b6.innerHTML = "X";
        b6.style.pointerEvents = 'none';
        flag = 0;
    }
    else{
        b6.innerHTML = "0";
        b6.style.pointerEvents = 'none';
        flag = 1;
    }
}
function my_func7(){
    if(flag == 1){
        b7.innerHTML = "X";
        b7.style.pointerEvents = 'none';
        flag = 0;
    }
    else{
        b7.innerHTML = "0";
        b7.style.pointerEvents = 'none';
        flag = 1;
    }
}
function my_func8(){
    if(flag == 1){
        b8.innerHTML = "X";
        b8.style.pointerEvents = 'none';
        flag = 0;
    }
    else{
        b8.innerHTML = "0";
        b8.style.pointerEvents = 'none';
        flag = 1;
    }
}
function my_func9(){
    if(flag == 1){
        b9.innerHTML = "X";
        b9.style.pointerEvents = 'none';
        flag = 0;
    }
    else{
        b9.innerHTML = "0";
        b9.style.pointerEvents = 'none';
        flag = 1;
    }
}



function reset(){
    location.reload();
    b1.innerHTML = "";
    b2.innerHTML = "";
    b3.innerHTML = "";
    b4.innerHTML = "";
    b5.innerHTML = "";
    b6.innerHTML = "";
    b7.innerHTML = "";
    b8.innerHTML = "";
    b9.innerHTML = "";
}