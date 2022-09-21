import React, { useEffect, useState } from "react";
import ProductDataService from "../services/products.services";

const ProductsList = ({ getProductId }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await ProductDataService.getAllProducts();
    console.log(data.docs);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await ProductDataService.deleteProduct(id);
    getProducts();
  };

  return (
    <>
        <button onClick={getProducts}>
          עדכן רשימה
        </button>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>שם מוצר</th>
            <th>כמות מוצר</th>
            <th>פעולות</th>
          </tr>
        </thead>
        <tbody>
          {products.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                <td>{doc.amount}</td>
                <td>
                  <button  onClick={(e) => getProductId(doc.id)}>
                    ערוך
                  </button>
                  <button onClick={(e) => deleteHandler(doc.id)}>
                    מחק
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProductsList;