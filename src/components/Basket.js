export default function Basket(props) {
  function removeItem(id) {
    props.setBasket((old) => old.filter((item) => item.id !== id));
  }
  const initialValue = 0;
  const sumWithInital = props.basket.reduce((prevValue, curValue) => prevValue + curValue.amount * curValue.price, initialValue);
  console.log(props);
  return (
    <div>
      <ul>
        {props.basket.map((item) => {
          return (
            <li key={item.id}>
              {item.productdisplayname} ${item.price}
              <button onClick={() => removeItem(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#666"
                  className="bi bi-x-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
      <p>Total: ${sumWithInital}</p>
    </div>
  );
}
