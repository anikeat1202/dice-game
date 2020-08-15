var n = Math.random()*6+1;
var q=Math.random()*6+1;
n=Math.ceil(n);
q=Math.ceil(q);
if(n>6)
{
    n=10-n;
}if(q>6)
{
    q=10-q;
}


var str1="img/dice"+n+".png";
var str2="img/dice"+q+".png";


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

document.querySelector(".dice1").setAttribute("src",str1);
document.querySelector(".dice2").setAttribute("src",str2);

