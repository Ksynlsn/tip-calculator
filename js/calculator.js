document.addEventListener("DOMContentLoaded", function () {

    const CCtips = document.getElementById('CCtips');
    const cashTips = document.getElementById('cashTips');

    const shift1 = document.getElementById('shift-1');
    const shift2 = document.getElementById('shift-2');
    const shift3 = document.getElementById('shift-3');
    const shift4 = document.getElementById('shift-4');

    const myForm = document.getElementById('form');
    const resultsDiv = document.getElementById('results');

    myForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let s1 = shift1.valueAsNumber || 0;
        let s2 = shift2.valueAsNumber || 0;
        let s3 = shift3.valueAsNumber || 0;
        let s4 = shift4.valueAsNumber || 0;

        let totalHours = s1 + s2 + s3 + s4;

        let cc = parseFloat(CCtips.value) || 0;
        let cash = parseFloat(cashTips.value) || 0;

        if (totalHours === 0) {
            resultsDiv.innerHTML = "<p>Please enter hours worked.</p>";
            return;
        }

        let ccRate = cc / totalHours;
        let cashRate = cash / totalHours;

        function calc(h, r) {
            return (h * r).toFixed(2);
        }

        resultsDiv.innerHTML = `
            <h2>Results</h2>
            <p>Total Hours: ${totalHours}</p>
            <hr>
            <p>Person 1 - CC: $${calc(s1, ccRate)} | Cash: $${calc(s1, cashRate)}</p>
            <p>Person 2 - CC: $${calc(s2, ccRate)} | Cash: $${calc(s2, cashRate)}</p>
            <p>Person 3 - CC: $${calc(s3, ccRate)} | Cash: $${calc(s3, cashRate)}</p>
            <p>Person 4 - CC: $${calc(s4, ccRate)} | Cash: $${calc(s4, cashRate)}</p>
        `;
    });

});

/*let CCtips = document.getElementById('CCtips');
let cashTips = document.getElementById('cashTips');

let shift1 = document.getElementById('shift-1');
let shift2 = document.getElementById('shift-2');
let shift3 = document.getElementById('shift-3');
let shift4 = document.getElementById('shift-4');

let myForm = document.getElementById('form');
let resultsDiv = document.getElementById('results');

// MAIN CALCULATION FUNCTION
function calculateTips(e) {
    e.preventDefault(); 

    let shift1Hrs = shift1.valueAsNumber || 0;
    let shift2Hrs = shift2.valueAsNumber || 0;
    let shift3Hrs = shift3.valueAsNumber || 0;
    let shift4Hrs = shift4.valueAsNumber || 0;

    let totalCCTips = parseFloat(CCtips.value) || 0;
    let totalCashTips = parseFloat(cashTips.value) || 0;

    let totalHours = shift1Hrs + shift2Hrs + shift3Hrs + shift4Hrs;

    if (totalHours === 0) {
        resultsDiv.innerHTML = "<p>Please enter hours worked.</p>";
        return;
    }

    let ccMultiplier = totalCCTips / totalHours;
    let cashMultiplier = totalCashTips / totalHours;

    function calcTips(hours, multiplier) {
        return (hours * multiplier).toFixed(2);
    }

    let results = [
        {
            person: 1,
            cc: calcTips(shift1Hrs, ccMultiplier),
            cash: calcTips(shift1Hrs, cashMultiplier)
        },
        {
            person: 2,
            cc: calcTips(shift2Hrs, ccMultiplier),
            cash: calcTips(shift2Hrs, cashMultiplier)
        },
        {
            person: 3,
            cc: calcTips(shift3Hrs, ccMultiplier),
            cash: calcTips(shift3Hrs, cashMultiplier)
        },
        {
            person: 4,
            cc: calcTips(shift4Hrs, ccMultiplier),
            cash: calcTips(shift4Hrs, cashMultiplier)
        }
    ];

    // DISPLAY RESULTS (no popup 🚀)
    let output = `
        <h2>Results</h2>
        <p><strong>Total Hours:</strong> ${totalHours}</p>
        <p><strong>CC Multiplier:</strong> ${ccMultiplier.toFixed(2)}</p>
        <p><strong>Cash Multiplier:</strong> ${cashMultiplier.toFixed(2)}</p>
        <hr>
    `;

    results.forEach(r => {
        output += `
            <p><strong>Person ${r.person}</strong><br>
            CC Tips: $${r.cc}<br>
            Cash Tips: $${r.cash}</p>
        `;
    });

    resultsDiv.innerHTML = output;
}

// RESET BUTTON
function resetForm() {
    myForm.reset();
    resultsDiv.innerHTML = "";
}

// EVENT LISTENER
myForm.addEventListener('submit', calculateTips);
*/


