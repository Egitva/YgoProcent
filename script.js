options_id = 0;
cur_engines = 1;
document.getElementById("sumbit").addEventListener("click", function() {
    const userDeck = document.getElementById("player_in").value;
    const userProcent = document.getElementById("cards_need").value;
    const userDraw = document.getElementById("draw").value;
    document.getElementById('output').innerHTML=null;
    document.getElementById('output').innerHTML+=`<p>Вероятность надровать нужную карту: ${(1-(factorial(userDeck-userProcent)/(factorial(userDraw)*(factorial((userDeck-userProcent)-userDraw))))/(factorial(userDeck)/(factorial(userDraw)*(factorial((userDeck)-userDraw)))))*100}%</p>`
    if (options_id == 1){
        const userGarn = document.getElementById("garnet").value;
        document.getElementById('output').innerHTML+=`<p>Вероятность надровать гарнет: ${(1-(factorial(userDeck-userGarn)/(factorial(userDraw)*(factorial((userDeck-userGarn)-userDraw))))/(factorial(userDeck)/(factorial(userDraw)*(factorial((userDeck)-userDraw)))))*100}%</p>`
        if (userGarn>1){
            document.getElementById('output').innerHTML+=`<p>Вероятность надровать 2 гарнета: ${(1-(factorial((userDeck-1)-(userGarn-1))/(factorial(userDraw-1)*(factorial(((userDeck-1)-(userGarn-1))-(userDraw-1)))))/(factorial(userDeck-1)/(factorial(userDraw-1)*(factorial((userDeck-1)-(userDraw-1))))))*100}</p>%`
        }
    }
})
document.getElementById("addOptions").addEventListener("click", function() {
    if (options_id == 0){
        options_id = 1;
        document.getElementById("sumbit2").classList.remove('hidden');
        document.getElementById('options').innerHTML=`<p>Гарнеты</p>
        <input type="number" id="garnet">`;
    }
    else if (options_id ==1){
        options_id = 0;
        cur_engines = 1;
        document.getElementById("sumbit2").classList.add('hidden');
        document.getElementById('options').innerHTML=null;
    }
})
document.getElementById("sumbit2").addEventListener("click", function() {
    cur_engines += 1;
    document.getElementById('options').innerHTML+=`<p>Стартеры ${cur_engines} Энджин</p>
        <input type="number" id="cards_need${cur_engines}">
        <p>Гарнеты ${cur_engines} Энджин</p>
        <input type="number" id="garnet${cur_engines}">`;
})
function factorial(n) {
    if (n<0) return null;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n-1);
}
