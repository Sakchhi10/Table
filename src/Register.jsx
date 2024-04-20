import React,{ useState } from "react";

const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <label for="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}type="name" placeholder="Username" id="name" name="name" />
                <label for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email@gmail.com" id="email" name="email" />
                <label for="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" id="password" name="password" />
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Log In</button>
        </div>
    )
}

export default Register