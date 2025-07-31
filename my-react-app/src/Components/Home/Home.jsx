import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="display-4 fw-bold mb-3 text-primary">Welcome to React Store</h1>
          <p className="lead text-muted mb-3">
            Discover amazing products with a modern shopping experience built using React, Vite, and Bootstrap.
          </p>
          <p className="mb-4 text-secondary">
            Fast, clean, and easy-to-use interface powered by Fake Store API.
          </p>
          <Link to="/products" className="btn btn-outline-primary btn-lg rounded-pill px-4">
            Explore Products →
          </Link>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
            alt="Shopping Illustration"
            className="img-fluid"
            style={{ maxHeight: '350px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
