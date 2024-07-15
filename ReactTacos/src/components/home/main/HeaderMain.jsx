/*
1er partie du Main : 
titre => h1
image principale
Slogan
Bouton pour passer commande
*/


export const HeaderMain = () => {
    return (
        <div className="hero text-center">
            <h1 className="h1-expand-lg fs-1 fw-bold w-100">FRENCH TACOS</h1>
            <img src="./public/images/img-principale.png" className="img-principale img-fluid" alt="French Tacos" />
            <div className="container">
                <p id="slogan">Faites votre Tacos à votre sauce !</p>
                <button className="btn-block btn-dark text-danger fs-1 fw-bold">Commander</button>
            </div>
        </div>
    );
}

export default HeaderMain;

