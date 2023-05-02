function addNumbers() {
    n1 = parseInt(myform.n1.value);
    n2 = parseInt(myform.n2.value);
    result = n1 + n2;
    myform.result.value = result;
}

function subtractNumbers() {
    n1 = parseInt(myform.n1.value);
    n2 = parseInt(myform.n2.value);
    result = n1 - n2
    myform.result.value = result;
}

function multiplyNumbers() {
    n1 = parseInt(myform.n1.value);
    n2 = parseInt(myform.n2.value);
    result = n1 * n2;
    myform.result.value = result;
}

function divideNumbers() {
    n1 = parseInt(myform.n1.value);
    n2 = parseInt(myform.n2.value);
    result = n1 / n2;
    myform.result.value = result;
}



function clearFields() {
    n1 = parseInt(myform.n1.value);
    n2 = parseInt(myform.n2.value);
    myform.n1.value = ""
    myform.n2.value = ""
    myform.result.value = "";
}

function alertBtn() {
    alert("Made by Rob");


}