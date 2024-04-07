import { Link } from "react-router-dom"
import ratingStar from "../assets/star.svg"

function ProductCard({ product }) {
    console.log(product)

    return (
        <div className="product-card">
            <img className="image" src={product.image} />
            <Link className="link" to={`/${product.id}/details`}>{product.title}</Link>
            <div className="group">
                <span>Category: </span>
                <p className="category">{product.category}</p>
            </div>
            <div className="group">
                <span>Price: </span>
                <p className="price">${product.price}</p>
            </div>
            <div className="group">
                <span>Rating: </span>
                <div className="rating">
                    <div className="rate">
                        <p>{product.rating.rate}</p>
                        <img src={ratingStar} width={18} />
                    </div>
                    <p className="count">({product.rating.count})</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard