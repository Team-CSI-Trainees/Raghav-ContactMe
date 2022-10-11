let uname = document.getElementById("name");
let gender = document.getElementsByClassName("gender");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let pswd = document.getElementById("pswd");
let cpswd = document.getElementById("c-pswd");


// calling a function

uname.addEventListener('input',function(){
    if(uname.value =="")
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

// validation of the form starting 

let cusername= /^([a-zA-Z ]{3,20})$/;
let cphone= /^[7-9]([0-9]){9}$/;
let cemail= /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-]+).([a-z]{2,10})(.[a-z]{2,8})?$/;
let cpassword= /^([a-zA-Z0-9_@]){2,20}$/;


function formvalidate(){
    let flag=1;

    for(let elm of gender){
        if(elm.checked == false)
        {
            document.getElementById("gender-check").innerHTML="**Please Select your gender";
            flag=0; 
        }
        else{
        document.getElementById("gender-check").innerHTML="";
        flag=1;
        break;}
        
        }
    
if(cusername.test(uname.value)){
    document.getElementById("name-check").innerHTML="";
}
else{
    document.getElementById("name-check").innerHTML="**Username must contain minimum 3 characters";
    flag=0;
}


    
if(cphone.test(phone.value)){
    document.getElementById("phone-check").innerHTML="";
}
else{
    document.getElementById("phone-check").innerHTML="**Invalid Phone Number";
    flag=0;
}

if(cemail.test(email.value)){
    document.getElementById("email-check").innerHTML="";
}
else{
    document.getElementById("email-check").innerHTML="**Enter a valid Email Id";
    flag=0;
}

if(cpassword.test(pswd.value)){
    document.getElementById("pswd-check").innerHTML="";
}
else{
    document.getElementById("pswd-check").innerHTML="**Password must contain 8 characters";
    flag=0;
}

if(pswd.value!=cpswd.value){
    document.getElementById("cpswd-check").innerHTML="**Password not matched";
    flag=0;
}
else
     document.getElementById("cpswd-check").innerHTML="";
if(flag==0)
return false; 
else
return display();
};

function display(){
    document.getElementById("layer").style.display="block";
  
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("select-branch").value);
    console.log(document.querySelector('input[name="gender"]:checked').value);
    console.log(document.getElementById("phone").value);
    console.log(document.getElementById("email").value);

    let close=document.getElementById("close");
    close.addEventListener('click',function(){
        return true;
    });
    return false;
}