const fields = document.querySelectorAll(".field")
const submit = document.querySelector(".submit")
const errors = document.querySelectorAll(".error")
const firstName = document.querySelector("[firstName]")
const lastName = document.querySelector("[lastName]")
const email = document.querySelector("[email]")
const pass = document.querySelector("[pass]")
const inputs = document.querySelectorAll(".input")
const passText = document.querySelector(".passText")
const errorTexts = document.querySelectorAll(".t")

let hiddenPass=""
let dummyStr=""
let dummyStr2=""
let flag=1

let mailcheck=["!","#","$","%","^","&","*","(",")","/","[","]","{","}","|",","," " , "-" , "=" , "+"]
let namecheck=["!","#","$","%","^","&","*","(",")","/","[","]","{","}","|",",",".","@","-","1","2","3","4","5","6","7","8","9","0"]
function error(box,value){
    box.parentElement.style.cssText="background-color: hsl(0, 100%, 74%,0.5)"
    errors[value].classList.add("active")
    errorTexts[value].classList.add("active")
    flag=0
    
}
function checkfName(){
    if(firstName.value==null || firstName.value.trim().length == 0){
        error(firstName,0)
    }
    else if(firstName.value.split(" ").length!=1){
        error(firstName,0)
        errorTexts[0].innerText="First name can not contain space"
    }
    else{
        let arr= firstName.value.split('')
            for(let i=0;i<arr.length;i++){
             for(let j=0;j<namecheck.length;j++){
                 if(arr[i]==namecheck[j]){
                    errorTexts[0].innerText="Can not contain special letters/numbers"
                     error(firstName,0)
                 }
             }
            }
    }
}

function checklName(){
    if(lastName.value==null || lastName.value.trim().length == 0){
        error(lastName,1)
    }
    else if(lastName.value.split(" ").length!=1){
        error(lastName,1)
        errorTexts[1].innerText="Last name can not contain space"
    }
    else{
        let arr= lastName.value.split('')
            for(let i=0;i<arr.length;i++){
             for(let j=0;j<namecheck.length;j++){
                 if(arr[i]==namecheck[j]){
                    errorTexts[1].innerText="Can not contain special letters/numbers"
                     error(lastName,1)
                 }
             }
            }
    }
}

function checkEmail(){
    if(email.value==null || email.value.trim().length == 0 || !email.value.endsWith("@gmail.com")){
        error(email,2)
    }
    else{
        if(email.value!= email.value.toLowerCase()){
            error(email,2)
        }
        else{
            let arr= email.value.split('')
            for(let i=0;i<arr.length;i++){
             for(let j=0;j<mailcheck.length;j++){
                 if(arr[i]==mailcheck[j]){
                     error(email,2)
                 }
             }
            }
         }
        }
  
}

function checkPassword(){
    if(pass.value==null || pass.value.trim().length == 0){
        passText.innerText= "Password can not containonly spaces"
        error(pass,3)
    }
    else if(pass.value.length<6){
        passText.innerText= "Password must have atleast 6 character"
        error(pass,3)
    }
    
}
function resetBox(div,index){
    div.parentElement.style.cssText="background-color: inherit "
    errors[index].classList.remove("active")
    errorTexts[index].classList.remove("active")
    flag=1
   
}

function submitted(){
    checkfName();
    checklName();
    checkEmail();
    checkPassword();
    if(flag==1){
        alert("Details submitted, Thank You!")
        for(let i=0 ; i<4 ; i++){
            inputs[i].value =""
        }
    }
}

submit.addEventListener("click",submitted)
firstName.addEventListener("input",()=>{
    resetBox(firstName,0)
})

lastName.addEventListener("input",()=>{
    resetBox(lastName,1)
})

email.addEventListener("input",()=>{
    resetBox(email,2)
})

pass.addEventListener("input",()=>{
    resetBox(pass,3)
    }
)