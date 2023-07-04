var details = document.querySelectorAll(".details").length;
var users =[];



for(var i = 0; i < details; i++){
    document.querySelectorAll(".details")[i].addEventListener("click", function(){
    
        var userName = prompt("Please enter your username (must be between 1 and 10 characters):");
        var phoneNumber = prompt("Please enter your phone number (must be 11 digits):");
        var email = prompt("Please enter your email address (must be a valid email address and atleast contain 11 characters):");
        var password = prompt("Please enter your password (must be at least 6 characters):");
        var confirmPassword = prompt("Please confirm your password:");
        
        if (userName.length > 0 && userName.length < 10 && phoneNumber.length === 11 && email.includes("@") && email.includes(".") && email.length >= 11 && password.length >= 6 && password === confirmPassword) {
          alert("All user data is valid!");


         
          var user = {
            userName : userName,
            phoneNumber : phoneNumber,
            email : email
          }

          users.push(user);
          
          
        
        }
        
        else {
          alert("Some user data is invalid. Please try again.");
        }




      
        
    })
}





function revealDetails(){


  var reveal = document.getElementById("reveal").innerHTML = "your details:"+ JSON.stringify(users);
}

