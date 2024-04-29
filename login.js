document.getElementById('loginForm').addEventListener('submit', (My)=>{
    My.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    console.log(email);
    console.log(pass);

    if(email=="" && pass=="" ){
        alert("Please fill all the fields");
    }
    else{
        if(email=='naveen123@gmail.com'){
            if(pass=='12345'){
                window.location.href = "Login.html";
            }
            else{
                alert("Wrong password");
            }
            
        }
        else{
            alert("Wrong email");
        }
        
    }

});