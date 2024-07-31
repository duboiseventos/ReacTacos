

export const Menu = () => {  
 
  return (  
    <main>  
      <section>  
        <div className="customizer-container">  
          <h2>Customize Your Taco</h2>  
          <div className="option-list" id="protein-options">  
            <h3>Proteins</h3>  
            {["steak", "chicken", "pork", "vegan"].map((protein) => (  
              <div className="option-item" data-value={protein} key={protein}>  
                
                <div className="quantity-control">  
                  <button className="quantity-btn minus">-</button>  
                  <span className="quantity-display">0</span>  
                  <button className="quantity-btn plus">+</button>  
                </div>  
              </div>  
            ))}  
          </div>  
          {/* Repeat for other option groups: crunch, sauces, toppings */}  
          {/* Crunch Options */}  
          <div className="option-list" id="crunch-options">  
            <h3>Croustillants</h3>  
            {["lettuce", "tortilla_chip","fries","chips"].map((crunch) => (  
              <div className="option-item" data-value={crunch} key={crunch}>  
               
                <div className="quantity-control">  
                  <button className="quantity-btn minus">-</button>  
                  <span className="quantity-display">0</span>  
                  <button className="quantity-btn plus">+</button>  
                </div>  
              </div>  
            ))}  
          </div>  
          <div className="option-list" id="sauce-options">  
            <h3>Nos sauces</h3>  
            {["lettuce", "tortilla_chip","fries","chips"].map((sauce) => (  
              <div className="option-item" data-value={sauce} key={sauce}>  
               
                <div className="quantity-control">  
                  <button className="quantity-btn minus">-</button>  
                  <span className="quantity-display">0</span>  
                  <button className="quantity-btn plus">+</button>  
                </div>  
              </div>  
            ))}  
          </div>  
          <div className="preview-container">  
            <div className="taco-preview">  
              <h3>Your Custom Taco</h3>  
              <div className="taco-image" id="taco-preview-image">  
                <div className="taco-layer" id="tortilla-layer" style={{ backgroundImage: "url('tortilla.png')" }}></div>  
                <div className="taco-layer" id="protein-layer"></div>  
                <div className="taco-layer" id="crunch-layer"></div>  
                <div className="taco-layer" id="sauce-layer"></div>  
                <div className="taco-layer" id="topping-layer"></div>  
              </div>  
              <div className="taco-summary" id="taco-summary">  
                Select your ingredients to create your perfect taco!  
              </div>  
              <div className="price" id="price-display">  
                Total: $7.99  
              </div>  
              <button id="order-button">Add to Cart</button>  
            </div>  
          </div>  
        </div>  
      </section>  
    </main>  
  );  
};  

 

export default Menu;