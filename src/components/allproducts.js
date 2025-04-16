import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AllProducts() {
    const [allproduct, setAllproduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setAllproduct(json));
    }, []);

    const handleDelete = (id) => {
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            const updated = allproduct.filter(p => p.id !== id);
            setAllproduct(updated);
        });
    };

    return (
        <div className="container mt-4">
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>price</th>
                        <th>description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allproduct.map((val) => (
                        <tr key={val.id}>  {/* Add key prop */}
                            <td>{val.id}</td>
                            <td>{val.title}</td>
                            <td>{val.price}</td>
                            <td>{val.description}</td>
                            <td>
                                <Link to={`/edit/${val.id}`}>
                                    <button className="btn btn-primary btn-sm">Edit</button>
                                </Link>
                            </td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(val.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllProducts;
