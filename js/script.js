// input value is in Meter
function answerFeet(){
    let meter = document.getElementById("inputValueMeter").value;
    let conversion = 3.28;
    const answer = meter * conversion;
    const result = answer.toFixed(3);

    document.getElementById("answer").value = result + " Feet";
}
function answerMile(){
    let meter = document.getElementById("inputValueMeter").value;
    let conversion = 1609.34;
    const answer = meter / conversion;
    const result = answer.toFixed(6);

    document.getElementById("answer").value = result + " Mile/s";
}
function answerYard(){
    let meter = document.getElementById("inputValueMeter").value;
    let conversion = 1.09361;
    const answer = meter * conversion;
    const result = answer.toFixed(3);

    document.getElementById("answer").value = result + " Yard/s";
}
// input value is in Feet
function answerMeter(){
    let feet = document.getElementById("inputValueFeet").value;
    let conversion = 0.3048;
    const answer = feet * conversion;
    const result = answer.toFixed(3);

    document.getElementById("answer2").value = result + " Meter/s";
}
function answerMile2(){
    let feet = document.getElementById("inputValueFeet").value;
    let conversion = 5280;
    const answer = feet / conversion;
    const result = answer.toFixed(6);

    document.getElementById("answer2").value = result + " Mile/s";
}
function answerYard2(){
    let feet = document.getElementById("inputValueFeet").value;
    let conversion = 0.3333;
    const answer = feet * conversion;
    const result = answer.toFixed(3);

    document.getElementById("answer2").value = result + " Yard/s";
}
// input value is in Mile
function answerMeter2(){
    let mile = document.getElementById("inputValueMile").value;
    let conversion = 1609.34;
    const answer = mile * conversion;
    const result = answer.toFixed(2);

    document.getElementById("answer3").value = result + " Meter/s";
}
function answerFeet2(){
    let mile = document.getElementById("inputValueMile").value;
    let conversion = 5280;
    const answer = mile * conversion;

    document.getElementById("answer3").value = answer + " Feet";
}
function answerYard3(){
    let mile = document.getElementById("inputValueMile").value;
    let conversion = 1760;
    const answer = mile * conversion;

    document.getElementById("answer3").value = answer + " Yard/s";
}
// input value is in Yard
function answerMeter3(){
    let yard = document.getElementById("inputValueYard").value;
    let conversion = 0.9144;
    const answer = yard * conversion;
    const result = answer.toFixed(3);

    document.getElementById("answer4").value = result + " Meter/s";
}
function answerFeet3(){
    let yard = document.getElementById("inputValueYard").value;
    let conversion = 3;
    const answer = yard * conversion;

    document.getElementById("answer4").value = answer + " Feet";
}
function answerMile3(){
    let yard = document.getElementById("inputValueYard").value;
    let conversion = 1760;
    const answer = yard / conversion;
    const result = answer.toFixed(6);

    document.getElementById("answer4").value = result + "Mile/s";
}