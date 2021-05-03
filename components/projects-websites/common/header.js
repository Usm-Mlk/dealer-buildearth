import React, { useState } from 'react';
import Link from 'next/link';
import { NavLogo } from "components/commons";
import { WebNavigation } from "components/home/components";


const Header = ({ classes, logoPath, link, logoClass, color, logo, style={}}) => {
  const isWindow = typeof window !== 'undefined';
  const [sticky, setSticky] = useState(false);
  React.useEffect(() => {
    if (isWindow) {
      window.addEventListener('scroll', (e) => {
        if (window.scrollY > window.innerHeight) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      });
    }
  }, [])
  return (
     <React.Fragment>
       <NavLogo className={true} />
       <WebNavigation color={color}/>
       <div id="full-page">
         <div className={`container-fluid ${classes}-bg-img`}>
           <div className={`row ${classes}-layer`}></div>
           <div className={`${logoClass} text-center`}>
             <img className={`img-fluid ${classes}HeroLogo`} src={logoPath} alt={logoClass} />
           </div>
         </div>
         <div className={`container-fluid ${classes}-navbar ${classes}-navbar-main ${sticky ? 'sticky' : ''}`} id="myHeader">
           <div className="container">
             <div className="row">
               <div className="col-lg-6 col-md-4">
                 <Link as={link} href={link}>
                   <a>
                     <img
                      style={style}
                      className={`img-fluid ${classes}-nav-logo`} src={logo}
                      alt="Nav Logo"
                     />
                   </a>
                 </Link>
               </div>
               <div className={`col-lg-6 col-md-8 col-sm-12 ${classes}-navbar`}>
                 <ul className={`${classes}-nav`} id={`${classes}Div`}>
                   <li className={`${classes}-link active-nav`}><a href="#about">About</a></li>
                   <li className={`${classes}-link`}><a href="#location">Location</a></li>
                   <li className={`${classes}-link`}><a href="#paymentPlan">Payment Plans</a></li>
                   <li className={`${classes}-link`}><a href="#amenities">Amenities</a></li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </div>
     </React.Fragment>
  );
};

export default Header;