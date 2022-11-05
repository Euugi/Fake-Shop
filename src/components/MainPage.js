import NavBar from "./NavBar";
import NavSide from "./NavSide";
import ProductList from "./ProductList";

function MainPage() {
    return (
        <div className="main">
            <NavBar/>
            <ProductList/>
            <NavSide/>
        </div>
    )
}

export default MainPage;