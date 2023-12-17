var inputs = document.querySelectorAll(".check");
var DayToday = new Date();

// var dateCheck = document
//   .getElementById("date")
//   .addEventListener("change", function () {
//     dateChecks();
//   });

//   var monthCheck = document
//     .getElementById("month")
//     .addEventListener("change", function(){
//         checkMonth();
//     });


for(var i = 0; i<document.querySelectorAll(".check").length;i++){
    inputs[i].addEventListener("change", function(){
        const elementId = this.id;
        const funcionName = 'check'+elementId;
        var datE = new Date();
        window[funcionName]();
    });
}


function checkMonth(){
    var month = document.getElementById("Month").value;
    var monthError = document.getElementById("month-error");

    if(month <=0 || month > 12){
        monthError.classList.remove("hidden");
    }
    else{
        monthError.classList.add("hidden");
    }
}

function checkDate(){
    var date = document.getElementById("Date").value;
    var dateError = document.getElementById("date-error");

    if(date <= 0 || date > 31){
        dateError.classList.remove("hidden");
    }
    else{
        dateError.classList.add("hidden");
    }
}

function checkYear(){
    var year = document.getElementById("Year").value;
    var yearError = document.getElementById("year-error");

    if(year <= 1899 || year > 2023){
        yearError.classList.remove("hidden");
    }
    else{
        yearError.classList.add("hidden");
    }
}

function checkLeapYear(year){
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        return true;
    }
    return false;
}

document.getElementById("submit-btn").addEventListener("click", function(){
    calculateAge(document.getElementById("Year").value, document.getElementById("Month").value, document.getElementById("Date").value);
    // document.getElementById("month-smt").textContent = month;
});

function yearDifference(yearOfBirth){
    return DayToday.getFullYear() - yearOfBirth;
}

function monthDifference(startDate) {
    console.log(DayToday.getMonth());
    return (
      DayToday.getMonth() -
      startDate +
      12 * (DayToday.getFullYear() - document.getElementById("Year").value  )
    );
  }
  
  function calculateAge(year, month, day){
    var dob = new Date(year, month - 1, day);

    var ageDifference = DayToday - dob;
    var ageDate = new Date(ageDifference);
    var years = ageDate.getUTCFullYear() - 1970;
    var months = ageDate.getUTCMonth();
    var days = ageDate.getUTCDate() - 1;
    document.getElementById("year-smt").textContent = years;
    document.getElementById("month-smt").textContent = months;
    document.getElementById("day-smt").textContent = days;
  }