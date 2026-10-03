import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cartItems,setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [apiProducts, setApiProducts] = useState([]);

  useEffect(() => {
    
  fetch("https://e-commerce-website-1b43.vercel.app/api/products")
    .then((response) => response.json())
    .then((data) => {
      console.log("Products from MongoDB:", data);
      setApiProducts(data);
    })
    .catch((error) => {
      console.error("Failed to fetch products:", error);
    });
}, []);
const [isLogin, setIsLogin] = useState(true);

  const totalPrice = cartItems.reduce(
  (total, item) => total + item.price,
  0
);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (indexToRemove) => {
  setCartItems(
    cartItems.filter((_, index) => index !== indexToRemove)
  );
};

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">ShopEase</div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li
  onClick={() => {
    setIsLogin(true);
    setShowAuth(true);
  }}
>
  Login
</li>

          <li
  onClick={() => alert(`You have ${cartItems.length} item(s) in your cart.`)}
>
  Cart 🛒 ({cartItems.length})
</li>
          <li>Login</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
  <div className="hero-content"></div>
        <div>
          <h1>Everything You Love, All in One Place</h1>

          <p>
            Discover amazing products at great prices.
          </p>

          <button className="shop-btn">
            Shop Now
          </button>

          <div className="hero-visual">
  <div className="floating-card">
    <span>✨</span>
    <h3>Shop Smarter</h3>
    <p>Curated products. Better choices.</p>
  </div>
</div>

        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
  <h2>Featured Products</h2>

  <div className="search-box">
  <input
    type="text"
    placeholder="Search products..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>

  <div className="product-grid">
    {apiProducts.map((product) => (
  <div key={product._id} className="product-card">
    <div className="product-image">
      <img src={product.image} alt={product.name} />
    </div>

    <h3>{product.name}</h3>
    <p>₹{product.price}</p>

    <button onClick={() => addToCart(product)}>
      Add to Cart
    </button>
  </div>
))}

    <div
  className="product-card"
  style={{
    display:
      "classic sneakers".includes(searchTerm.toLowerCase()) ||
      searchTerm === ""
        ? "block"
        : "none",
  }}
>
      <div className="product-image">
  image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
  /
</div>
      <h3>Classic Sneakers</h3>
      <p>₹1,999</p>
      <button onClick={() => addToCart({ name: "Classic Sneakers", price: 1999 })}>
        Add to Cart
      </button>
    </div>

    <div
  className="product-card"
  style={{
    display:
      "wireless headphones".includes(searchTerm.toLowerCase()) ||
      searchTerm === ""
        ? "block"
        : "none",
  }}
  onClick={() =>
  setSelectedProduct({
    name: "Wireless Headphones",
    price: 2499,
    description: "High-quality wireless headphones for an immersive audio experience.",
  })
}
>
      <div className="product-image">
  <img
    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85"
  />
</div>src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85"
    alt="Wireless Headphones"
      <h3>Wireless Headphones</h3>
      <p>₹2,499</p>
      <button onClick={() => addToCart({ name: "Wireless Headphones", price: 2499 })}>
        Add to Cart
      </button>
    </div>

    <div
  className="product-card"
  style={{
    display:
      "smart watch".includes(searchTerm.toLowerCase()) ||
      searchTerm === ""
        ? "block"
        : "none",
  }}
  onClick={() =>
  setSelectedProduct({
    name: "Wireless Headphones",
    price: 2499,
    description:
      "Premium wireless headphones with clear sound and comfortable fit.",
  })
}
></div>
  <div
  className="product-card"
  style={{
    display:
      "smart watch".includes(searchTerm.toLowerCase()) ||
      searchTerm === ""
        ? "block"
        : "none",
  }}
  onClick={() =>
    setSelectedProduct({
      name: "Smart Watch",
      price: 3999,
      description:
        "Smart and stylish watch for fitness, notifications and everyday use.",
    })
  }
