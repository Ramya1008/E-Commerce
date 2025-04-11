import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProdDescCmp() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json));
    }, [id]);

    return (
        <div className="container my-5">
            <div className="row g-5 align-items-center">
                <div className="col-md-5 text-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid p-4 border rounded shadow-sm"
                        style={{ maxHeight: "400px", objectFit: "contain" }}
                    />
                </div>
                <div className="col-md-7">
                    <h3 className="fw-bold text-primary mb-3">{product.title}</h3>
                    <h4 className="text-success mb-3">Rs.{product.price}</h4>
                    <p className="text-muted">{product.description}</p>
                    <button className="btn btn-outline-primary mt-3 px-4 py-2">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default ProdDescCmp;
