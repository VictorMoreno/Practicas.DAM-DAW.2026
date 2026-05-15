import "./App.css";

import ProductCard from "./components/ProductCard";
import products from "./data/products";

function App() {
    return (
        <main className="app">
            <h1>Tienda Online</h1>

            <section className="products-container">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        nombre={product.nombre}
                        precio={product.precio}
                        imagen={product.imagen}
                        descripcion={product.descripcion}
                    />
                ))}
            </section>
        </main>
    );
}

export default App;