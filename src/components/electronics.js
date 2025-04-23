import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./customHook";
function Electronicscmp() {
    //const [count, setCount] = useState([]);
    const Navigation = useNavigate();
    const [count]= useFetch("https://fakestoreapi.com/products/category/electronics")
    /*useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then(json => setCount(json));
            
    }, []);*/
    
    const Display = (val) => {
        Navigation(`/products/${val}`);
    };

    return (
        <div className="container my-5 ">
            <h2 className="text-center text-dark fw-bold mb-4">Electronics</h2>
            <div className="row g-4">
                {count.map((val) => (
                    <div
                        className="col-12 col-sm-6 col-md-4 col-lg-3"
                        key={val.id}
                        onClick={() => Display(val.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="card h-100 shadow-sm border-0">
                            <img
                                src={val.image}
                                className="card-img-top p-3"
                                alt={val.title}
                                style={{ height: '200px', objectFit: 'contain' }}
                            />
                            <div className="card-body text-center">
                                <h6 className="card-title">{val.title}</h6>
                                <p className="card-text fw-bold text-success">Rs. {val.price}</p>
                                <button className="btn btn-outline-primary btn-sm">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Electronicscmp;
