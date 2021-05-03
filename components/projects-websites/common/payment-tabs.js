import React from 'react';

const PaymentTabs = ({ para1, para2, para3, para4, RatesPlots, website }) => {
  return (
     <div className={`container ${website}-payment`} id="paymentPlan">
       <div className="row">
         <div className="col-md-12">
           <h1 className={`${website}-about-heading`}>Payment Plans</h1>
           <nav className={website}>
             <div className="nav nav-tabs" id="nav-tab" role="tablist">
               <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                  role="tab" aria-controls="nav-home" aria-selected="true">PLOT PLANS</a>
               <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                  role="tab" aria-controls="nav-profile" aria-selected="false">HOUSE PLANS</a>
             </div>
           </nav>

            <RatesPlots />
           <h2 className={`${website}-about-small-heading mt-5`}>{para1}</h2>
           <p className={`${website}-about-paragraph`}>{para2}</p>
           <p className={`${website}-about-paragraph`}>{para3}</p>
           <p className={`${website}-about-paragraph`}>{para4}</p>
         </div>
       </div>
     </div>
  );
};

export default PaymentTabs;