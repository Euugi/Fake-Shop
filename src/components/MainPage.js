import NavBar from "./NavBar";
import NavSide from "./NavSide";
import ProductList from "./ProductList";
import '../style/MainPage.css';
import { useState, useEffect } from 'react';

function MainPage() {
    const [products, fetchProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => {
                return res.json();
            })
            .then(data => {
                fetchProducts(data)
            })
    }, []);


    return (
        <div className="main">
            <NavBar/>
            <div className="homepage">
                {products && <ProductList products={ products }/>}
                <NavSide/>
            </div>
        </div>
    )
}

export default MainPage;