//generate a random number from 1 to 6
const FirstRandomNumber = Math.floor(Math.random()*6) +1 
// img/dice1.png up to img/dic6.png 
const firstDiceImg = 'img/dice'+ FirstRandomNumber + '.png';
document.querySelectorAll ('img')[0].setAttribute('src',firstDiceImg);
//generate a random number from 1 to 6
const SecondRandomNumber = Math.floor(Math.random()*6) +1 
// img/dice1.png up to img/dic6.png 
const secondDiceImg = 'img/dice'+ SecondRandomNumber + '.png';
document.querySelectorAll ('img')[1].setAttribute('src',secondDiceImg);
// winner 
if (FirstRandomNumber > SecondRandomNumber)
{
    document.querySelector('h2').innerHTML='The winner is user 1!<br>Congrats to user 1 !';
}
else if (FirstRandomNumber < SecondRandomNumber)
{
document.querySelector('h2').innerHTML='The winner is user 2!<br>Congrats to user 2!';
}
else{
    document.querySelector('h2').innerHTML='It is a draw !!'
 }