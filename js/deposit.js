document.getElementById('btn-deposit').addEventListener('click', function(){
const depositField = document.getElementById('deposit-field');
const newDepositAmmountString = depositField.value;
const newDepositAmmount = parseFloat(newDepositAmmountString);
depositField.value = '';
if(isNaN(newDepositAmmount)){
    alert('Please provide a valid Number')
    return;
}

const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalstring = depositTotalElement.innerText;
const previuousdepositTotal = parseFloat(previousDepositTotalstring);
 
const currentDepositTotal = previuousdepositTotal + newDepositAmmount;
depositTotalElement.innerText = currentDepositTotal;

const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString =  balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

const currentBalanceTotal = previousBalanceTotal + newDepositAmmount
balanceTotalElement.innerText = currentBalanceTotal;


})