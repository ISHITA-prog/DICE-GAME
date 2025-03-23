var diceCount=Math.floor(Math.random()*6)+1;
if(diceCount==1){
    document.querySelector("img").srcset="/images/dice1.png";

}else if(diceCount==2){
    document.querySelector("img").srcset="/images/dice2.png";

}else if(diceCount==3){
    document.querySelector("img").srcset="/images/dice3.png";
    
}else if(diceCount==4){
    document.querySelector("img").srcset="/images/dice4.png";
    
}else if(diceCount==5){
    document.querySelector("img").srcset="/images/dice5.png";
    
}else{
    document.querySelector("img").srcset="/images/dice6.png";
    
}

var diceCount2=Math.floor(Math.random()*6)+1;
if(diceCount2==1){
    document.querySelector("img.img2").srcset="/images/dice1.png";

}else if(diceCount2==2){
    document.querySelector("img.img2").srcset="/images/dice2.png";

}else if(diceCount2==3){
    document.querySelector("img.img2").srcset="/images/dice3.png";
    
}else if(diceCount2==4){
    document.querySelector("img.img2").srcset="/images/dice4.png";
    
}else if(diceCount2==5){
    document.querySelector("img.img2").srcset="/images/dice5.png";
    
}else{
    document.querySelector("img.img2").srcset="/images/dice6.png";
    
}

if(diceCount>diceCount2){
    document.querySelector("h1").textContent="Player 1 wins!";
}else if(diceCount<diceCount2){
    document.querySelector("h1").textContent="Player 2 wins!";
}else{
    document.querySelector("h1").textContent="Draw!";
}