import { useEffect } from 'react';  
import './TacoCustomizer.css';  

export const TacoCustomizer = () => {  
  useEffect(() => {  
    // Taco customization logic  
    const optionGroups = document.querySelectorAll('.option-list');  
    const tacoSummary = document.getElementById('taco-summary');  
    const tacoPrice = document.getElementById('price-display');  
    const orderButton = document.getElementById('order-button');  

    let selectedOptions = {  
      protein: {},  
      crunch: {},  
      sauce: {},  
      toppings: {}  
    };  

    let basePrice = 7.99;  

    optionGroups.forEach(group => {  
      const options = group.querySelectorAll('.option-item');  
      const groupId = group.id.split('-')[0];  

      options.forEach(option => {  
        const value = option.dataset.value;  
        const plusBtn = option.querySelector('.plus');  
        const minusBtn = option.querySelector('.minus');  
        const quantityDisplay = option.querySelector('.quantity-display');  

        if (plusBtn) {  
          plusBtn.addEventListener('click', (e) => {  
            e.stopPropagation();  
            updateQuantity(groupId, value, 1);  
          });  
        }  

        if (minusBtn) {  
          minusBtn.addEventListener('click', (e) => {  
            e.stopPropagation();  
            updateQuantity(groupId, value, -1);  
          });  
        }  
      });  
    });  

    function updateQuantity(groupId, value, change) {  
      if (!selectedOptions[groupId][value]) {  
        selectedOptions[groupId][value] = 0;  
      }  

      selectedOptions[groupId][value] += change;  

      if (selectedOptions[groupId][value] < 0) {  
        selectedOptions[groupId][value] = 0;  
      }  

      const option = document.querySelector(`#${groupId}-options .option-item[data-value="${value}"]`);  
      if (option) {  
        const quantityDisplay = option.querySelector('.quantity-display');  
        if (quantityDisplay) {  
          quantityDisplay.textContent = selectedOptions[groupId][value];  
        }  

        if (selectedOptions[groupId][value] > 0) {  
          option.classList.add('selected');  
        } else {  
          option.classList.remove('selected');  
        }  
      }  

      updateTacoPreview();  
    }  

    function updateTacoPreview() {  
      const proteinLayer = document.getElementById('protein-layer');  
      const crunchLayer = document.getElementById('crunch-layer');  
      const sauceLayer = document.getElementById('sauce-layer');  
      const toppingLayer = document.getElementById('topping-layer');  

      if (proteinLayer) proteinLayer.style.backgroundImage = getLayerImage('protein');  
      if (crunchLayer) crunchLayer.style.backgroundImage = getLayerImage('crunch');  
      if (sauceLayer) sauceLayer.style.backgroundImage = getLayerImage('sauce');  
      if (toppingLayer) toppingLayer.style.backgroundImage = getLayerImage('toppings');  

      const summary = [];  
      let totalPrice = basePrice;  

      for (const [groupId, items] of Object.entries(selectedOptions)) {  
        for (const [item, quantity] of Object.entries(items)) {  
          if (quantity > 0) {  
            const emoji = document.querySelector(`#${groupId}-options .option-item[data-value="${item}"] .option-emoji`);  
            if (emoji) {  
              summary.push(`${emoji.textContent} ${capitalizeFirstLetter(item.replace('-', ' '))} x${quantity}`);  
              totalPrice += quantity * 0.50; // Add $0.50 for each item  
            }  
          }  
        }  
      }  

      if (tacoSummary) {  
        tacoSummary.textContent = summary.length > 0 ? summary.join(' • ') : 'Select your ingredients to create your perfect taco!';  
      }  

      if (tacoPrice) {  
        tacoPrice.textContent = `$${totalPrice.toFixed(2)}`;  
      }  
    }  

    function getLayerImage(groupId) {  
      const items = Object.entries(selectedOptions[groupId]);  
      if (items.length > 0 && items[0][1] > 0) {  
        return `url('${items[0][0]}.png')`;  
      }  
      return 'none';  
    }  

    function capitalizeFirstLetter(string) {  
      return string.charAt(0).toUpperCase() + string.slice(1);  
    }  

    // Add to cart animation  
    if (orderButton) {  
      orderButton.addEventListener('click', () => {  
        orderButton.classList.add('added');  
        orderButton.textContent = 'Added to Cart!';  

        setTimeout(() => {  
          orderButton.classList.remove('added');  
          orderButton.textContent = 'Add to Cart';  
        }, 2000);  
      });  
    }  

    // Parallax effect for background  
    const parallaxEffect = () => {  
      const animatedBg = document.querySelector('.animated-bg');  
      if (animatedBg) {  
        const scrollPosition = window.pageYOffset;  
        animatedBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;  
      }  
    };  

    window.addEventListener('scroll', parallaxEffect);  

    // Taco layer animations  
    const tacoLayers = document.querySelectorAll('.taco-layer');  
    let animationFrame;  

    function animateTacoLayers() {  
      tacoLayers.forEach((layer, index) => {  
        const yOffset = Math.sin(Date.now() * 0.002 + index) * 5;  
        layer.style.transform = `translateY(${yOffset}px)`;  
      });  

      animationFrame = requestAnimationFrame(animateTacoLayers);  
    }  

    animateTacoLayers();  

    // Clean up animation on page unload  
    return () => {  
      window.removeEventListener('scroll', parallaxEffect);  
      cancelAnimationFrame(animationFrame);  
    };  
  }, []);  

 

  return (  
    <main>  
      <section>  
        <div className="customizer-container">  
          <h2>Vos goûts, votre Tacos !</h2>  
          <div className="option-list" id="protein-options">  
            <h3>Nos viandes</h3>  
            {["Steak", "Poulet", "CordonBleu", "Nuggets", "Tenders"].map((protein) => (  
              <div className="option-item" data-value={protein} key={protein}>  
                <div className="option-emoji">{getEmoji(protein)}</div>  
                <div className="option-name">{getProteinName(protein)}</div>  
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
            {["Frites","OnionRings"].map((crunch) => (  
              <div className="option-item" data-value={crunch} key={crunch}>  
                <div className="option-emoji">{getEmoji(crunch)}</div>  
                <div className="option-name">{getCrunchName(crunch)}</div>  
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
            {["Mayonnaise", "Ketchup","Algerienne","Samourai","Fromagere"].map((sauce) => (  
              <div className="option-item" data-value={sauce} key={sauce}>  
                <div className="option-emoji">{getEmoji(sauce)}</div>  
                <div className="option-name">{getSauceName(sauce)}</div>  
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
              <h3>Vos choix</h3>  
              <div className="taco-image" id="taco-preview-image">  
                <div className="taco-layer" id="tortilla-layer" style={{ backgroundImage: "url('tortilla.png')" }}></div>  
                <div className="taco-layer" id="protein-layer"></div>  
                <div className="taco-layer" id="crunch-layer"></div>  
                <div className="taco-layer" id="sauce-layer"></div>  
                <div className="taco-layer" id="topping-layer"></div>  
              </div>  
              <div className="taco-summary" id="taco-summary">  
                Faites votre Tacos à votre sauce!  
              </div>  
              <div className="price" id="price-display">  
                Total: $7.99  
              </div>  
              <button id="order-button">Ajoutez au panier</button>  
            </div>  
          </div>  
        </div>  
      </section>  
    </main>  
  );  
};  

// Functions to get emoji and names for proteins, crunches, sauces, and toppings  
const getEmoji = (type) => {  
  switch (type) {  
    case 'Steak': return '🥩';  
    case 'Poulet': return '🍗';  
    case 'CordonBleu': return '🐖';  
    case 'Nuggets': return '🥬'; 
    case 'Tenders': return '';
    case 'Frites' : return '🍟' 
    case 'OnionRings': return '🧅'
    case 'Mayonnaise': return '🟡';
    case 'Ketchup': return '🔴';
    case 'Algerienne' : return '🟢';
    case 'Samourai': return '🟠';
    case 'Fromagere': return '⚪️';
    default: return '';  
  }  
};  

const getProteinName = (type) => {  
  switch (type) {  
    case 'Steak': return 'Steak';  
    case 'Poulet': return 'Poulet';  
    case 'Nuggets': return 'Nuggets';  
    case 'CordonBleu': return 'Cordon Bleu';
    case 'Tenders': return 'Tenders';

    default: return '';  
  }  
};  

const getCrunchName = (type) => {
  switch (type) {
    case 'Frites' : return 'Frites'
    case 'OnionRings': return 'Onion-rings'
    default: return '';
  }

}

const getSauceName = (type) => {
  switch (type) {
    case 'Mayonnaise': return 'Mayonnaise';
    case 'Ketchup': return 'Ketchup';
    case 'Algerienne' : return 'Algérienne';
    case 'Samourai': return 'Samourai';
    case 'Fromagere': return 'Fromagère';
    default: return '';
  }

}

// Define similar functions for crunches, sauces, and toppings...  

export default TacoCustomizer;