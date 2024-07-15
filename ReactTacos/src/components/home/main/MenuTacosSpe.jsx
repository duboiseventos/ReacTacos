/*
* Menu des Tacos spéciaux
*/


import PropTypes from 'prop-types';

const ItemsMenu = ({ImgSource, Title, Price}) => {
    return (
        <div className="col-md-4 menu-item">
            <img src={ImgSource} className="img-fluid rounded"/>
            <h3>{Title}</h3>
            <p>{Price} €</p>
            <button className="btn btn-outline-danger bg-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
            </button>
            </div>
    )
}

ItemsMenu.propTypes = {
    ImgSource: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired
};


export function MenuTacosSpe() {
    return (
        <div className="row">
            <ItemsMenu ImgSource="./public/images/tacos bowl.jpeg" Title="Tacos Bowl" Price={8} />
            <ItemsMenu ImgSource="./public/images/tacos gratiné.png" Title="Tacos Gratiné" Price={9} />
            <ItemsMenu ImgSource="./public/images/gratine-chevre-miel-700x460-1.jpeg" Title="Tacos Chèvre Miel" Price={10} />

        </div>

    )
} 