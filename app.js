$(document).ready(function () {
    init();
});

var numberArray = [];
var total = 0;

function init() {

}


function submitEmployee() {
    var nameText = $("#name").val();
    var idText = $("#id").val();
    var salaryText = $("#salary").val();
   numberArray.push(parseFloat(salaryText));
    for(var i = 0; i < numberArray.length; i++ ){
        total += numberArray[i];
    }

    $("#name").val("");
    $("#id").val("");
    $("#salary").val("");


    $("#employees").append("<p>" + "Employee Name:" + " " + nameText + "</p>" + "<p>" + "Employee ID:" + " " + idText + "</p>" +
        "<p>" + "Employee Salary: $" + salaryText + "</p>" + "<br>");
    $("#totalSalary").text("Total Salary of Employees: $" + total);
    total = 0;
}

function clearAllEmployees() {
    $("#employees").empty();
    total = 0;
    $("#totalSalary").text("Total Salary of Employees: $" + total);

}
