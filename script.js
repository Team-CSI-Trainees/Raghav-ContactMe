let my = document.getElementById("my");
let gender = document.getElementsByClassName("gender");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let pswd = document.getElementById("pswd");
let cpswd = document.getElementById("c-pswd");


// calling a function

my.addEventListener('input',function(){
    if(my.value =="")
    document.getElementById("nametxt").style.display='none';
    else
    document.getElementById("nametxt").style.display='block';
});
 

phone.addEventListener('input',function(){
    if(phone.value =="")
    document.getElementById("phone-in").style.display='none';
    else
    document.getElementById("phone-in").style.display='block';
});


email.addEventListener('input',function(){
    if(email.value =="")
    document.getElementById("email-in").style.display='none';
    else
    document.getElementById("email-in").style.display='block';
});


pswd.addEventListener('input',function(){
    if(pswd.value =="")
    document.getElementById("pswd-in").style.display='none';
    else
    document.getElementById("pswd-in").style.display='block';
});


cpswd.addEventListener('input',function(){
    if(cpswd.value =="")
    document.getElementById("c-pswd-in").style.display='none';
    else
    document.getElementById("c-pswd-in").style.display='block';
});

// validation of the form starts


function formvalidate(){ 
    let flag=1;

// validating password

    if(pswd.value == ""){
         document.getElementById("pswd-check").innerHTML="**Enter Password";
         flag=0;}
    else if(pswd.value.length<8){
        document.getElementById("pswd-check").innerHTML="**Password must contain minimum 8 characters";
        flag=0;}
        else
        document.getElementById("pswd-check").innerHTML="";

// validating confirm password

    if(cpswd.value == ""){
        document.getElementById("cpswd-check").innerHTML="**Enter Password to confirm";
        flag=0;}
    else if(pswd.value != cpswd.value){
        document.getElementById("cpswd-check").innerHTML="**Password not matched";
        flag=0;}
    else
       document.getElementById("cpswd-check").innerHTML="";

// validating email

    if(email.value.length == ""){
    document.getElementById("email-check").innerHTML="**Invalid Email";
    flag=0;}
    else
    document.getElementById("email-check").innerHTML="";

// validating phone number

    if(phone.value.length!=10){
    document.getElementById("phone-check").innerHTML="**Invalid Phone No.";
    flag=0;}
    else
    document.getElementById("phone-check").innerHTML="";

// validating gender
    
    for(let elm of gender){
    if(elm.checked == false)
    {
        document.getElementById("gender-check").innerHTML="**Please Select your gender";
        flag=0;
    }
    else{
    document.getElementById("gender-check").innerHTML="";
    break;}
    }
   
// validating username

    if(my.value.length < 3){
    document.getElementById("name-check").innerHTML="**Username requires min 3 char";
    flag=0;}
    else
    document.getElementById("name-check").innerHTML="";

    if(flag==0)
    return false;
    else
    return true;
}
