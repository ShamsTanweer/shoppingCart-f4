import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from './actions';

const ProductList = ({ products, fetchProducts }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(() => {
      setLoading(false);
    });
  }, [fetchProducts]);

//   console.log(fetchProducts());

// fetch("https://dummyjson.com/products")
// .then((data)=>{
//     return data.json
// })
// .then((objectData)=>{
//     products = objectData;
//     console.log(products);
// })

  return (
    <div>
      <h2>Product List</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : products.length > 0 ? (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>Price: ${product.price}</p>
              <button>Add to Cart</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { products: state.products };
};

export default connect(mapStateToProps, { fetchProducts })(ProductList);
