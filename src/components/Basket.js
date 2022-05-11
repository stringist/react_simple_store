export default function Basket(props) {
const initialValue = 0;
const sumWithInital = props.basket.reduce((prevValue, curValue) => prevValue + curValue.price, initialValue)
  console.log(props);
  return (
    <div>
      <ul>
        {props.basket.map((item) => {
          return (
            <li key={item.id}>
              {item.productdisplayname} ${item.price}
            </li>
          );
        })}
      </ul>
<p>Total: ${sumWithInital}</p>
    </div>
  );
}
