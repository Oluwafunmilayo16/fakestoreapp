import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ratingStar from "../assets/star.svg"

function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "GET"
        })
            .then(async (response) => {
                const result = await response.json()
                console.log(result)
                setProduct(result)
            })
            .catch((error) => {
                console.error("An error occured while fetching products", error)
            })
    }, [id])

    useEffect(() => console.log(product.rating), [product])

    return (
        <div className="product-details">
            <img className="image" src={product.image} />
            <div>
                <h1>{product.title}</h1>
                <div className="group">
                    <span>Category: </span>
                    <p>{product.category}</p>
                </div>
                <div className="group">
                    <span>Price: </span>
                    <p>${product.price}</p>
                </div>
                <div className="group">
                    <span>Rating: </span>
                    <div className="rating">
                        <div className="rate">
                            <p>{product.rating?.rate}</p>
                            <img src={ratingStar} width={18} />
                        </div>
                        <p className="count">({product.rating?.count})</p>
                    </div>
                </div>
                <div className="description group">
                    <span>Description: </span>
                    <p className="">{ product.description }</p>
                </div>
                <Link className="back" to="/">Back To Home</Link>
            </div>
        </div>
    )
}

export default ProductDetails