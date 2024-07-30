import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);
  let title;

  if(authorized == false) {
    title = "Enter the Password";
  }
  else if(authorized == true){
      title = "Contact";
  }
  else {
    title = "Authentication Error Occured";
  }

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

  const login = (
    <form action="#" onSubmit={handleSubmit}>
      <input type="password" placeholder="Password" />
      <input type="submit"/>
    </form>
  );

  const contactInfo = (
    <ul>
        <li>
          client@example.com
        </li>
        <li>
          555.555.5555
        </li>
    </ul>
  );

  return (
      <div id="authorization">
        <h1>{title}</h1>
        {authorized == true ? contactInfo : login}
      </div>
  );
}

export default Contact;