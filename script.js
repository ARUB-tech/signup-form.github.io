const form = document.getElementById('form');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})


const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;

}


function Validate(){
    const usernameVal = username.value.trim();
    const lastnameVal = lastname.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let isValid=true;

    //username

    if(usernameVal === ""){
        setErrorMsg(username, 'first name cannot be blank');
        isValid=false;
    }
    else if(usernameVal.length <=2){
        setErrorMsg(username, 'min 3 char');
        isValid=false;
    }
    

    //last name

    if(lastnameVal === ""){
        setErrorMsg(lastname, 'last name cannot be blank');
        
        isValid=false;
    }
    else if(lastnameVal.length <=2){
        setErrorMsg(lastname, 'min 3 char');
        isValid=false;
    }
    
    //email

    if(emailVal === ""){
        setErrorMsg(email, 'email cannot be blank');
        isValid=false;
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'email is not valid');
        isValid=false;
    }
    

    //password
    if(passwordVal === ""){
        setErrorMsg(password, 'password cannot be blank');
        isValid=false;
    }
    else if(passwordVal.length <= 7){
        setErrorMsg(password, 'min 8 char');
        isValid=false;
    }
    

    //confirm password
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'confirm password cannot be blank');
        isValid=false;
    }
    else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'Not Matched!');
        isValid=false;
    }
    
   isValid && alert(`successfully registered \n first name:${usernameVal} \n last name:${lastnameVal} \n email :${emailVal} \n password :${passwordVal} `)


}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}


