import { useState } from "react";
import facade from "./apiFacade";
import LoggedIn from "./LoggedIn";
import '../styles/loginstyle.css'
import { Container } from "react-bootstrap";

export function LoginUI({loggedIn, setLoggedIn}) {
  

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };

  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };

  return (
    <div>
      {!loggedIn ? (
        <LogIn login={login}/>
      ) : (
        <div>
          <LoggedIn facade={facade} />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}


function LogIn({ login }) {
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);
   
    const performLogin = (evt) => {
      evt.preventDefault();
      login(loginCredentials.username, loginCredentials.password);
    }
    const onChange = (evt) => {
      setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }
   
    return (
      <Container className="LoginBackground">
      <div >
        <h2>Login</h2>
        <form onChange={onChange} >
          <input className="input1" placeholder="User Name" id="username" />
          {<br></br>}
          <input className="input2" placeholder="Password" id="password" />
          {<br></br>}
          <button className="button" onClick={performLogin}>Login</button>
        </form>
        {<img src="./r/src/IMG_0036.jpg" alt="På toppen af skolen"/>}
      </div>
      </Container>
    )
   
  }

  export default LogIn;