function random_H1maz1n() {
    var default_name = ["k","e","n","_","H","1","m","a","z","1","n"]
    var synonym_char = 
    [
        ["K","h","N"],
        ["o","u","E","U"],
        ["N","m","ri"],
        ["_","_"],
        ["h","n","m","M","N"],
        ["i","I","l","j"],
        ["M","N","n","rn"],
        ["A","o"],
        ["Z","x"],
        ["i","I","l","j"],
        ["N","m","ri"]
    ]
    var out = ""
    for (var n = 0;n != default_name.length;n++) {
        if (random(4) == 0) {
        out += synonym_char[n][random(synonym_char[n].length)]
        }else {
        out += default_name[n];
        }
    }
    return out;
}

function random(f) {
    f = 2
    let rand = Math.random()
    return Math.floor(rand*f);
}

function show() {
    document.getElementById("out").textContent = random_H1maz1n();
}

window.addEventListener('load', (event) => {
    show();

    var url = "https://script.google.com/macros/s/AKfycbzSLdbsiOC7EH3--rDDPleo7Viv5kk_5vmg5rjQ1X2OdHYY2T-gV1S9fifPkzLfvO52lA/exec";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onreadystatechange = function () {
        if (request.readyState != 4) {
        } else if (request.status != 200) {
        } else {
            var result = request.responseText;
            document.getElementById("view").textContent = "View " + result;
        }
    };
    request.send(null);
});