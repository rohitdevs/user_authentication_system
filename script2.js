
let user1=localStorage.getItem("hello");
let userobj=JSON.parse(user1);

let name=document.getElementById("namee");
let email=document.getElementById("emaill");
let password=document.getElementById("passwordd");
let token=document.getElementById("tokenn");

name.innerText=userobj.name;
email.innerText=userobj.email;
password.innerText=userobj.password;
token.innerText=userobj.token;


function logout(e)
{
  event.preventDefault();
  localStorage.clear();
  window.location.href = "index.html";
  
 
}