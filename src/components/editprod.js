import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EditProd() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    });

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct({
                title: data.title,
                price: data.price,
                description: data.description
            }));
    }, [id]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(() => {
            alert("Product Updated!");
            navigate("/products");
        })
        .catch((err) => {
            alert("Error updating product: " + err);
        });
    };

    return (
        <div className="container mt-4">
            <h3>Edit Product {id}</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={product.title} 
                        onChange={handleChange} 
                        className="form-control" 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input 
                        type="number" 
                        name="price" 
                        value={product.price} 
                        onChange={handleChange} 
                        className="form-control" 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea 
                        name="description" 
                        value={product.description} 
                        onChange={handleChange} 
                        className="form-control" 
                        required 
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-success">Update</button>
            </form>
        </div>
    );
}

export default EditProd;
