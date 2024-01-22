import "./AboutProduct.css";
export const AboutProduct = () => {
  return (
    <div className="about-product-wrapper">
      <div className="image-container">
        <img className="image-upper" src="images/image-about-dark.jpg" alt="" />
      </div>
      <div className="text-wrapper">
        <h2>ABOUT OUR FURNITURE</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="image-container">
        <img className="image-lower" src="images/image-about-light.jpg" alt="" />
      </div>
    </div>
  );
};
