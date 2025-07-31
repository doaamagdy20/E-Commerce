import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data);
      } catch (err) {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  if (!product) {
    return <div className="text-center text-danger fs-5">Product not found</div>;
  }

  return (
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-md-6 text-center bg-light rounded-4 p-4 shadow-sm">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{product.title}</h2>
          <p className="fs-4 text-success fw-semibold">${product.price}</p>
          <span className="badge bg-secondary fs-6 mb-3">{product.category}</span>
          <p className="text-muted">{product.description}</p>
          <div className="d-grid gap-3 mt-4">
            <button className="btn btn-primary btn-lg rounded-pill">
              Add to Cart
            </button>
            <Link to="/products" className="btn btn-outline-secondary rounded-pill">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
