import { ZOLDSEGEK } from "./adatok.js";

export function megjelenit(ZOLDSEGEK) {
    let txt = "<div class='flex-container'>"
        txt += `<div class="kiv" style='border: 1px solid gray;'><img src='paradicsom.webp'></div>`
        txt += `<div class="kiv" style='border: 1px solid gray;'><img src='paprika.jpg'></div>`
        txt += `<div class="kiv" style='border: 1px solid gray;'><img src='uborka.jpg'></div>`
        txt += `<div class="kiv" style='border: 1px solid gray;'><img src='hagyma.jpg'></div>`
        txt += `<div class="kiv" style='border: 1px solid gray;'><img src='retek.jpg'></div>`
    txt += "</div>"
    console.log(txt)
    return txt
}

const zoldseg = document.querySelector(".tartalom")
console.log(zoldseg)
zoldseg.innerHTML = megjelenit(ZOLDSEGEK)