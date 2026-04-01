function convert() {
    var unit = document.getElementById('options-row').value; 
    
    var ele = document.querySelectorAll('.first-temps');
    var elements = document.querySelectorAll('.second-temps');

    ele.forEach(function(el) {
        var temp = parseInt(el.innerHTML);
        if (unit === 'F') {
            el.innerHTML = Math.round(temp * 9/5 + 32);
        } else {
            el.innerHTML = Math.round((temp - 32) * 5/9); 
        }
    });

    elements.forEach(function(el) {
        var temp = parseInt(el.innerHTML);
        if (unit === 'F') {
            el.innerHTML = Math.round(temp * 9/5 + 32);
        } else {
            el.innerHTML = Math.round((temp - 32) * 5/9);
        }
    });
}

function hideCookie() {
    var cookie = document.querySelector('.cookie');
    cookie.style.display = "none";
}