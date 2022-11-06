import { useState } from 'react';
import '../style/ProductCart.css';

function ProductCart({product}) {
    const [title, setTitle] = useState(product.title);
    if (title.length > 50) {
        setTitle(title.substr(0,50));
    }
    return (
        <div className="product-cart">
            <div className="product__name">
            <p>{title}</p>
            </div>
            <div className="product__image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="product__price">
                <p>{product.price}$</p>
            </div>
        </div>
    )
}

export default ProductCart;