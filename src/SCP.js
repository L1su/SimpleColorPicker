var StartColor = getComputedStyle(document.body).getPropertyValue('--ScpColor');
var EndColor = localStorage.getItem("SCPcolor");
var StyleVar = document.documentElement.style;
if (typeof (Storage) !== "undefined") {
    if(EndColor == null){
        localStorage.setItem("SCPcolor", StartColor);
    }
    
    if(document.getElementById("scpReset")!= null){
        document.getElementById("scpReset").onclick = function() {SCPreset()};
    }
    if(document.getElementById("scpChange") != null){
        document.getElementById("scpChange").onchange = function() {SCPchange()};
        function SCPchange() {
            var InputColor = document.getElementById("scpChange").value;
            localStorage.setItem("SCPcolor", InputColor);
            StyleVar.setProperty("--ScpColor", InputColor);
        }
    }
    function SCPselect(scpSelect) {
        localStorage.setItem("SCPcolor", scpSelect);
        StyleVar.setProperty("--ScpColor", scpSelect);
    }
    function SCPreset(){
        localStorage.removeItem("SCPcolor");
        StyleVar.setProperty("--ScpColor", StartColor);
    } 
    StyleVar.setProperty("--ScpColor", EndColor);
    } 
else {
    StyleVar.setProperty("--ScpColor", StartColor);
    EndColor == StartColor;
}