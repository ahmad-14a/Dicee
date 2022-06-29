
    var ranmdomValue1 = Math.floor(Math.random() * 6) + 1 ;

    if(ranmdomValue1 == 1){
        document.querySelector(".img1").setAttribute('src','images/dice1.png');
    }else if(ranmdomValue1 == 2){
        document.querySelector(".img1").setAttribute('src','images/dice2.png');
    }else if(ranmdomValue1 == 3){
        document.querySelector(".img1").setAttribute('src','images/dice3.png');
    }else if(ranmdomValue1 == 4){
        document.querySelector(".img1").setAttribute('src','images/dice4.png');
    }else if(ranmdomValue1 == 6){
        document.querySelector(".img1").setAttribute('src','images/dice5.png');
    }else{
        document.querySelector(".img1").setAttribute('src','images/dice6.png');
    }
    
    
    
    var ranmdomValue2 = Math.floor(Math.random() * 6) + 1 ;
    
    if(ranmdomValue2 == 1){
        document.querySelector(".img2").setAttribute('src','images/dice1.png');
    }else if(ranmdomValue2 == 2){
        document.querySelector(".img2").setAttribute('src','images/dice2.png');
    }else if(ranmdomValue2 == 3){
        document.querySelector(".img2").setAttribute('src','images/dice3.png');
    }else if(ranmdomValue2 == 4){
        document.querySelector(".img2").setAttribute('src','images/dice4.png');
    }else if(ranmdomValue2 == 6){
        document.querySelector(".img2").setAttribute('src','images/dice5.png');
    }else{
        document.querySelector(".img2").setAttribute('src','images/dice6.png');
    }
    
    
    if(ranmdomValue1 > ranmdomValue2){
        document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
    }else if(ranmdomValue1 < ranmdomValue2){
        document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
    }else{
        document.querySelector("h1").innerHTML="Draw";
    }
    




