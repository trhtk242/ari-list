import { useState } from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductsList";

function App() {
  const [productId, setProductId] = useState("");

  const getProductIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setProductId(id);
  };

  return (
    <>
      <AddProduct id={productId} setProductId={setProductId} />
      <ProductList getProductId={getProductIdHandler} />
    </>
  );
}

export default App;