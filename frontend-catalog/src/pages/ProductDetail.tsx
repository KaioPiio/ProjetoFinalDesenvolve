import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

function ProductDetail() {
    const { id } = useParams();
    const [product, setproduct] = useState<Product | null>(null);

    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setproduct(data));
    }, [id]);

if (!product) return <p>Carregamento...</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} style={{ width: "200px", height: "200px", objectFit: "contain" }} />
            <p>{product.description}</p>
            <p><strong>Preço: $</strong>{product.price}</p>
        </div>
    );
}

export default ProductDetail;