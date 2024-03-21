import { megjelenit } from "./fuggvenyek.js";

megjelenit();

var elemek = document.querySelectorAll('.kiv');

elemek.forEach(function(elem) {
    elem.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'red';
    });
    
    elem.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'white';
    });
});

document.getElementById('megmutat').addEventListener('click', function() {
    var listaElemek = document.querySelectorAll('#lista li');

    var veletlen = Math.floor(Math.random() * listaElemek.length);

    var kivalasztottTulajdonsag = listaElemek[veletlen].textContent;
    
    var kivalasztottElem = document.querySelector('.kivalasztott');
    kivalasztottElem.innerHTML = '';

    var tulajdonsagElem = document.createElement('li');
    
    tulajdonsagElem.textContent = kivalasztottTulajdonsag;
    kivalasztottElem.appendChild(tulajdonsagElem);
});