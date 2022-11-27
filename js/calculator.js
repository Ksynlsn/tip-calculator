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


function testData() {
    alert(` Total cc tips are: ${totalCCTips}
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

    submit.addEventListener('click', testData, false);

}

