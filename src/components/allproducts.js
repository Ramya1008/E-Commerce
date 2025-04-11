
import { useEffect, useState } from "react";

function AllProducts() {
    const [allproduct, setAllproduct] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setAllproduct(json));
    }, []);

    const handleDelete = (id) => {
        const updatedProducts = allproduct.filter(product => product.id !== id);
        setAllproduct(updatedProducts);
    };

    return (
        <>
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
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{val.price}</td>
                                <td>{val.description}</td>
                                <td><button className="btn btn-primary btn-sm">Edit</button></td>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(val.id)}>Delete</button>
                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default AllProducts;