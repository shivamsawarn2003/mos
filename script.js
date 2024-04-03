const materialModulus = {
    aluminum: 69000,
    brass: 125000,
    concrete: 300000,
    firwood: 13000,
    castiron: 130000,
    iron: 210000,
    oakwood: 11000,
    pinewood: 9000,
    stainless: 180000,
    structural: 200000,
    titaniumalloy: 120000,
    wrought: 210000,
    reinforced: 200000
};

function getModulus(material) {
    return materialModulus[material];
}

let calculatedArea, calculatedAreaMoment;

var shapeSelect = document.getElementById("shapeSelect");
var inputFields = document.getElementById("inputFields6");
var calculateBtn = document.getElementById("calculateBtn6");
var output = document.getElementById("output6");

// Event listener for shape selection
shapeSelect.addEventListener("change", function() {
    var selectedShape = shapeSelect.value;
    generateInputFields(selectedShape);
});

// Event listener for calculate button
calculateBtn.addEventListener("click", function() {
    var selectedShape = shapeSelect.value;
    var inputs = document.querySelectorAll("#inputFields6 input");
    calculateAreaMomentOfInertia(selectedShape, inputs);
    output.textContent = "Area Moment of Inertia: " + calculatedAreaMoment;
});

// Function to dynamically generate input fields based on the selected shape
function generateInputFields(shape) {
    inputFields.innerHTML = ""; // Clear previous input fields

    if (shape === "rectangle") {
        inputFields.innerHTML = `
            <label for="length">Height:</label>
            <input type="number" id="length6" placeholder="Enter height in mm">
            <br>
            <label for="width">Width:</label>
            <input type="number" id="width" placeholder="Enter width in mm">
        `;
    } else if (shape === "circle") {
        inputFields.innerHTML = `
            <label for="radius">Radius:</label>
            <input type="number" id="radius6" placeholder="Enter radius in mm">
        `;
    } else if (shape === "triangle") {
        inputFields.innerHTML = `
            <label for="base">Base:</label>
            <input type="number" id="base" placeholder="Enter base in mm">
            <br>
            <label for="height">Height:</label>
            <input type="number" id="height" placeholder="Enter height in mm">
        `;
    } else if (shape === "square") {
        inputFields.innerHTML = `
            <label for="side">Side:</label>
            <input type="number" id="side" placeholder="Enter side length in mm">
        `;
    } else if (shape === "ellipse") {
        inputFields.innerHTML = `
            <label for="majorAxis">Major Axis:</label>
            <input type="number" id="majorAxis" placeholder="Enter major axis length in mm">
            <br>
            <label for="minorAxis">Minor Axis:</label>
            <input type="number" id="minorAxis" placeholder="Enter minor axis length in mm">
        `;
    }
}

// Function to calculate the area moment of inertia based on the selected shape and input values
function calculateAreaMomentOfInertia(shape, inputs) {
    var result = {};
    if (shape === "rectangle") {
        var length = parseFloat(inputs[0].value);
        var width = parseFloat(inputs[1].value);
        result.area = length * width;
        result.areaMoment = (width * Math.pow(length, 3)) / 12;
    } else if (shape === "circle") {
        var radius = parseFloat(inputs[0].value);
        result.area = Math.PI * Math.pow(radius, 2);
        result.areaMoment = (Math.PI * Math.pow(radius, 4)) / 64;
    } else if (shape === "triangle") {
        var base = parseFloat(inputs[0].value);
        var height = parseFloat(inputs[1].value);
        result.area = (base * height) / 2;
        result.areaMoment = (base * Math.pow(height, 3)) / 36;
    } else if (shape === "square") {
        var side = parseFloat(inputs[0].value);
        result.area = Math.pow(side, 2);
        result.areaMoment = (Math.pow(side, 4)) / 12;
    } else if (shape === "ellipse") {
        var majorAxis = parseFloat(inputs[0].value);
        var minorAxis = parseFloat(inputs[1].value);
        result.area = Math.PI * majorAxis * minorAxis;
        result.areaMoment = (Math.PI * majorAxis * Math.pow(minorAxis, 3)) / 64;
    }
    return result;
}

