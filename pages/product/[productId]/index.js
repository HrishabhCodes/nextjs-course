import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  console.log(router);

  return <h1>Details About Product {productId}</h1>;
};

export default ProductDetails;
