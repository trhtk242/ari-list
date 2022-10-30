import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const collectionName = "products";
const productCollectionRef = collection(db, collectionName);
class ProductDataService {
  addProducts = (newProduct) => {
    return addDoc(productCollectionRef, newProduct);
  };

  updateProduct = (id, updatedProduct) => {
    return updateDoc(doc(db, collectionName, id), updatedProduct);
  };

  deleteProduct = (id) => {
    return deleteDoc(doc(db,collectionName, id));
  };

  getAllProducts = () => {
    return getDocs(productCollectionRef);
  };

  getProduct = (id) => {
    return getDoc(doc(db,collectionName, id));
  };
}

export default new ProductDataService();