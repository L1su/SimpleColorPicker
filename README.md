# SimpleColorPicker

## :memo: Informacje:
 Skrypt umożliwa użytkownikowi naszej strony dostosowanie kolorystki strony w prosty sposób.
 Skrpt nie obciąża twojej strony, pliki wymagane do poprawnego działania zajmuja 1,77KB (SCP.mini.js + SCP.css)  
 [Zgodność z przegladarkami](https://caniuse.com/#feat=css-variables)  
 [Licencja MIT](https://opensource.org/licenses/MIT)  

## :dart: Cele projektu:
 - Praca nad JS
 - Praca nad BEM
 - Poznanie atrybutu HTML data-*

## :wrench: Implementacja:
#### HTML:
* Przycisk wyboru koloru
```HTML
<input type="color" name="SPCpick" class="SPCpick">
```
* Przycisk resetu
```HTML
<span class="SPCreset">Reset</span>
```
* Przycisk z zdefiniowanym kolorem
```HTML
<span class="SPCchange" data-spc="#cb4b16"> Zmień na kolor: #cb4b16 </span>
```
#### CSS:
* Edycja koloru początkowego
```css
:root {
    --ScpColor: #5b00b7; 
}
```
* Zmienna odpowiedzialna za kolor w CSS, przykład:
```css
body{
    background: var(--ScpColor);
}
```

## :camera: Zrzuty:
[![Demo Windows 10](https://raw.githubusercontent.com/L1su/SimpleColorPicker/master/demo.gif)](https://l1su.github.io/SimpleColorPicker/)

