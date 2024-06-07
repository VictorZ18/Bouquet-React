import '../views/App.scss';

function Register() {
    return (
        <div className="login">
            <form className="loginForm">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="username" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
};

export default Register;