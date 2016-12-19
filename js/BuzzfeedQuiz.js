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

function calculateResult () {

    checkIfChecked("food");
    checkIfChecked("beverage");
    checkNumberInput();
    checkIfSelected("activity");
    checkIfSelected("scenery");

    if (sum <= 5) {
        return "You like to enjoy things in spite of the cold. You should live in the Midwest.";
    }
    else if (sum > 5 && sum <=10) {
        return "You are very cultured. Pick the Northeast.";
    }
    else if (sum > 10 && sum <=15) {
        return "You like to hang out in the sun. Go to the West Coast.";
    }
    else if (sum > 15 && sum <=20) {
        return "You like to spend time outdoors. You would like the South.";
    }
    else if (sum > 20) {
        return "You have a distinct personality. Pick the Southwest.";
    }
}

document.getElementById('displayResult').innerHTML = calculateResult();

var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
