import Card from "./Components/Card";
import Cart from "./Components/Cart";
import Data from "./Products.json";

function App() {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold text-center mt-0 mb-4 py-2 bg-orange-300 rounded shadow-md sticky top-0">
          <Cart />
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Data.map((item) => {
            return (
              <div key={item.id}>
                <Card image={item.image} productName={item.productName} productPrice={item.price}/>
              </div>
            )
          })}
        </div>

      </div>
    </>
  );
}

export default App;
