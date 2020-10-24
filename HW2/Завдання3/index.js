    
// const message = prompt("Password");
// if(message === null){alert("Відмінено користувачем")}
// if(message == "jqueryismyjam"){alert("Ласкаво просимо")}else{alert("Пароль хибний")};


const Admin = "goit";
let message;
 
let input = prompt("Passsword");

if (input === null) {
    message = "User cancle" ;
}
else if (input === Admin) {
     message = "Welcome";
    }
else{messege = "undefinded";}
alert(message);



