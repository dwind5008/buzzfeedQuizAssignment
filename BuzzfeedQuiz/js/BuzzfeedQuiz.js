/**
 * Created by dwind on 12/14/16.
 */
var sum = 0;
var number = "";

function checkIfChecked(className){

    var arr = document.getElementsByClassName(className);

    for (var i = 0; i < arr.length; i++) {

        if (arr[i].checked) {
            value = parseInt(arr[i].value);
            sum += value;
        }
    }
}

function checkNumberInput(){

    number = parseInt(document.getElementById("c").value);

    if (number >= 4){
        sum += 1;
    }
    if (number == 3){
        sum += 2;
    }
    if (number == 2){
        sum += 3;
    }
    if (number == 1){
        sum += 4;
    }
    if (number == 0){
        sum += 5;
    }
}

function checkIfSelected(className){

    var arr = document.getElementsByClassName(className);

    for (var i = 0; i < arr.length; i++) {

        if (arr[i].selected) {
            value = parseInt(arr[i].value);
            sum += value;
        }
    }
}

function showResult () {

    checkIfChecked("a");
    checkIfChecked("b");
    checkNumberInput();
    checkIfSelected("d");
    checkIfSelected("e");

    if (sum <= 5) {
    document.getElementById("displayResult").innerHTML = "<p>The Midwest</p>";
    }
    if (sum > 5 && sum <=10) {
        document.getElementById("displayResult").innerHTML = "<p>The Northeast</p>";
    }
    if (sum > 10 && sum <=15) {
        document.getElementById("displayResult").innerHTML = "<p>The West Coast</p>";
    }
    if (sum > 15 && sum <=20) {
        document.getElementById("displayResult").innerHTML = "<p>The South</p>";
    }
    if (sum > 20) {
        document.getElementById("displayResult").innerHTML = "<p>The Southwest</p>";
    }
}
