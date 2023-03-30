let secondItem = document.querySelector("#second");
let minuteItem = document.querySelector("#minute");

let countdown = () => {
    let futuredate = new Date("1 Jan 2024");
    let currentdate = new Date();
    let mydate = futuredate - currentdate;
    //console.log(mydate);
    let second = Math.floor(mydate/1000) %60;
    let min = Math.floor(mydate/1000/60) % 60;

    secondItem.innerHTML = second;
    minuteItem.innerHTML = min;
}

countdown()

setInterval(countdown,1000);