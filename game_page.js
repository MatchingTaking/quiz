player1Name=localStorage.getItem("player1name");
player2Name=localStorage.getItem("player2name");
player1Score=0;
player2Score=0;
document.getElementById("player1Name").innerHTML=player1Name + " : ";
document.getElementById("player2Name").innerHTML=player2Name + " : ";
document.getElementById("player1Score").innerHTML=player1Score ;
document.getElementById("player2Score").innerHTML=player2Score ;

document.getElementById("playerQuestion").innerHTML="Turno de Pergunta " + player1Name;
document.getElementById("playerAnswer").innerHTML="Turno de Resposta " + player2Name;
function send(){
 getword=document.getElementById("word").value
 word=getword.toLowerCase()

 charAt1=word.charAt(1)
 lenght_divide2=Math.floor(word.lenght/2)
 charAt2=word.charAt(lenght_divide2)

 lenghtminus=word.lenght-1
 charAt3=word.charAt(lenghtminus)

 removecharAt1=word.replace(charAt1,"_")
 removecharAt2=removecharAt1.replace(charAt2,"_")
 removecharAt3=removecharAt2.replace(charAt3,"_")

 questionword="<h4 id='worddisplay'>p."+removecharAt3+"</h4>"
 inputbox="<br> resposta:<input type='text' id='inputcheckbox'>"
 checkbutton="<br><br><button class='btn btn-info'onclick='check()'>checar</button>"
 room=questionword+inputbox+checkbutton;
 document.getElementById("output").innerHTML=room;document.getElementById("word").value='';
}
questionturn="player1";
answerturn="player2";
function check(){
    getanswer=document.getElementById("inputcheckbox").value;
    answer=getanswer.toLowerCase();
    if(answer==word){
    if(answerturn=="player1"){
        player1Score=player1Score+1;
        document.getElementById("player1Score").innerHTML=player1Score;
console.log(player1Score);
    }else{
        player2Score=player2Score+1;
        document.getElementById("player2Score").innerHTML=player2Score;
    }
}
if(questionturn=="player1"){
    questionturn="player2";
    document.getElementById("playerQuestion").innerHTML="Turno de Pergunta " + player2Name;
}else{
    questionturn="player1";
    document.getElementById("playerQuestion").innerHTML="Turno de Pergunta " + player1Name;
}
if(answerturn=="player1"){
    answerturn="player2";
    document.getElementById("playerAnswer").innerHTML="Turno de Resposta " + player2Name;
}else{
    answerturn="player1";
    document.getElementById("playerAnswer").innerHTML="Turno de Resposta " + player1Name;
}
document.getElementById("output").innerHTML="";
}