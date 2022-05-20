export default function Product(props) {
  function addToCart() {
    if (props.basket.find((item) => item.id === props.product.id)) {
      console.log("already in basket");
      props.setBasket((old) =>
        old.map((item) => {
          if (item.id === props.product.id) {
            const copy = { ...item };
            copy.amount++;
            return copy;
          }
          return item;
        })
      );
    } else {
      props.setBasket((oldState) => [...oldState, { ...props.product, amount: 1 }]);
    }
  }

  return (
    <article className="card">
      <img
        src={`https://kea-alt-del.dk/t7/images/webp/640/${props.product.id}.webp`}
        alt={`${props.product.productdisplayname}`}
      />
      <h2>{props.product.productdisplayname}</h2>
      <p>
        Price: $<span>{props.product.price}</span>
      </p>
      <button onClick={addToCart}>Buy</button>
    </article>
  );
}
