import PropTypes from 'prop-types';  

// Définition des icônes et des liens sociaux par défaut  
const socialIcons = {  
  'Facebook': '/public/icones/facebook.svg',  
  'Instagram': '/public/icones/instagram.svg'  
};  

// Section pour afficher les icônes des réseaux sociaux  
const SocialMediaSection = ({ socialIcons, socialLinks }) => {  
  return (  
    <section className="" style={{ color: '#c75b0e', backgroundColor: 'black' }}>  
      <div className="container me-5">  
        <div>Rejoignez nous sur les réseaux !</div>  
        <div className="d-flex justify-content-center">  
          {Object.keys(socialIcons).map((icon, index) => (  
            <a key={icon} href={socialLinks[index]} className="text-white me-4">  
              <img src={socialIcons[icon]} alt={`${icon} Icon`} />  
            </a>  
          ))}  
        </div>  
      </div>  
    </section>  
  );  
};  

SocialMediaSection.propTypes = {  
  socialIcons: PropTypes.object.isRequired,  
  socialLinks: PropTypes.array.isRequired  
};  

// Section pour afficher des liens et des informations de contact  
const LinksSection = ({ gridColumns }) => {  
  return (  
    <section className="text-center text-md-start mt-5">  
      <div className="container">  
        <div className="row mt-3">  
          {gridColumns.map((column, index) => (  
            <div key={index} className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">  
              <h6 className="text-uppercase fw-bold">{column.title}</h6>  
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />  
              {column.content && <p>{column.content}</p>}  
              {column.links && column.links.map((link, idx) => <p key={idx}><a href="#!" className="text-white">{link}</a></p>)}  
              {column.contactInfo && column.contactInfo.map((info, idx) => (  
                <p key={idx}>  
                  <i className={`fas fa-${info.icon} mr-3`}></i>  
                  {info.text}  
                </p>  
              ))}  
            </div>  
          ))}  
        </div>  
      </div>  
    </section>  
  );  
};  

LinksSection.propTypes = {  
  gridColumns: PropTypes.array.isRequired  
};  

// Composant Footer complet avec les sections sociales, de liens et le copyright  
export const Footer = () => {  
  // Liens des réseaux sociaux  
  const socialLinks = ['https://www.facebook.com', 'https://www.instagram.com'];  
  
  // Colonnes pour afficher les différentes sections de liens et informations de contact  
  const gridColumns = [  
    {  
      title: 'Nous contacter',  
      content: 'Content for Column 1',  
      links: ['Link 1', 'Link 2'],  
      contactInfo: [{ icon: 'phone', text: '06.50.70.26.48' }]  
    },  
    {  
      title: 'Column 2',  
      content: 'Content for Column 2',  
      links: ['Link 3', 'Link 4'],  
      contactInfo: [{ icon: 'envelope', text: 'example@example.com' }]  
    }  
  ];  

  return (  
    <footer className="" style={{ color: '#c75b0e', backgroundColor: 'black' }}>  
      {/* Section des réseaux sociaux, modifiable en ajustant les valeurs de socialIcons et socialLinks*/}  
      <SocialMediaSection socialIcons={socialIcons} socialLinks={socialLinks} />  
      
      {/* Section des liens, modifiable en ajustant les valeurs de gridColumns*/}  
      <LinksSection gridColumns={gridColumns} />  
      
      {/* Section du copyright */}  
      <div className="text-center p-3" style={{ color: '#c75b0e', backgroundColor: 'black' }}>  
        &copy; 2020 Copyright: <a href="https://mdbootstrap.com/" className="text-white">MDBootstrap.com</a>  
      </div>  
    </footer>  
  );  
};  

Footer.propTypes = {  
  socialIcons: PropTypes.object.isRequired,  
  socialLinks: PropTypes.array.isRequired,  
  gridColumns: PropTypes.array.isRequired  
};  

export default Footer;