function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
document.addEventListener("keydown", function(e) {
    const key = e.key;
    if (!isNaN(key) || "+-*/.".includes(key)) {
        append(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        clearDisplay();
    }
    <input type="text" id="display">
});
function calculate() {
    try {
        document.getElementById("display").value =
            eval(document.getElementById("display").value);
    } catch {m
        alert("Erreur");
    }
}
