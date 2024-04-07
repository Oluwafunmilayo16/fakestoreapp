import { useState } from "react"
import { useEffect } from "react"
import ProductCard from "./ProductCard"

function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {
            method: "GET"
        })
        .then(async (response) => {
            const result = await response.json()
            setProducts(result)
        })
        .catch((error) => {
            console.error("An error occured while fetching products", error)
        })
    }, [])

    return <div>
        <div className="all-products">
            {
                products.length ? <p className="loading">Loading...</p> :
                products.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
        </div>
    </div>
}

export default Home