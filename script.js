const form=document.getElementById('myform');
const fname=document.getElementById('fname');
const lname=document.getElementById('lname');
const email=document.getElementById('email');
const password=document.getElementById('password');
const button=document.querySelector('.btn');

form.addEventListener('submit',validate);
button.addEventListener('click',validate);

function validate(e){
    e.preventDefault();
    const firstName=fname.value.trim();
    const lastName=lname.value.trim();
    const Email=email.value.trim();
    const pass=password.value.trim();
    if(firstName===''){
      setError(fname,'First Name cannot be empty');
    }
    else if(firstName.length<3){
        setError(fname,'Name must be at least 3');
    }
    else{
        success(fname);
    }
    if(lastName===''){
        setError(lname,'Last Name cannot be empty');
      }
     else{
          success(lname);
    }
    if(Email===''){
        setError(email,'Email cannot be empty');
    }
    else if(!isEmail(Email)){
        setError(email,'Enter a valid Email');
    }
    else{
          success(email);
    }
    const upperCase=/[A-Z]/g;
    const lowerCase=/[a-z]/g;
    const num=/[0-9]/g;
    if(pass===''){
        setError(password,'Password cannot be empty');
    }
    else if(pass.length>=8 && pass.match(upperCase)&& pass.match(lowerCase)&& pass.match(num)){
        success(password);
    }
    else if(pass.length<8){
        setError(password,'Password cannot be less than 8');
    }
    else{
          setError(password,'Password must contain uppercase and lowercase');
     }
}
function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
function setError(id,error){
   const formcard=id.parentElement;
   const para=formcard.querySelector('p');
    para.innerText=error;
    /*id.parentElement.querySelector('p').innerText=error; ---- Other Way*/
    id.className ='err';
    para.classList.add('err-txt');
    para.style.display='block';
}
function success(id){
    id.className = 'success';
    const formcard=id.parentElement;
   const para=formcard.querySelector('p');
     if( para.classList.contains('err-txt')){
        para.style.display='none';
     }
}