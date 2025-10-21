let operationsdisplay = document.querySelector(".operation");
let answerdisplay = document.querySelector(".answer")
let valuebtn1 = document.querySelector("#b1");
let valuebtn2 = document.querySelector("#b2");
let valuebtn3 = document.querySelector("#b3");
let valuebtn4 = document.querySelector("#b4");
let valuebtn5 = document.querySelector("#b5");
let valuebtn6 = document.querySelector("#b6");
let valuebtn7 = document.querySelector("#b7");
let valuebtn8 = document.querySelector("#b8");
let valuebtn9 = document.querySelector("#b9");
let valuebtn0 = document.querySelector("#b0");
let clear = document.querySelector("#clear");
let addition = document.querySelector("#addition");
let subtract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiplication");
let division = document.querySelector("#division");
let equal = document.querySelector("#equal");
let ans = 0;
display = '';
let value=0;
opclick=false;
valuebtn0.onclick = function () {
    value += '0';
    display += '0';
    operationsdisplay.textContent = display
    opclick=false;
}
valuebtn1.onclick = function () {
    value += '1';
    display += '1';
    operationsdisplay.textContent = display
    opclick=false;
}
valuebtn2.onclick = function () {
    value += '2';
    display += '2';
    operationsdisplay.textContent = display
    opclick=false;
}
valuebtn3.onclick = function () {
    value += '3';
    display += '3';
    operationsdisplay.textContent = display
    opclick=false;
}
valuebtn4.onclick = function () {
    value += '4';
    display += '4';
    operationsdisplay.textContent = display
    opclick=false;
}
valuebtn5.onclick = function () {
    value += '5';
    display += '5';
    operationsdisplay.textContent = display
    opclick=false;
}
valuebtn6.onclick = function () {
    value += '6';
    display += '6';
    operationsdisplay.textContent = display
    opclick=false;
}
valuebtn7.onclick = function () {
    value += '7';
    display += '7';
    operationsdisplay.textContent = display
    opclick=false;
}
valuebtn8.onclick = function () {
    value += '8';
    display += '8';
    operationsdisplay.textContent = display
    opclick=false;
}
valuebtn9.onclick = function () {
    value += '9';
    display += '9';
    operationsdisplay.textContent = display
    opclick=false;
}
clear.onclick = function () {
    display = '';
    operationsdisplay.textContent = display;
    answerdisplay.textContent = eval(display);
    opclick=false;
}
addition.onclick = function () {
    if(!opclick){
        display += '+';
    }
    else{
        display = display.slice(0, -1) + '+';
    }
    opclick=true;
    operationsdisplay.textContent = display
}
subtract.onclick = function () {
    if(!opclick){
        display += '-';
    }
    else if(opclick){
        display = display.slice(0, -1) + '-';
    }
    opclick=true;
    operationsdisplay.textContent = display
}
multiply.onclick = function () {
    if(!opclick){
        display += '*';
    }
    else{
        display = display.slice(0, -1) + '*';
    }
    opclick=true;
    operationsdisplay.textContent = display
}
division.onclick = function () {
    if(!opclick){
        display += '/';
    }
    else{
        display = display.slice(0, -1) + '/';
    }
    opclick=true;
    operationsdisplay.textContent = display
}
equal.onclick = function () {
    operationsdisplay.textContent = display
    answerdisplay.textContent = `= ${eval(display)}`
}


let menuDropdown = document.querySelector("#menuDropdown");
let mode = "calculator";

menuDropdown.onchange = function () {
    mode = menuDropdown.value;
    operationsdisplay.textContent = '';
    answerdisplay.textContent = '';
    display = '';
};


equal.onclick = function () {
    operationsdisplay.textContent = display;

    if (mode === "calculator") {
        try {
            answerdisplay.textContent = `= ${eval(display)}`;
        } catch {
            answerdisplay.textContent = "Error";
        }
    } 
    else if (mode === "temp") {
        if (display === '' || isNaN(display)) {
            answerdisplay.textContent = "Invalid Input";
            return;
        }
        let fahrenheit = parseFloat(display);
        let celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);
        answerdisplay.textContent = `= ${celsius}°C`;
        operationsdisplay.textContent = `${fahrenheit}°F → °C`;
    }
};
