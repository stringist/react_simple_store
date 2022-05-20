import Product from "./Product";

export default function ProductList({ products, setBasket, basket }) {
  return (
    <section className="ProductListGrid">
      {products.map((product) => (
        <Product product={product} key={product.id} basket={basket} setBasket={setBasket} />
      ))}
    </section>
  );
}
