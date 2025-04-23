import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "./customHook";
function Sectioncmp() {
  //const [count, setCount] = useState([]);
  const [count]= useFetch("https://fakestoreapi.com/products/categories")
  const categoryImages = {
    electronics: 'https://tse2.mm.bing.net/th?id=OIP.A7mkpM5E8jh7rPA4LHkc1wHaE8&pid=Api&P=0&h=180',
    jewelery: 'https://ae01.alicdn.com/kf/HTB1i_LzXpzsK1Rjy1Xbq6xOaFXa5/Luxury-Vintage-Large-Jewelry-Set-Necklace-Earrings-Maxi-Women-Pendent-CHEAP-Fashion-Collares-Statement-F1014-with.jpg',
    "men's clothing": 'https://tse2.mm.bing.net/th?id=OIP.QkH7dk5sA_qFc4NxrzNySwHaJQ&pid=Api&P=0&h=180',
    "women's clothing": 'https://tse3.mm.bing.net/th?id=OIP.2vItQmQRlSnobtTwEoAdiAHaHa&pid=Api&P=0&h=180'
  };

  /*useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCount(json));
  }, []);*/

  return (
    <div className="container my-5 max-vh-100">
      <div className="row g-4 justify-content-center">
        {count.map((value) => (
          <div className="col-6 col-sm-4 col-md-3" key={value}>
            <Link to={`/${value}`} className="text-decoration-none">
              <div className="card text-center border-0 shadow-sm h-100 w-100">
                <img
                  src={categoryImages[value]}
                  className="card-img-top p-3"
                  alt={value}
                  style={{ height: '150px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h6 className="card-title text-capitalize text-dark">{value}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sectioncmp;

