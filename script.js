

let answer=generateRandom16DigitString();
function signup(e){

event.preventDefault();


var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;



var user={
name:name,
email:email,
password:password,
token:answer,
};

let json=JSON.stringify(user);
localStorage.setItem("hello",json);

console.log("login successful");

window.location.href = "login.html";




}

function generateRandom16DigitString() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Possible characters for the 16-digit string

  for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
  }

  return result;
}


