import Product from "./Product"

export default function ProductList({products}) {
return (
<section className="ProductListGrid">
{products.map(product => <Product {...product}/>)}
</section>
)
}