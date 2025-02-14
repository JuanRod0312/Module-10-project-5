const formErrorsDiv = document.getElementById('formErrors');
   formErrorsDiv.classList.add('hide');
function checkForm() 
{
   const fullName = document.getElementById('fullName').value;
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;
   const passwordConfirm = document.getElementById('passwordConfirm').value;
   const formErrorsDiv = document.getElementById('formErrors');
   formErrorsDiv.innerHTML = '';

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;
    let hasErrors = false;

    const ul = document.createElement('ul');
    
    document.getElementById('fullName').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('password').classList.remove('error');
    document.getElementById('passwordConfirm').classList.remove('error');

    if (fullName < 1) 
      {
      document.getElementById('formErrors').classList.remove('hide');
      document.getElementById('fullName').classList.add('error');
      let errormes = document.getElementById('formErrors')
      errormes.innerHTML += '<li>Missing full name.</li>';
      hasErrors = true;
      }

    if (!emailRegex.test(email)|| email < 1) 
      {
         document.getElementById('formErrors').classList.remove('hide');
         document.getElementById('email').classList.add('error');
         let errormes = document.getElementById('formErrors')
         errormes.innerHTML += '<li>Invalid or missing email address.</li>';
         hasErrors = true;
      }
   
    if (password.length < 10 || password.length > 20) 
      {
         document.getElementById('formErrors').classList.remove('hide');
         document.getElementById('password').classList.add('error');
         let errormes = document.getElementById('formErrors')
         errormes.innerHTML += '<li>Password must be between 10 and 20 characters.</li>';
         hasErrors = true;
      }

    if (!lowercaseRegex.test(password)) 
      {
         document.getElementById('formErrors').classList.remove('hide');
         document.getElementById('password').classList.add('error');
         let errormes = document.getElementById('formErrors')
         errormes.innerHTML += '<li>Password must contain at least one lowercase character.</li>';
         hasErrors = true;
      }

    if (!uppercaseRegex.test(password)) 
      {
         document.getElementById('formErrors').classList.remove('hide');
         document.getElementById('password').classList.add('error');
         let errormes = document.getElementById('formErrors')
         errormes.innerHTML += '<li>Password must contain at least one uppercase character.</li>';
         hasErrors = true;
      }
    if (!digitRegex.test(password)) 
      {
         document.getElementById('formErrors').classList.remove('hide');
         document.getElementById('password').classList.add('error');
         let errormes = document.getElementById('formErrors')
         errormes.innerHTML += '<li>Password must contain at least one digit.</li>';
         hasErrors = true;
      }
    if (password !== passwordConfirm) 
      {
         document.getElementById('formErrors').classList.remove('hide');
         document.getElementById('passwordConfirm').classList.add('error');
         let errormes = document.getElementById('formErrors')
         errormes.innerHTML += "<li>Password and confirmation password don't match.</li>";
         hasErrors = true;
      }
      if (hasErrors === false) 
      {
         document.getElementById('formErrors').classList.add('hide');
      }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});