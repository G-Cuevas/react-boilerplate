import { ProductImg } from "./ProductImg";
import { useFetchProducts } from "../hooks/useFetchItems";
import { PropTypes } from "prop-types";

export const ProductGrid = ({ query }) => {
  const { products, isLoading } = useFetchProducts(query);

  return (
    <>
      <h1>{query} </h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{products.length} productos encontrados</p>
      )}
      <div className="card-grid">
        {products.map((product) => (
          <ProductImg key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

ProductGrid.propTypes = {
  query: PropTypes.string.isRequired,
};