let getName = prompt ("Lütfen adını gir.");
let selectName = document.querySelector("#myName");
selectName.innerHTML = `${getName}`;

function date() {

    let momentary = new Date()
    let saat = momentary.getHours()
    let dakika = momentary.getMinutes()
    let saniye = momentary.getSeconds()
    let d = new Date()
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let icecekme = document.querySelector("#myClock")
    icecekme.innerHTML = saat + ":" + dakika + ":" + saniye + " " + days[d.getDay()] + " tarihinde"
    
    }
    let actual = setInterval(date,1000)