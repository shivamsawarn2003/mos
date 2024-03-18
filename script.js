// First box
let button1 = document.getElementById('btn1');

button1.addEventListener('click', () => {
    const length1 = parseInt(document.getElementById('Length1').value);
    const modulus1 = parseInt(document.getElementById('modulus1').value);
    const inertia1 = parseInt(document.getElementById('inertia1').value);

    let length_status1 = false, modulus_status1 = false, inertia_status1 = false;

    if (isNaN(length1) || length1 <= 0) {
        document.getElementById('length_error1').innerHTML = 'Please provide a valid length';
    } else {
        document.getElementById('length_error1').innerHTML = '';
        length_status1 = true;
    }
    if (isNaN(modulus1) || modulus1 <= 0) {
        document.getElementById('modulus_error1').innerHTML = 'Please provide a valid Modulus';
    } else {
        document.getElementById('modulus_error1').innerHTML = '';
        modulus_status1 = true;
    }
    if (isNaN(inertia1) || inertia1 <= 0) {
        document.getElementById('inertia_error1').innerHTML = 'Please provide a valid Inertia';
    } else {
        document.getElementById('inertia_error1').innerHTML = '';
        inertia_status1 = true;
    }

    if (length_status1 && modulus_status1 && inertia_status1) {
        const resultValue1 = (((4*Math.PI**2)*modulus1*inertia1)/length1).toFixed(3);
        document.getElementById('output1').innerHTML = 'Result: ' + resultValue1;
        document.getElementById('crippling').value = resultValue1; // Assigning the result to crippling input field in the fifth box
    } else {
        alert('The form has errors');
    }
});

// Second box
let button2 = document.getElementById('btn2');

button2.addEventListener('click', () => {
    const length2 = parseInt(document.getElementById('Length2').value);
    const modulus2 = parseInt(document.getElementById('modulus2').value);
    const inertia2 = parseInt(document.getElementById('inertia2').value);

    let length_status2 = false, modulus_status2 = false, inertia_status2 = false;

    if (isNaN(length2) || length2 <= 0) {
        document.getElementById('length_error2').innerHTML = 'Please provide a valid length';
    } else {
        document.getElementById('length_error2').innerHTML = '';
        length_status2 = true;
    }
    if (isNaN(modulus2) || modulus2 <= 0) {
        document.getElementById('modulus_error2').innerHTML = 'Please provide a valid Modulus';
    } else {
        document.getElementById('modulus_error2').innerHTML = '';
        modulus_status2 = true;
    }
    if (isNaN(inertia2) || inertia2 <= 0) {
        document.getElementById('inertia_error2').innerHTML = 'Please provide a valid Inertia';
    } else {
        document.getElementById('inertia_error2').innerHTML = '';
        inertia_status2 = true;
    }

    if (length_status2 && modulus_status2 && inertia_status2) {
        const resultValue2 = ((Math.PI**2)*modulus2*inertia2)/(4*length2**2);
        document.getElementById('output2').innerHTML = 'Result: ' + resultValue2.toFixed(2);
        document.getElementById('crippling').value = resultValue2; // Assigning the result to crippling input field in the fifth box
    } else {
        alert('The form has errors');
    }
});

// Third box
let button3 = document.getElementById('btn3');

button3.addEventListener('click', () => {
    const length3 = parseInt(document.getElementById('Length3').value);
    const modulus3 = parseInt(document.getElementById('modulus3').value);
    const inertia3 = parseInt(document.getElementById('inertia3').value);

    let length_status3 = false, modulus_status3 = false, inertia_status3 = false;

    if (isNaN(length3) || length3 <= 0) {
        document.getElementById('length_error3').innerHTML = 'Please provide a valid length';
    } else {
        document.getElementById('length_error3').innerHTML = '';
        length_status3 = true;
    }
    if (isNaN(modulus3) || modulus3 <= 0) {
        document.getElementById('modulus_error3').innerHTML = 'Please provide a valid Modulus';
    } else {
        document.getElementById('modulus_error3').innerHTML = '';
        modulus_status3 = true;
    }
    if (isNaN(inertia3) || inertia3 <= 0) {
        document.getElementById('inertia_error3').innerHTML = 'Please provide a valid Inertia';
    } else {
        document.getElementById('inertia_error3').innerHTML = '';
        inertia_status3 = true;
    }

    if (length_status3 && modulus_status3 && inertia_status3) {
        const resultValue3 = ((2*Math.PI**2)*modulus3*inertia3)/length3**2;
        document.getElementById('output3').innerHTML = 'Result: ' + resultValue3.toFixed(2);
        document.getElementById('crippling').value = resultValue3; // Assigning the result to crippling input field in the fifth box
    } else {
        alert('The form has errors');
    }
});

// Fourth box
let button4 = document.getElementById('btn4');

button4.addEventListener('click', () => {
    const length4 = parseInt(document.getElementById('Length4').value);
    const modulus4 = parseInt(document.getElementById('modulus4').value);
    const inertia4 = parseInt(document.getElementById('inertia4').value);

    let length_status4 = false, modulus_status4 = false, inertia_status4 = false;

    if (isNaN(length4) || length4 <= 0) {
        document.getElementById('length_error4').innerHTML = 'Please provide a valid length';
    } else {
        document.getElementById('length_error4').innerHTML = '';
        length_status4 = true;
    }
    if (isNaN(modulus4) || modulus4 <= 0) {
        document.getElementById('modulus_error4').innerHTML = 'Please provide a valid Modulus';
    } else {
        document.getElementById('modulus_error4').innerHTML = '';
        modulus_status4 = true;
    }
    if (isNaN(inertia4) || inertia4 <= 0) {
        document.getElementById('inertia_error4').innerHTML = 'Please provide a valid Inertia';
    } else {
        document.getElementById('inertia_error4').innerHTML = '';
        inertia_status4 = true;
    }

    if (length_status4 && modulus_status4 && inertia_status4) {
        const resultValue4 =((Math.PI**2)*modulus4*inertia4)/length4**2;
        document.getElementById('output4').innerHTML = 'Result: ' + resultValue4.toFixed(2);
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
    const radius = parseFloat(document.getElementById('radius').value);

    const result5 = document.getElementById('output5');
    let cripplingStatus = false, crushingStatus = false, radiusStatus = false;

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
    if (isNaN(radius) || radius <= 0) {
        document.getElementById('radius_error').innerHTML = 'Please provide a valid radius';
    } else {
        document.getElementById('radius_error').innerHTML = '';
        radiusStatus = true;
    }

    if (cripplingStatus && crushingStatus && radiusStatus) {
        const resultValue5 = (CripplingStress * Math.PI * Math.pow(radius, 2) * crushingStress) / ((crushingStress * Math.PI * Math.pow(radius, 2))+CripplingStress);
        result5.innerHTML = 'Result: ' + resultValue5.toFixed(2);
    } else {
        result5.innerHTML = ''; 
        alert('The form has errors');
    }
});
