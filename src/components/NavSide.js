import '../style/NavSide.css';
import {useState, useEffect} from 'react'

function NavSide() {

    const [categories, fetchCategories] = useState(null);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => {
                return res.json();
            })
            .then(data => {
                fetchCategories(data)
            })
    }, []);

    return (
        <div className="navside">
            <div className="search">
                <input type="search" placeholder='Type something...'></input>
                <p>submit button</p>
            </div>
            <div className="categories">
                <ul>
                    {categories && categories.map((category) => (
                        <li>{category}</li>
                    ))}
                </ul>
            </div>
            <div className="filters">
                
            </div>
        </div>
    )
}

export default NavSide;