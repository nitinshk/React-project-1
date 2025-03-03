const Hero = () => {
return(
<main className="hero container">
    <div className="hero-contect">
        <h1>YOUR FEET DESERVE THE BEST </h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-button">
            <button>Shop Now</button>
            <button className="secondary-btn">category</button>
        </div>
        <div className="hero-shop">
            <p>Also Available</p>
            <div className="brand-icons">
                <img src="/images/flipkart.png" alt="flipkart-logo"/>
                <img src="/images/amazon.png" alt="amazon-logo"/>
                
            </div>
        </div>
    </div>
    <div className="hero-image">
      <img src="/images/shoe_image.png" alt="shoe-logo" />

    </div>
</main>

);

};

export default Hero;
