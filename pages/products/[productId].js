import { useRouter } from "next/router";

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>
        {product.id}. {product.title} - ₹{product.price}
      </h2>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  // const response = await fetch(`http://localhost:4000/products`);
  // const data = await response.json();
  // const paths = data.map((product) => {
  //   return {
  //     params: { productId: `${product.id}` },
  //   };
  // });

  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();

  return {
    props: {
      product: data,
    },
    revalidate: 5,
  };
}
