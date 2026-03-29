function append(value) {
    document.getElementById("display").value += value;
}
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erreur";
    }
}
function append(value) {
    let display = document.getElementById("display");

    if ("+-*/".includes(value) && "+-*/".includes(display.value.slice(-1))) {
        return;
    }

    display.value += value;
}
