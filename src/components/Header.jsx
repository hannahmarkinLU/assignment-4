import "./Header.css";

function Header() {
  return (
    <header className="app-header">
        <h1 className="logo">ComponentCorner</h1>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
    </header>
  );
}

export default Header;