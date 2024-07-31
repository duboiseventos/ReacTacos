/*
* imports img et Proptypes
*/

import TacosBowl from '/public/images/tacosbowl.jpeg';  
import TacosChevre from '/public/images/tacoschevre.jpeg';  
import TacosGratine from '/public/images/tacosgratine.png';  
import PropTypes from 'prop-types';  



/*
* Menu des Tacos spéciaux
*/




const ItemsMenu = ({ ImgSource, Title, Price, Description }) => {  
    return (  
        <div className="card" style={{ width: '18rem' }}>  
            <img src={ImgSource} className="card-img-top" alt={`Image of ${Title}`} />  
            <div className="card-body">  
                <h5 className="card-title">{Title}</h5>  
                <p className="card-text">{Description}</p>  
                <p>{Price} €</p>  
                <button className="btn btn-outline-danger bg-dark">  
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">  
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />  
                    </svg>  
                </button>  
            </div>  
        </div>  
    );  
}  

ItemsMenu.propTypes = {  
    ImgSource: PropTypes.string.isRequired,  
    Title: PropTypes.string.isRequired,  
    Description: PropTypes.string.isRequired,  
    Price: PropTypes.number.isRequired  
};  

export function MenuTacosSpe() {  
    return (  
        <div className="row">  
            <h1 className="TitleTacosSpe mx-auto text-center p-3">Les Tacos du moment</h1>  
            <div className="d-flex justify-content-around flex-wrap">  
                <ItemsMenu ImgSource={TacosBowl} Title="Tacos Bowl" Description="Tous les ingrédients d'un Tacos réunis dans un Bowl pour une explosion de saveur!" Price={8} />  
                <ItemsMenu ImgSource={TacosGratine} Title="Tacos Gratiné" Description="Un Tacos complet avec une avalanche de fromage gratiné à la surface! Pour plus de gourmandise!" Price={9} />  
                <ItemsMenu ImgSource={TacosChevre} Title="Tacos Chèvre Miel" Description="Un combo unique pour une optimisation des papilles entre le miel et notre fromage de chèvre dans un délicieux Tacos!" Price={10} />  
            </div>  
        </div>  
    );  
}