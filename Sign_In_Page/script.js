let signUpBtn = document.querySelector('.signUpBtn');
let signInBtn = document.querySelector('.signInBtn');
let Name = document.querySelector('.Name');
let Title = document.querySelector('.title');
let Underline = document.querySelector('.underline');
let Txt = document.querySelector('.text');

signInBtn.addEventListener('click', () => {
  Name.style.maxHeight = '0px';
  Title.innerHTML = 'Sign In';
  Txt.innerHTML = 'Forgot Password';
  signUpBtn.disabled = false;
  signInBtn.disabled = true;
  Underline.style.transform = 'translateX(35px)';
});

signUpBtn.addEventListener('click', () => {
  Name.style.maxHeight = '60px';
  Title.innerHTML = 'Sign Up';
  Txt.innerHTML = 'Password Suggestion';
  signUpBtn.disabled = true;
  signInBtn.disabled = false;
  Underline.style.transform = 'translateX(0px)';
});