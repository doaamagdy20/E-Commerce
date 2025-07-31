import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center fw-bold text-primary">Our Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-4 col-lg-3" key={product.id}>
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="p-4 text-center bg-light rounded-top-4">
                <img
                  src={product.image}
                  className="img-fluid"
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h6 className="card-title fw-semibold">{product.title}</h6>
                <p className="text-success fw-bold fs-5">${product.price}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-primary mt-auto rounded-pill"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
