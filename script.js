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
        let result = Function("return " + document.getElementById("display").value)();
        let display = document.getElementById("display");
        display.value = result;

        display.style.color = "#22c55e"; // 🔥 vert = résultat visible
    } catch {
        alert("Erreur");
    }
}
