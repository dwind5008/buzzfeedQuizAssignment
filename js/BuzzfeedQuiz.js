/**
 * Created by dwind on 12/14/16.
 */

var sum = 0;
var number = "";

function checkIfChecked(className){

    var arr = document.getElementsByClassName(className);

    for (var i = 0; i < arr.length; i++) {

        if (arr[i].checked) {
            sum += parseInt(arr[i].value);
        }
    }
}

function checkNumberInput() {

    number = parseInt(document.getElementById("jackets").value);

    if (number > 4) {
        sum += 1
    }

    else switch (number) {
        case (4):
            sum += 1;
            break;
        case (3):
            sum += 2;
            break;
        case (2):
            sum += 3;
            break;
        case (1):
            sum += 4;
            break;
        case (0):
            sum += 5;
            break;
    }
}

function checkIfSelected(className){

    var arr = document.getElementsByClassName(className);

    for (var i = 0; i < arr.length; i++) {

        if (arr[i].selected) {
            sum += parseInt(arr[i].value);
        }
    }
}

function showResult () {

    checkIfChecked("food");
    checkIfChecked("beverage");
    checkNumberInput();
    checkIfSelected("activity");
    checkIfSelected("scenery");

    if (sum <= 5) {
    document.getElementById("displayResult").innerHTML = "<p>The Midwest</p>";
    }
    else if (sum > 5 && sum <=10) {
        document.getElementById("displayResult").innerHTML = "<p>The Northeast</p>";
    }
    else if (sum > 10 && sum <=15) {
        document.getElementById("displayResult").innerHTML = "<p>The West Coast</p>";
    }
    else if (sum > 15 && sum <=20) {
        document.getElementById("displayResult").innerHTML = "<p>The South</p>";
    }
    else if (sum > 20) {
        document.getElementById("displayResult").innerHTML = "<p>The Southwest</p>";
    }
}