>
  <div className="product-image">
    <img
      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85"
      alt="Smart Watch"
    />
  </div>

  <h3>Smart Watch</h3>

  <p>₹3,999</p>

  <button
    onClick={(e) => {
      e.stopPropagation();
      addToCart({
        name: "Smart Watch",
        price: 3999,
      });
    }}
  >
    Add to Cart
  </button>
</div>

    <div
  className="product-card"
  style={{
    display:
      "everyday backpack".includes(searchTerm.toLowerCase()) ||
      searchTerm === ""
        ? "block"
        : "none",
  }}
  onClick={() =>
    setSelectedProduct({
      name: "Everyday Backpack",
      price: 1299,
      description:
        "Spacious and durable backpack designed for everyday use.",
    })
  }
>

      <div className="product-image">
  <img
    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85"
  />
</div>
      <h3>Everyday Backpack</h3>
      <p>₹1,299</p>
      <button onClick={() => addToCart({ name: "Everyday Backpack", price: 1299 })}>
        Add to Cart
      </button>
    </div>

  </div>
</section>
{selectedProduct && (
  <div className="product-details">
    <button
      className="close-details"
      onClick={() => setSelectedProduct(null)}
    >
      ✕
    </button>

    <h2>{selectedProduct.name}</h2>

    <p className="details-price">
      ₹{selectedProduct.price}
    </p>

    <p className="details-description">
      {selectedProduct.description}
    </p>

    <button
      className="details-cart-btn"
      onClick={() => {
        addToCart(selectedProduct);
        setSelectedProduct(null);
      }}
    >
      Add to Cart
    </button>
  </div>
)}

{/* Cart Section */}
<section className="cart-section"></section>
{showAuth && (
  <div className="auth-box">
    <button
      className="close-details"
      onClick={() => setShowAuth(false)}
    >
      ✕
    </button>

    <h2>{isLogin ? "Login" : "Create Account"}</h2>

    {!isLogin && (
      <input
        type="text"
        placeholder="Full Name"
      />
    )}

    <input
      type="email"
      placeholder="Email"
    />

    <input
      type="password"
      placeholder="Password"
    />

    <button
      className="details-cart-btn"
      onClick={async () => {
  const inputs = document.querySelectorAll(".auth-box input");

  const name = !isLogin ? inputs[0]?.value : "";
  const email = isLogin ? inputs[0]?.value : inputs[1]?.value;
  const password = isLogin ? inputs[1]?.value : inputs[2]?.value;

  const endpoint = isLogin
    ? "https://e-commerce-website-1b43.vercel.app/api/auth/login"
    : "https://e-commerce-website-1b43.vercel.app/api/auth/register";

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      isLogin
        ? { email, password }
        : { name, email, password }
    ),
  });

  const data = await response.json();

  if (response.ok) {
    alert(data.message);
    setShowAuth(false);
  } else {
    alert(data.message);
  }
}}
    >
      {isLogin ? "Login" : "Register"}
    </button>

    <p>
      {isLogin ? "Don't have an account?" : "Already have an account?"}

      <button
        className="auth-switch"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? " Register" : " Login"}
      </button>
    </p>
  </div>
)}

{/* Cart Section */}
<section className="cart-section"></section>

{/* Cart Section */}
      <section className="cart-section">
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
  <span>{item.name}</span>

  <div>
    <span>₹{item.price}</span>

    <button onClick={() => removeFromCart(index)}>
      Remove
    </button>
  </div>
</div>
          ))
        )}

        <div className="cart-total">
  <strong>Total: ₹{totalPrice}</strong>
</div>

{cartItems.length > 0 && (
  <button
    className="details-cart-btn"
    onClick={() => {
      alert(
  `Demo Payment Successful! ✅\n\nOrder Amount: ₹${totalPrice}\nPayment Status: TEST PAYMENT\n\nThank you for your order!`
);
    }}
  >
    Proceed to Checkout
  </button>
)}

      </section>

    </div>
  );
}

export default App;