document.querySelector("button").addEventListener("click",function(){

var audio = new Audio("./sound/dicesound.mp3");
audio.play();

    var n = Math.random()*6+1;

    n=Math.floor(n);
    if(n>6)
    {
        n=10-n;
    }
    
    var str1="img/dice"+n+".png";
    
    document.querySelector(".dice1").setAttribute("src",str1);
    
    var q=Math.random()*6+1;
    q=Math.floor(q);
    if(q>6)
    {
        q=10-q;
    }
    
    
    var str2="img/dice"+q+".png";
    document.querySelector(".dice2").setAttribute("src",str2);
    
    
    if(n==q)
    {
        document.querySelector("h1").innerHTML="Draw!!";
    }
    
    if(n>q)
    {
    
        document.querySelector("h1").innerHTML="Player 1 Wins!!";
    }
    
    else if(n<q){
    
        document.querySelector("h1").innerHTML="Player 2 Wins!!";
    
    }
    
    
    

})

