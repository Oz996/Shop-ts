import { Product } from "@/types/product";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function GET() {
  try {
    const productsCollection = collection(db, "products");

    const querySnapshot = await getDocs(productsCollection);

    const products: Product[] = [];

    querySnapshot.forEach((doc) => {
      const productData = doc.data() as Product;
      products.push(productData);
    });

    console.log(products);
    return products;
  } catch {
    throw new Error("Failed to fetch products");
  }
}
