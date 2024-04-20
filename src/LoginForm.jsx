import React,{ useState } from "react";

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Log In</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email@gmail.com" id="email" name="email" />
                <label for="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Don't have an Account? Register here</button>
        </div>
    )
}
export default LoginForm