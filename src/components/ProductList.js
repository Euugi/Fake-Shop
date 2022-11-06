import ProductCart from "./ProductCart";
import '../style/ProductList.css';

function ProductList({products}) {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCart product={product}/>
            ))}
        </div>
    )
}

export default ProductList;