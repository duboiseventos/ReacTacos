
import { HeaderMain } from './main/HeaderMain.jsx';
import { MenuTacos } from './main/MenuTacos.jsx';
import { MenuTacosSpe } from './main/MenuTacosSpe.jsx';
import { MenuHamburger } from './main/CarouselMenuHamburger.jsx';


export const Home = () => {
    return (
        
            <div>
                
                <div className="">
                    <HeaderMain />
                </div>
                <div className="container my-3">
                    <MenuTacos />
                </div>
                <div className="container my-3">
                    <MenuTacosSpe />
                </div>
                <div className="container my-3">
                    <MenuHamburger />
                </div>
            </div>
    
    );
}

export default Home;