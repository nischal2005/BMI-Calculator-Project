document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent form submission

        // Get height and weight values from input elements
        let heightValue = parseFloat(document.getElementById("height").value);
        let weightValue = parseFloat(document.getElementById("weight").value);

        // Check if height and weight values are valid
        if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
            alert("Please enter valid height and weight values.");
            return;
        }

        // Calculate BMI
        let bmi = (weightValue / (heightValue * heightValue)) * 703;

        // Display the result
        document.getElementById("Result").innerText = bmi.toFixed(2);
    });
});