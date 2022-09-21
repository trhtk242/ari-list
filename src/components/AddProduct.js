import React, { useState, useEffect } from "react";
import ProductDataService from "../services/products.services";

const AddProduct = ({ id, setProductId }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || amount === "") {
      alert( "חלק מהשדות ריקים");
      return;
    }
    const newProduct = {
      name,
      amount,
    };
    console.log(newProduct);

    try {
      if (id !== undefined && id !== "") {
        await ProductDataService.updateProduct(id, newProduct);
        setProductId("");
        alert("עודכן בהצלחה" );
      } else {
        await ProductDataService.addProducts(newProduct);
        alert("מוצר חדש הוסף בהצלחה" );
      }
    } catch (err) {
      console.log(err.message );
    }

    setName("");
    setAmount("");
  };

  const editHandler = async () => {
    try {
      const docSnap = await ProductDataService.getProduct(id);
      console.log("the record is :", docSnap.data());
      setName(docSnap.data().name);
      setAmount(docSnap.data().amount);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="שם מוצר"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="כמות מוצר"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit"> הוסף / עדכן</button>    
      </form>
    </>
  );
};

export default AddProduct;