/*
let CCtips = document.getElementById('CCtips');
let cashTips = document.getElementById('cashTips');
let totalCCTips = '';
let totalCashTips = '';
let totalHours = '';
let myTips = '';
let shift1Hrs = '';
let shift2Hrs = '';
let shift3Hrs = '';

let shift1 = document.getElementById('shift-1');
let shift2 = document.getElementById('shift-2');
let shift3 = document.getElementById('shift-3');

// Submit - Reset - myForm
let submit = document.getElementById('submit');
let reset = document.getElementById('clear');
let myForm = document.getElementById('form');


function validateInput() {

    shift1Hrs = shift1.valueAsNumber;
    shift2Hrs = shift2.valueAsNumber;
    shift3Hrs = shift3.valueAsNumber;

    totalCCTips = CCtips.value;
    totalCashTips = cashTips.value;

    totalHours = shift1Hrs + shift2Hrs + shift3Hrs;

    multiplyer1 = totalCCTips / totalHours;

    multiplyer2 = totalCashTips / totalHours;  
    

// CC Tips 
    shift1CCTipsTotal = shift1Hrs * multiplyer1;
    shift1CCTips = parseFloat(shift1CCTipsTotal.toFixed(2)); 

    shift2CCTipsTotal = shift2Hrs * multiplyer1;
    shift2CCTips = parseFloat(shift2CCTipsTotal.toFixed(2));

    shift3CCTipsTotal = shift3Hrs * multiplyer1;
    shift3CCTips = parseFloat(shift3CCTipsTotal.toFixed(2));

    // check for difference
    elMyTips = shift1CCTips + shift2CCTips + shift3CCTips;
    myTips = elMyTips.toFixed(2);
    difference = totalCCTips - myTips;

    myDifference = difference.toFixed(2);  

    elshift1CCTips = parseFloat(shift1CCTips) + parseFloat(myDifference);
    shift1CCTips = elshift1CCTips.toFixed(2);
    

// Cash Tips
    shift1CashTipsTotal = shift1Hrs * multiplyer2;
    shift1CashTips = parseFloat(shift1CashTipsTotal.toFixed(2));
    
    shift2CashTipsTotal = shift2Hrs * multiplyer2;
    shift2CashTips = parseFloat(shift2CashTipsTotal.toFixed(2));

    shift3CashTipsTotal = shift3Hrs * multiplyer2;
    shift3CashTips = parseFloat(shift3CashTipsTotal.toFixed(2));
  
}

function showData() {
    alert(` Total Hours Worked: ${totalHours}
    \nTotal CC tips are: ${totalCCTips}  |  Total cash tips are: ${totalCashTips}
    \nCC Tip Multiplyer is: ${multiplyer1}
    \nCash Tip Multiplyer is: ${multiplyer2}
    \nPerson 1 CC Tips: ${shift1CCTips}  |  Person 1 Cash tips: ${shift1CashTips}
    \nPerson 2 CC Tips: ${shift2CCTips}  |  Person 2 Cash tips: ${shift2CashTips}
    \nPerson 3 CC Tips: ${shift3CCTips}  |  Person 3 Cash tips: ${shift3CashTips}
    \ndifference (if applicable) rounded to nearest cent: ${myDifference} (this value has been added to Person 1 CC Tips)
   
    `);
}

function testData() {
    alert(` Total CC tips are: ${totalCCTips}
    \nTotal cash tips are: ${totalCashTips}
    \nTotal hours worked today are: ${totalHours}
    \nCC Tip Multiplyer is: ${multiplyer1}
    \nCash Tip Multiplyer is: ${multiplyer2}
    \nShift 1 CC Tips: ${shift1CCTips} cash tips: ${shift1CashTips}
    \nShift 2 CC Tips: ${shift2CCTips} cash tips: ${shift2CashTips}
    \nShift 3 CC Tips: ${shift3CCTips} cash tips: ${shift3CashTips}
    \nmyTips: ${myTips}
    \ndifference rounded to nearest cent: ${myDifference} (this value has been added to Person 1 CC Tips)
   
    `);
}

function resetForm(){
    myForm.reset();
}

window.onload = function() {

    submit.addEventListener('click', showData, false);

}
*/