var shapeSelect2 = document.getElementById("shapeSelect2");
var inputFields7 = document.getElementById("inputFields7");
var calculateBtn7 = document.getElementById("calculateBtn7");
var output7 = document.getElementById("output7");

// Event listener for shape selection
shapeSelect2.addEventListener("change", function() {
    var selectedShape2 = shapeSelect2.value;
    generateInputFields(selectedShape2);
});

// Event listener for calculate button
// Event listener for calculate button
calculateBtn7.addEventListener("click", function() {
    var selectedShape2 = shapeSelect2.value;
    var inputs7 = document.querySelectorAll("#inputFields7 input");
    var result7 = calculateAreaMomentOfInertia(selectedShape2, inputs7); // Call the function and store the result
    output7.textContent = "Area: " + result7.area + " mm^2, Area Moment of Inertia: " + result7.areaMoment + " mm^4";

    // Update input fields in other boxes
    document.getElementById('inertia1').value = result7.areaMoment;
    document.getElementById('inertia2').value = result7.areaMoment;
    document.getElementById('inertia3').value = result7.areaMoment;
    document.getElementById('inertia4').value = result7.areaMoment;
    document.getElementById('area').value = result7.area; // Assuming this is the area input for the fifth box
});

// Function to dynamically generate input fields based on the selected shape
function generateInputFields(shape2) {
    inputFields7.innerHTML = ""; // Clear previous input fields

    if (shape2 === "rectangle") {
        inputFields7.innerHTML = `
            <label for="length">Height:</label>
            <input type="number" id="length6" placeholder="Enter height in mm">
            <br>
            <label for="width">Width:</label>
            <input type="number" id="width" placeholder="Enter width in mm">
        `;
    } else if (shape2 === "circle") {
        inputFields7.innerHTML = `
            <label for="radius">Radius:</label>
            <input type="number" id="radius6" placeholder="Enter radius in mm">
        `;
    } else if (shape2 === "triangle") {
        inputFields7.innerHTML = `
            <label for="base">Base:</label>
            <input type="number" id="base" placeholder="Enter base in mm">
            <br>
            <label for="height">Height:</label>
            <input type="number" id="height" placeholder="Enter height in mm">
        `;
    } else if (shape2 === "square") {
        inputFields7.innerHTML = `
            <label for="side">Side:</label>
            <input type="number" id="side" placeholder="Enter side length in mm">
        `;
    } else if (shape2 === "ellipse") {
        inputFields7.innerHTML = `
            <label for="majorAxis">Major Axis:</label>
            <input type="number" id="majorAxis" placeholder="Enter major axis length in mm">
            <br>
            <label for="minorAxis">Minor Axis:</label>
            <input type="number" id="minorAxis" placeholder="Enter minor axis length in mm">
        `;
    }
}

// Function to calculate the area moment of inertia based on the selected shape and input values
function calculateAreaMomentOfInertia(shape2, inputs7) {
    var result = {};
    if (shape2 === "rectangle") {
        var length = parseFloat(inputs7[0].value);
        var width = parseFloat(inputs7[1].value);
        result.area = length * width;
        result.areaMoment = (width * Math.pow(length, 3)) / 12;
    } else if (shape2 === "circle") {
        var radius = parseFloat(inputs7[0].value);
        result.area = Math.PI * Math.pow(radius, 2);
        result.areaMoment = (Math.PI * Math.pow(radius, 4)) / 64;
    } else if (shape2 === "triangle") {
        var base = parseFloat(inputs7[0].value);
        var height = parseFloat(inputs7[1].value);
        result.area = (base * height) / 2;
        result.areaMoment = (base * Math.pow(height, 3)) / 36;
    } else if (shape2 === "square") {
        var side = parseFloat(inputs7[0].value);
        result.area = Math.pow(side, 2);
        result.areaMoment = (Math.pow(side, 4)) / 12;
    } else if (shape2 === "ellipse") {
        var majorAxis = parseFloat(inputs7[0].value);
        var minorAxis = parseFloat(inputs7[1].value);
        result.area = Math.PI * majorAxis * minorAxis;
        result.areaMoment = (Math.PI * majorAxis * Math.pow(minorAxis, 3)) / 64;
    }
    return result;
}

