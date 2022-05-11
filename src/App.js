import ProductList from "./components/ProductList";
import BasketContainer from "./components/BasketContainer";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
     <Nav/>
<main>
<ProductList/>
<BasketContainer/>
</main>
    </div>
  );
}

export default App;
