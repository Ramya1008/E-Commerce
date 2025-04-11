
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUpForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        fetch('https://fakestoreapi.com/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          })
            .then(response => response.json())
            .then(data => console.log(data));
    };
    return (
        <div className="container mt-5" style={{ maxWidth: "350px" }}>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">UserName</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
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
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-success w-100">
                    <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>Submit</Link>
                </button>

            </form>
        </div>
    );
}

export default SignUpForm;

