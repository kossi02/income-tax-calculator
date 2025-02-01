let income;
let federalTax;
let stateTax;
let socialSecurityTax;
let medicareTax;

const init = () => {

    let btn = document.querySelector("#btn");
    btn.addEventListener("click", calculate);
}

const calculate = () => {
    valueEntered = document.querySelector("#money");
    income = valueEntered.value;

    // calculate federal tax
    if (income <= 9875) {
        federalTax = income * 0.1;
    } else if (income > 9875 && income <= 40125) {
        federalTax = 987.50 + ((income - 9875) * 0.12);
    } else if (income > 40125 && income <= 85525) {
        federalTax = 4617.50 + ((income - 40125) * 0.22);
    } else if (income > 85525 && income <= 163300) {
        federalTax = 14605.50 + ((income - 85525) * 0.24);
    } else if (income > 163300 && income <= 207350) {
        federalTax = 33271.50 + ((income - 163300) * 0.32);
    } else if (income > 207350 && income <= 518400) {
        federalTax = 47367.50 + ((income - 207350) * 0.35);
    } else if (income > 518400) {
        federalTax = 152235 + ((income - 518400) * 0.37);
    }

    // calculate state tax
    if (income <= 11900) {
        stateTax = income * 0.0354;
    } else if (income > 11970 && income <= 23930) {
        stateTax = 423.74 + ((income - 11970) * 0.0465);
    } else if (income > 23930 && income <= 263480) {
        stateTax = 979.88 + ((income - 23930) * 0.0627);
    } else if (income > 263480) {
        stateTax = 15999.67 + ((income - 263480) * 0.0765);
    }

    // calculate SSN taxes
    if (income <= 137700) {
        socialSecurityTax = income * 0.062;
    } else if (income > 137700) {
        socialSecurityTax = 137700 * 0.062;
    }

    // calculate medicare taxes
    if (income <= 200000) {
        medicareTax = income * 0.0145;
    } else if (income > 200000) {
        medicareTax = income * 0.0235;
    }


    //create table to output the results in it
    let totalTax = federalTax + stateTax + socialSecurityTax + medicareTax;
    let netpay = income - totalTax;

    let table = document.createElement("table");

    let rowOne = document.createElement("tr");
    let rowOneData = document.createElement("td");
    rowOneData.innerHTML = "Gross pay";
    let rowOneResults = document.createElement("td");
    rowOneResults.innerHTML = "$" + income;

    rowOne.appendChild(rowOneData);
    rowOne.appendChild(rowOneResults);

    let rowTwo = document.createElement("tr");
    let rowTwoData = document.createElement("td");
    rowTwoData.innerHTML = "Federal taxes";
    let rowTwoResults = document.createElement("td");
    rowTwoResults.innerHTML = "$" + federalTax.toFixed(2);

    rowTwo.appendChild(rowTwoData);
    rowTwo.appendChild(rowTwoResults);

    let rowThree = document.createElement("tr");
    let rowThreeData = document.createElement("td");
    rowThreeData.innerHTML = "State taxes";
    let rowThreeResults = document.createElement("td");
    rowThreeResults.innerHTML = "$" + stateTax.toFixed(2);

    rowThree.appendChild(rowThreeData);
    rowThree.appendChild(rowThreeResults);

    let rowFour = document.createElement("tr");
    let rowFourData = document.createElement("td");
    rowFourData.innerHTML = "SSN taxes";
    let rowFourResults = document.createElement("td");
    rowFourResults.innerHTML = "$" + socialSecurityTax.toFixed(2);

    rowFour.appendChild(rowFourData);
    rowFour.appendChild(rowFourResults);

    let rowFive = document.createElement("tr");
    let rowFiveData = document.createElement("td");
    rowFiveData.innerHTML = "Medicare taxes";
    let rowFiveResults = document.createElement("td");
    rowFiveResults.innerHTML = "$" + medicareTax.toFixed(2);

    rowFive.appendChild(rowFiveData);
    rowFive.appendChild(rowFiveResults);

    let rowSix = document.createElement("tr");
    let rowSixData = document.createElement("td");
    rowSixData.innerHTML = "Total Tax";
    let rowSixResults = document.createElement("td");
    rowSixResults.innerHTML = "$" + totalTax.toFixed(2);

    rowSix.appendChild(rowSixData);
    rowSix.appendChild(rowSixResults);

    let rowSeven = document.createElement("tr");
    let rowSevenData = document.createElement("td");
    rowSevenData.innerHTML = "Net Pay";
    let rowSevenResults = document.createElement("td");
    rowSevenResults.innerHTML = "$" + netpay.toFixed(2);

    rowSeven.appendChild(rowSevenData);
    rowSeven.appendChild(rowSevenResults);

    table.appendChild(rowOne);
    table.appendChild(rowTwo);
    table.appendChild(rowThree);
    table.appendChild(rowFour);
    table.appendChild(rowFive);
    table.appendChild(rowSix);
    table.appendChild(rowSeven);
    document.body.appendChild(table);

    valueEntered.value = "";
}

window.onload = init;
