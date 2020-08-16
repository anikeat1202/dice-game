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
    
  document.querySelector(".dice1").classList.add("pressed");


    document.querySelector(".dice1").setAttribute("src",str1);

    setTimeout(function(){

        document.querySelector(".dice1").classList.remove("pressed");
    
      },100)    
    var q=Math.random()*6+1;
    q=Math.floor(q);
    if(q>6)
    {
        q=10-q;
    }
    
    
    var str2="img/dice"+q+".png";
    document.querySelector(".dice2").classList.add("pressed");
    document.querySelector(".dice2").setAttribute("src",str2);
    
    setTimeout(function(){

        document.querySelector(".dice2").classList.remove("pressed");
    
      },100)    
    if(n==q)
    {
        document.querySelector("h1").innerHTML="<em>Draw!!</em>";
    }
    
    if(n>q)
    {
    
        document.querySelector("h1").innerHTML="<em>Player 1 Wins!!</em>";
    }
    
    else if(n<q){
    
        document.querySelector("h1").innerHTML="<em>Player 2 Wins!!<em>";
    
    }
    
    
    

})

