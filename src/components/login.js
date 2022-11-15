import React from 'react'

function Login() {
  return (
    <div>
      <label>username</label>
      <br></br>
      <input type="text" name="uname" placeholder="username" />
      <br></br>
      <label>Password</label>
      <br></br>
      <input type="password" name="ename" placeholder="Password" />
      <br></br>
      <button>Submit</button>
    </div>
  );
}

export default Login