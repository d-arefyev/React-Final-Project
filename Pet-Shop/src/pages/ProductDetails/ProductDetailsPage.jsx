import { useParams } from "react-router-dom";

export default function ProductDetailsPage() {
  const { productId } = useParams();

  return (
    <div>
      <p>Product Details Page</p>
      <p>Product ID: {productId}</p>
    </div>
  );
}
