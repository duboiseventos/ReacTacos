
import { HeaderMain } from './main/HeaderMain.jsx';
import { MenuTacosSpe } from './main/MenuTacosSpe.jsx';
import { MenuHamburger } from './main/CarouselMenuHamburger.jsx';


export const Home = () => {
    return (
        
            <div className="HomeBody">
                
                <div className="">
                    <HeaderMain />
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