// First box
let button1 = document.getElementById('btn1');

button1.addEventListener('click', () => {
    const length1 = parseInt(document.getElementById('Length1').value);
    const material1 = document.getElementById('material1').value; // Get selected material
    const inertia1 = parseFloat(document.getElementById('inertia1').value); // Get inertia from the first box

    let length_status1 = false, inertia_status1 = false;

    if (isNaN(length1) || length1 <= 0) {
        document.getElementById('length_error1').innerHTML = 'Please provide a valid length';
    } else {
        document.getElementById('length_error1').innerHTML = '';
        length_status1 = true;
    }
    if (isNaN(inertia1) || inertia1 <= 0) {
        document.getElementById('inertia_error1').innerHTML = 'Please provide a valid Inertia';
    } else {
        document.getElementById('inertia_error1').innerHTML = '';
        inertia_status1 = true;
    }
    if (length_status1 && inertia_status1) {
        const modulus1 = getModulus(material1); // Get Young's modulus based on material
        const resultValue1 = (((4 * Math.PI ** 2) * modulus1 * inertia1) / length1**2).toFixed(3);
        document.getElementById('output1').innerHTML = 'Result: ' + resultValue1 + "N";
        document.getElementById('crippling').value = resultValue1 ; // Assigning the result to crippling input field in the fifth box
        
    } else {
        alert('The form has errors');
    }
});

// Second box
let button2 = document.getElementById('btn2');

button2.addEventListener('click', () => {
    const length2 = parseInt(document.getElementById('Length2').value);
    const material2 = document.getElementById('material2').value;
    const inertia2 = parseFloat(document.getElementById('inertia2').value); // Get inertia from the first box

    let length_status2 = false, inertia_status2 = false;

    if (isNaN(length2) || length2 <= 0) {
        document.getElementById('length_error2').innerHTML = 'Please provide a valid length';
    } else {
        document.getElementById('length_error2').innerHTML = '';
        length_status2 = true;
    }
    if (isNaN(inertia2) || inertia2 <= 0) {
        document.getElementById('inertia_error2').innerHTML = 'Please provide a valid Inertia';
    } else {
        document.getElementById('inertia_error2').innerHTML = '';
        inertia_status2 = true;
    }

    if (length_status2 && inertia_status2) {
        const modulus2 = getModulus(material2);
        const resultValue2 = ((Math.PI**2)*modulus2*inertia2)/(4*length2**2);
        document.getElementById('output2').innerHTML = 'Result: ' + resultValue2.toFixed(2) + "N";
        document.getElementById('crippling').value = resultValue2; // Assigning the result to crippling input field in the fifth box
    } else {
        alert('The form has errors');
    }
});

// Third box
let button3 = document.getElementById('btn3');

button3.addEventListener('click', () => {
    const length3 = parseInt(document.getElementById('Length3').value);
    const material3 = document.getElementById('material3').value; // Get selected material
    const inertia3 = parseFloat(document.getElementById('inertia3').value); // Get inertia from the first box

    let length_status3 = false, inertia_status3 = false;

    if (isNaN(length3) || length3 <= 0) {
        document.getElementById('length_error3').innerHTML = 'Please provide a valid length';
    } else {
        document.getElementById('length_error3').innerHTML = '';
        length_status3 = true;
    }
    if (isNaN(inertia3) || inertia3 <= 0) {
        document.getElementById('inertia_error3').innerHTML = 'Please provide a valid Inertia';
    } else {
        document.getElementById('inertia_error3').innerHTML = '';
        inertia_status3 = true;
    }

    if (length_status3 && inertia_status3) {
        const modulus3 = getModulus(material3); // Get Young's modulus based on material
        const resultValue3 = ((2*Math.PI**2)*modulus3*inertia3)/length3**2;
        document.getElementById('output3').innerHTML = 'Result: ' + resultValue3.toFixed(2) + "N";
        document.getElementById('crippling').value = resultValue3; // Assigning the result to crippling input field in the fifth box
    } else {
        alert('The form has errors');
    }
});

