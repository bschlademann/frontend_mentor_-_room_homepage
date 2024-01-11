import "./Navigation.css";
export const Navigation = () => {
  return (
    <nav>
      <div className="img-container">
        <img src="images/logo.svg" alt="" />
      </div>
      <div className="links">
        <a href="">Home</a>
        <a href="">Shop</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    </nav>
  );
};
