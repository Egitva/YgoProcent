document.getElementById("sumbit").addEventListener("click", function() {
    const userDeck = document.getElementById("player_in").value;
    const userProcent = document.getElementById("cards_need").value;
    const userGarn = document.getElementById("garnet").value;
    document.getElementById('output').innerHTML=null;
    document.getElementById('output').innerHTML+=`<p>Вероятность надровать нужную карту: ${(1-(factorial(userDeck-userProcent)/(factorial(5)*(factorial((userDeck-userProcent)-5))))/(factorial(userDeck)/(factorial(5)*(factorial((userDeck)-5)))))*100}%</p>`
    document.getElementById('output').innerHTML+=`<p>Вероятность надровать гарнет: ${(1-(factorial(userDeck-userGarn)/(factorial(5)*(factorial((userDeck-userGarn)-5))))/(factorial(userDeck)/(factorial(5)*(factorial((userDeck)-5)))))*100}%</p>`
    if (userGarn>1){
        document.getElementById('output').innerHTML+=`<p>Вероятность надровать 2 гарнета: ${(1-(factorial((userDeck-1)-(userGarn-1))/(factorial(4)*(factorial(((userDeck-1)-(userGarn-1))-4))))/(factorial(userDeck-1)/(factorial(4)*(factorial((userDeck-1)-4)))))*100}</p>%`
    }
})
function factorial(n) {
    if (n<0) return null;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n-1);
}