// Fourth box
let button4 = document.getElementById('btn4');

button4.addEventListener('click', () => {
    const length4 = parseInt(document.getElementById('Length4').value);
    const material4 = document.getElementById('material4').value; // Get selected material
    const inertia4 = parseFloat(document.getElementById('inertia4').value); // Get inertia from the first box

    let length_status4 = false, inertia_status4 = false;

    if (isNaN(length4) || length4 <= 0) {
        document.getElementById('length_error4').innerHTML = 'Please provide a valid length';
    } else {
        document.getElementById('length_error4').innerHTML = '';
        length_status4 = true;
    }
    if (isNaN(inertia4) || inertia4 <= 0) {
        document.getElementById('inertia_error4').innerHTML = 'Please provide a valid Inertia';
    } else {
        document.getElementById('inertia_error4').innerHTML = '';
        inertia_status4 = true;
    }

    if (length_status4 && inertia_status4) {
        const modulus4 = getModulus(material4); // Get
        const resultValue4 =((Math.PI**2)*modulus4*inertia4)/length4**2;
        document.getElementById('output4').innerHTML = 'Result: ' + resultValue4.toFixed(2) + "N";
        document.getElementById('crippling').value = resultValue4; // Assigning the result to crippling input field in the fifth box
    } else {
        alert('The form has errors');
    }
});

// Fifth box
const button5 = document.getElementById('btn5'); 

button5.addEventListener('click', () => {
    const CripplingStress = parseFloat(document.getElementById('crippling').value);
    const crushingStress = parseFloat(document.getElementById('crushing').value);
    const area = parseFloat(document.getElementById('area').value);

    const result5 = document.getElementById('output5');
    let cripplingStatus = false, crushingStatus = false, areaStatus = false;

    if (isNaN(CripplingStress) || CripplingStress <= 0) {
        document.getElementById('crippling_error').innerHTML = 'Please provide a valid crippling stress';
    } else {
        document.getElementById('crippling_error').innerHTML = '';
        cripplingStatus = true;
    }
    if (isNaN(crushingStress) || crushingStress <= 0) {
        document.getElementById('crushing_error').innerHTML = 'Please provide a valid crushing stress';
    } else {
        document.getElementById('crushing_error').innerHTML = '';
        crushingStatus = true;
    }
    if (isNaN(area) || area <= 0) {
        document.getElementById('area_error').innerHTML = 'Please provide a valid area';
    } else {
        document.getElementById('area_error').innerHTML = '';
        areaStatus = true;
    }

    if (cripplingStatus && crushingStatus && areaStatus) {
        const resultValue5 = (CripplingStress * area * crushingStress) / ((crushingStress * area)+CripplingStress);
        result5.innerHTML = 'Result: ' + resultValue5.toFixed(2) + "N/mm^2";
    } else {
        alert('The form has errors');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    var lengthInput = document.getElementById("length");
    var radiusInput = document.getElementById("radius");
    var output = document.getElementById("output");

    // Add event listener to the button
    document.getElementById("btn").addEventListener("click", function() {
        var length = parseFloat(lengthInput.value);
        var radius = parseFloat(radiusInput.value);

        // Check if the inputs are valid numbers
        if (isNaN(length) || isNaN(radius)) {
            output.textContent = "Please enter valid numbers for length and radius.";
            return;
        }

        // Calculate the ratio
        var ratio = length / radius;
        // Determine column type based on the ratio
        if (ratio > 120) {
            output.textContent = "Slendorness Ratio: " + ratio.toFixed(2) + ", Long Column";
        } else if (ratio <= 32) {
            output.textContent = "Slendorness Ratio: " + ratio.toFixed(2) + ", Short Column";
        } else {
            output.textContent = "Slendorness Ratio: " + ratio.toFixed(2) + ", Intermediate Column";
        }

        // Update length fields in other boxes
        document.getElementById('Length1').value = length;
        document.getElementById('Length2').value = length;
        document.getElementById('Length3').value = length;
        document.getElementById('Length4').value = length;
    });
});