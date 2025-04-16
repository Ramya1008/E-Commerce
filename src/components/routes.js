import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layoutcmp from "./layout";
import Sectioncmp from "./section";
import Electronicscmp from "./electronics";
import Mencmp from "./mens";
import Womencmp from "./women";
import Jewellerycmp from "./jewellery";
import ProdDescCmp from "./productdesc";
import SignUpForm from "./signup";
import LoginInForm from "./login";
import AllProducts from "./allproducts";
import EditProd from "./editprod";

function Routingcom() {

    return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layoutcmp />}>
                        <Route index element={<Sectioncmp />} />
                        <Route path="electronics" element={<Electronicscmp />} />
                        <Route path="jewelery" element={<Jewellerycmp />} />
                        <Route path="men's clothing" element={<Mencmp />} />
                        <Route path="women's clothing" element={<Womencmp />} />
                        <Route path="/products/:id" element={<ProdDescCmp />} />
                        <Route path="/signup" element={<SignUpForm />} />
                        <Route path="/login" element={<LoginInForm />} />
                        <Route path="/products" element={<AllProducts />} />
                        <Route path="/home" element={<Sectioncmp />} />
                        <Route path="/edit/:id" element={<EditProd />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routingcom