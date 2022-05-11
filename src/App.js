import './App.css';
import ProductList from "./components/ProductList";
import BasketContainer from "./components/BasketContainer";


function App() {
  return (
    <div className="App">
     <Navigation/>
<main>
<ProductList/>
<BasketContainer/>
</main>
    </div>
  );
}

function Navigation() {
return <nav></nav>}


export default App;
