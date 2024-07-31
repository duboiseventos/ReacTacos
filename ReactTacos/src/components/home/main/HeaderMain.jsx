/*
1er partie du Main : 
titre => h1
image principale
Slogan
Bouton pour passer commande
*/


export const HeaderMain = () => {
    return (
        <>  
            <div className="hero text-center">
                <h1 className="h1-expand-lg fw-bold TitleMain">FRENCHY TACOS</h1>
            </div>    
                <div className="conteiner-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="TextMain">
                                Bienvenue chez Frenchy Tacos !

                                Découvrez le vrai French tacos, une expérience culinaire unique qui fusionne tradition et modernité. Nos tacos généreusement garnis sont préparés avec des ingrédients frais et de qualité, et personnalisables selon vos envies. Choisissez parmi une variété de viandes savoureuses, des frites croustillantes, des fromages fondus et une sélection de sauces gourmandes. 

                                Que vous soyez pressé ou que vous souhaitiez savourer votre repas sur place, Frenchy Tacos est l’endroit idéal pour une pause déjeuner ou un dîner rapide. Rejoignez-nous et goûtez au meilleur du French tacos dans une ambiance conviviale et chaleureuse.

                                Bon appétit et à bientôt chez Frenchy Tacos !
                                </p>

                                <p id="slogan">Faites votre Tacos à votre sauce !</p>

                                <button className="btn-block btn-dark text-danger fs-1 fw-bold rounded" id="buttonHomeCommand">Commander</button>

                            </div>
                            <div className="col-lg-6">
                                <img src="./public/images/img-principale.png" className="img-principale img-fluid rounded" alt="French Tacos" />

                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default HeaderMain;

