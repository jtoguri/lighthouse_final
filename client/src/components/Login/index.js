import './Login.css';

export default function Login() {
  return (
    <div>
      <h1>Login to Lighthouse Final</h1>
      <form className="login-form">
        <div>
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" id="inputEmail"/>
        </div>
        <div>
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control"
          id="inputPassword"/>
        </div>
        <div>
          <input type="submit"/>
        </div>
      </form>
    </div>
  );
}
