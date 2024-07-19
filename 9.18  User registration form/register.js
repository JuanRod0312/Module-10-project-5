const formErrorsDiv = document.getElementById('formErrors');
   formErrorsDiv.classList.add('hide');
function checkForm() {
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

    const ul = document.createElement('ul');

    if (fullName < 1) 
      {
      document.getElementById('formErrors').classList.remove('hide');
      document.getElementById('fullName').classList.add('error');
      let errormes = document.getElementById('formErrors')
      errormes.innerHTML += '<li>Full name is required</li>';
      }

    if (!emailRegex.test(email)|| email < 1) 
      {
         document.getElementById('formErrors').classList.remove('hide');
         document.getElementById('email').classList.add('error');
         let errormes = document.getElementById('formErrors')
         errormes.innerHTML += '<li>Invalid or missing email address.</li>';
      }
   
    if (password.length < 10 || password.length > 20) 
      {
         document.getElementById('formErrors').classList.remove('hide');
         document.getElementById('password').classList.add('error');
         let errormes = document.getElementById('formErrors')
         errormes.innerHTML += '<li>Password must be between 10 and 20 characters.</li>';
      }

    if (!lowercaseRegex.test(password)) 
      {
         document.getElementById('formErrors').classList.remove('hide');
         document.getElementById('password').classList.add('error');
         let errormes = document.getElementById('formErrors')
         errormes.innerHTML += '<li>Password must contain at least one lowercase letter.</li>';
      }

    if (!uppercaseRegex.test(password)) 
      {
         document.getElementById('formErrors').classList.remove('hide');
         document.getElementById('password').classList.add('error');
         let errormes = document.getElementById('formErrors')
         errormes.innerHTML += '<li>Password must contain at least one uppercase letter.</li>';
      }
    if (!digitRegex.test(password)) 
      {
         document.getElementById('formErrors').classList.remove('hide');
         document.getElementById('password').classList.add('error');
         let errormes = document.getElementById('formErrors')
         errormes.innerHTML += '<li>Password must contain at least one digit.</li>';
      }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});