export default function Product(props) {
function addToCart(){
props.setBasket((oldState) => [...oldState, props.product]);
}

console.log(props);
    return <article className="card">
<img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.product.id}.webp`} alt={`${props.product.productdisplayname}`} />
<h2>{props.product.productdisplayname}</h2>
<p>Price: $<span>{props.product.price}</span></p>
<button onClick={addToCart}>Buy</button>
</article>}