const StartColor = getComputedStyle(document.body).getPropertyValue('--ScpColor');
let FinalColor = localStorage.getItem("SCPcolor");
const CSSVar = document.documentElement.style;
if (typeof (Storage) !== "undefined") {
    if (FinalColor !== null) {
        CSSVar.setProperty("--ScpColor", FinalColor);
    } else {
        localStorage.setItem("SCPcolor", StartColor);
    }

    document.addEventListener("change", (event) => {
        let SPCpick = event.target.classList.contains("SPCpick");
        if (SPCpick) {
            localStorage.setItem("SCPcolor", event.target.value);
            CSSVar.setProperty("--ScpColor", event.target.value);
        }
    })

    document.addEventListener("click", (event) => {
        let SPCreset = event.target.classList.contains("SPCreset");
        if (SPCreset) {
            localStorage.removeItem("SCPcolor");
            CSSVar.setProperty("--ScpColor", StartColor);
        }
    })

    document.addEventListener("click", (event) => {
        let SPCchange = event.target.classList.contains("SPCchange");
        if (SPCchange) {
            console.log();
            localStorage.setItem("SCPcolor", event.target.dataset.spc);
            CSSVar.setProperty("--ScpColor", event.target.dataset.spc);
        }
    })
}
else {
    CSSVar.setProperty("--ScpColor", StartColor);
}
