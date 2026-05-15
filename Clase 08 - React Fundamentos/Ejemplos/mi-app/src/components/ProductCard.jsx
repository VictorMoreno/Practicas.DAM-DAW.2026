import "./ProductCard.css";

function ProductCard({ nombre, precio, imagen, descripcion }) {
    return (
        <article className="product-card">
            <img
                src={imagen}
                alt={nombre}
                className="product-image"
            />

            <div className="product-content">
                <h2>{nombre}</h2>

                <p className="product-description">
                    {descripcion}
                </p>

                <span className="product-price">
                    {precio} €
                </span>
            </div>
        </article>
    );
}

export default ProductCard;