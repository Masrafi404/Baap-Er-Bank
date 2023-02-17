document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const passowrd = passwordField.value;
    console.log(email, passowrd);
    if(email === 'sontan@baap.com' && passowrd === 'money'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Tore ami teijjo sontan gosona korlam 1ta passowrd Mone rakhte parona')
    }

})