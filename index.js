
    // var ranmdomValue1 = Math.floor(Math.random() * 6) + 1 ;

    // if(ranmdomValue1 == 1){
    //     document.querySelector(".img1").setAttribute('src','images/dice1.png');
    // }else if(ranmdomValue1 == 2){
    //     document.querySelector(".img1").setAttribute('src','images/dice2.png');
    // }else if(ranmdomValue1 == 3){
    //     document.querySelector(".img1").setAttribute('src','images/dice3.png');
    // }else if(ranmdomValue1 == 4){
    //     document.querySelector(".img1").setAttribute('src','images/dice4.png');
    // }else if(ranmdomValue1 == 6){
    //     document.querySelector(".img1").setAttribute('src','images/dice5.png');
    // }else{
    //     document.querySelector(".img1").setAttribute('src','images/dice6.png');
    // }
    
    
    
    // var ranmdomValue2 = Math.floor(Math.random() * 6) + 1 ;
    
    // if(ranmdomValue2 == 1){
    //     document.querySelector(".img2").setAttribute('src','images/dice1.png');
    // }else if(ranmdomValue2 == 2){
    //     document.querySelector(".img2").setAttribute('src','images/dice2.png');
    // }else if(ranmdomValue2 == 3){
    //     document.querySelector(".img2").setAttribute('src','images/dice3.png');
    // }else if(ranmdomValue2 == 4){
    //     document.querySelector(".img2").setAttribute('src','images/dice4.png');
    // }else if(ranmdomValue2 == 6){
    //     document.querySelector(".img2").setAttribute('src','images/dice5.png');
    // }else{
    //     document.querySelector(".img2").setAttribute('src','images/dice6.png');
    // }
    
    function genRandNumbers(){

        var ranmdomValue1 = Math.floor(Math.random() * 6) + 1; 
        var randomDiceImage = "dice" + ranmdomValue1 + ".png";  
        var randomImageSource = "images/" + randomDiceImage; 
        var image1 = document.querySelectorAll("img")[0];
        image1.setAttribute("src", randomImageSource);
    
    
    
        var ranmdomValue2 = Math.floor(Math.random() * 6) + 1;
        var randomImageSource2 = "images/dice" + ranmdomValue2 + ".png";
        document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
    
    
    
        if(ranmdomValue1 > ranmdomValue2){
            document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
        }else if(ranmdomValue1 < ranmdomValue2){
            document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
        }else{
            document.querySelector("h1").innerHTML="Draw";
        }

    }

    document.querySelector(".btn").addEventListener("click",genRandNumbers);

    
    




