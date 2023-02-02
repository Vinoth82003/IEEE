const login = document.querySelector('.login');
const password = document.querySelector('#pass');
const unamein = document.querySelector('#uname');
var uname = document.getElementById('uname').value;
var pass = document.getElementById('pass').value;
// var len = pass.length;
var len;
console.log(len);
console.log(login);
console.log(uname);
console.log(pass);

login.addEventListener('click',function(){
    console.log('hi');
    if(uname === ''){
        document.getElementById('erroru').innerHTML=' * user name is required ';
        document.getElementById('erroru').style.display='block';
    }else if(pass === ''){
        document.getElementById('erroru').innerHTML=' * passworrd is required ';
        document.getElementById('erroru').style.display='block';
    }



});

password.addEventListener('input', function(){
    if (firstIsUppercase(document.getElementById('pass').value)) {
        document.getElementById('erroru').innerHTML=' * your 1st letter is in caps ';
        document.getElementById('erroru').style.display='block';
      } else {
        document.getElementById('erroru').style.display='none';
    }


   setInterval(() => {
    var len = document.getElementById('pass').value.length;
    var len1 = document.getElementById('pass').value.length;

    console.log(len1);
        if (len >= 8) {
            document.getElementById('errorp').innerHTML = ' Strong password '+len;
            document.getElementById('errorp').style.display='block';
            document.getElementById('errorp').style.background='green';
            document.getElementById('errorp').style.color='white';
        }else if (len == 0) {
            document.getElementById('errorp').style.display='none';
        } else{
            document.getElementById('errorp').innerHTML = '* length of your password is '+len;
            document.getElementById('errorp').style.display='block';
            document.getElementById('errorp').style.background='#ffcfcf';
            document.getElementById('errorp').style.color=' #ff0000';
        }
   }, 10);


});

