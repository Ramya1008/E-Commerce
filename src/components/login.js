import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                if (json.token) {
                    fetch('https://fakestoreapi.com/users')
                        .then(res => res.json())
                        .then(user => {
                            navigate('/home');
                        });
                } else {
                    alert("Invalid credentials");
                }
            })
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "350px" }}>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={data.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;



