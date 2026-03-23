const degreeInput = document.getElementById("Degree");
const typeSelect = document.getElementById("temperature");
const resultInput = document.getElementById("result");
const button = document.getElementById("btn");

button.addEventListener("click", function() {

    const degreeValue = Number(degreeInput.value);
    const typeValue = typeSelect.value;

    if (degreeInput.value === "") {
        resultInput.value = "Please enter a value";
        return;
    }

    let finalResult;

    if (typeValue === "Celsius") {
        finalResult = degreeValue * 9/5 + 32;
        resultInput.value = `${finalResult.toFixed(2)} °F`;
    } else {
        finalResult = (degreeValue - 32) * 5/9;
        resultInput.value = `${finalResult.toFixed(2)} °C`;
    }
});
