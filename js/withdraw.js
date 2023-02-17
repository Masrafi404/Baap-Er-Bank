document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid Number')
        return;
    }
    const withdrawTotalelement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalelement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    if( newWithdrawAmount > previousBalanceTotal){
        alert('Baap er bank a ato tk nai');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalelement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})