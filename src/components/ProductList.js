import Product from "./Product"

export default function ProductList({products, setBasket}) {
return (
<section className="ProductListGrid">
{products.map(product => <Product product={product} key={product.id} setBasket={setBasket}/>)}
</section>
)
}