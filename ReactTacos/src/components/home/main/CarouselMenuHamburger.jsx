/* imports img
*/


import Hamburger from '/public/images/hamburger.jpeg';


/* menu des hamburgers
   carousel bootstrap
*/

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide w-50 mx-auto" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Hamburger} className="d-block w-100" alt="hamburger"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Hamburger</h5>
            <p>Le Puriste : Simplement Savoureux</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./public/images/cheeseburger.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Cheeseburger</h5>
            <p>Quand le Fromage rencontre la Viande !</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./public/images/double cheese.png" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Double Cheeseburger</h5>
            <p>Deux fois plus de Fromage pour Deux fois plus de Plaisir !</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};




export const MenuHamburger = () => {
    return (
        <Carousel />
    )
}

export default MenuHamburger;