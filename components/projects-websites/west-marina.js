import React from 'react';
import Header from './common/header';
import About from "components/projects-websites/common/about";
import VideoSection from "components/projects-websites/common/video-section";
import Location from "components/projects-websites/common/location";
import PaymentTabs from "components/projects-websites/common/payment-tabs";
import Footer from "components/projects-websites/common/footer";
import Slider from "react-slick";


const WestMarinaWebsite = () => {
  const settings = {
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  };

  const RatesPlots = ({ website }) => (
     <div className="tab-content" id="nav-tabContent">
       <div className="tab-pane fade show active aljalil-table" id="nav-home" role="tabpanel"
            aria-labelledby="nav-home-tab">
         <h2 className={`${website || "aljalil"}-about-small-heading`}>
           3 Years Plan - Residential Plots (10% Discount on Full Payment)
         </h2>
         <div className="table-responsive">
           <table className="table">
             <thead className="alnoor-thead-green">
             <tr>
               <th scope="col">PLOT SIZE</th>
               <th scope="col">TOTAL PRICE</th>
               <th scope="col">BOOKING AMOUNT</th>
               <th scope="col">BALLOTING WITH 1 YEAR</th>
               <th scope="col">POSSESSION WITH 2.5 YEAR</th>
               <th scope="col">10X HARL YEARLY INSTALLMENTS</th>
               <th scope="col">50X MONTHLY INSTALLMENT</th>

             </tr>
             </thead>
             <tbody>
             <tr className="alnoor-table-row">
               <td>03-Marla</td>
               <td>1,600,000</td>
               <td>200,000</td>
               <td>1,50,000</td>
               <td>150,000</td>
               <td>50,000</td>
               <td>12,000</td>
             </tr>
             <tr className="alnoor-table-row">
               <td>05-Marla</td>
               <td>2,500,000</td>
               <td>300,000</td>
               <td>2,50,000</td>
               <td>2,50,000</td>
               <td>85,000</td>
               <td>17,000</td>
             </tr>

             <tr className="alnoor-table-row">
               <td>10.11-Marla</td>
               <td>4,500,000</td>
               <td>500,000</td>
               <td>400,000</td>
               <td>400,000</td>
               <td>145,000</td>
               <td>30,000</td>
             </tr>

             <tr className="alnoor-table-row">
               <td>01-Kanal</td>
               <td>7,000,000</td>
               <td>800,000</td>
               <td>7,00,000</td>
               <td>7,00,000</td>
               <td>255,000</td>
               <td>45,000</td>
             </tr>
             </tbody>
           </table>
         </div>
       </div>
       <div className={`tab-pane fade ${website || "aljalil"}-table`} id="nav-profile" role="tabpanel"
            aria-labelledby="nav-profile-tab">
         <h2 className="alnoor-about-small-heading">
           5 Years Plan - Home 5-Marla (5% Discount on Full Payment)
         </h2>
         <div className="table-responsive">
           <table className="table">
             <thead className="alnoor-thead-green">
             <tr>
               <th scope="col">PLOT SIZE</th>
               <th scope="col">TOTAL PRICE</th>
               <th scope="col">BOOKING AMOUNT</th>
               <th scope="col">BALLOTING WITH 1 YEAR</th>
               <th scope="col">POSSESSION WITH 2.5 YEAR</th>
               <th scope="col">10X HARL YEARLY INSTALLMENTS</th>
               <th scope="col">50X MONTHLY INSTALLMENT</th>

             </tr>
             </thead>
             <tbody>
             <tr className="alnoor-table-row">
               <td>03-Marla</td>
               <td>1,600,000</td>
               <td>200,000</td>
               <td>1,50,000</td>
               <td>150,000</td>
               <td>50,000</td>
               <td>12,000</td>
             </tr>
             <tr className="alnoor-table-row">
               <td>05-Marla</td>
               <td>2,500,000</td>
               <td>300,000</td>
               <td>2,50,000</td>
               <td>2,50,000</td>
               <td>85,000</td>
               <td>17,000</td>
             </tr>

             <tr className="alnoor-table-row">
               <td>10.11-Marla</td>
               <td>4,500,000</td>
               <td>500,000</td>
               <td>400,000</td>
               <td>400,000</td>
               <td>145,000</td>
               <td>30,000</td>
             </tr>

             <tr className="aljalil-table-row">
               <td>01-Kanal</td>
               <td>7,000,000</td>
               <td>800,000</td>
               <td>7,00,000</td>
               <td>7,00,000</td>
               <td>255,000</td>
               <td>45,000</td>
             </tr>
             </tbody>
           </table>
         </div>
       </div>
     </div>
  );

  return (
    <React.Fragment>
      <Header
        color="#020202"
        logoPath="https://buildearth.s3.us-east-2.amazonaws.com/img/WestMarina/mainLogo.png"
        link="/projects/west-marina"
        classes="alnoor"
        logoClass="alnoorLogo"
        logo="https://buildearth.s3.us-east-2.amazonaws.com/img/WestMarina/WM_Logo_T.png"
      />
      <About
        website="alnoor"
        rectImg="https://buildearth.s3.us-east-2.amazonaws.com/img/WestMarina/Path+2606.svg"
        arrayOfImages={[
          "https://buildearth.s3.us-east-2.amazonaws.com/img/WestMarina/slide1.png",
          "https://buildearth.s3.us-east-2.amazonaws.com/img/WestMarina/slide2.png",
          "https://buildearth.s3.us-east-2.amazonaws.com/img/WestMarina/slide3.png",
        ]}
        heading="Al Noor Orchard - West Marina"
        para1={`
             To acknowledge a client’s needs and desires is Al Jalil Developer’s priority. The endeavours of Al Jalil
             Developers is to deliver a secured lifestyle with all modern world essentials and for this purpose Al Noor
             Orchard Housing Scheme has been reoriented to realize the importance of the housing sector. We are thriving
              to strengthen the housing sector and our clients in the best possible way and embark as a trustworthy real
               estate developer brand.
           `}
        para2={`This gated community offers the plushest living at the most iconic location in the city.
          Al Noor Orchard gives you an opportunity to be the owner of your own residential plot.<br /><br />
          Relish the beauty of nature, its sights and sounds in the lush green environment amid
          fresh air to elevate your mood and spirit that gives you the peace of mind for enjoying the freedom to pursue
          your dream. Legally Approved by TMA and LDA. Fully covered and compliant!
           `}
        heading2="Peaceful, Safe and Serene"
        heading3=""
        para3={``}
      />
      <VideoSection
        video="https://www.youtube.com/embed/RV9i_ThHvQo?rel=0;&autoplay=1&mute=1&loop=1"
        img2="https://buildearth.s3.us-east-2.amazonaws.com/img/WestMarina/Path+2605.svg"
        img3="https://buildearth.s3.us-east-2.amazonaws.com/img/WestMarina/Group+1501.png"
        img4="https://buildearth.s3.us-east-2.amazonaws.com/img/WestMarina/Mask+Group+91.png"
        img1="https://buildearth.s3.us-east-2.amazonaws.com/img/WestMarina/Mask+Group+90.png"
        classes="alnoor"
        marinaClass="marina-about"
      />
      <Location
        website="alnoor"
        heading="Ideal Location"
        primeLocation={[
          "Access to the Lahore Airport",
          "3km from Lahore to Karachi Motorway",
          "CPEC accessibility via M2 and KLM lll",
          "At Faizpur Interchange",
          "10 mints drive to Multan Road",
        ]}
        img1="https://buildearth.s3.us-east-2.amazonaws.com/img/alJalilMainPage/Group+1087.png"
        img2="https://buildearth.s3.us-east-2.amazonaws.com/img/alJalilMainPage/Long+white+Arrow.svg"
        para1={`
             The ideal location of Al Jalil Garden is its preeminent feature providing easy access to
             different localities of Lahore,
             making travelling much easier and accessible from anywhere in the city.
           `}
        location="Al Noor Orchard - West Marina"
      />
      <PaymentTabs
        para3={`Extra Charges: Plot/property on 40ft road 5% extra charges , 10% on Corner or Park Facing Plot /
          Property, 15% on 50-65ft Road or Corner + Park Facing Plot and 20% on above 65ft Road. 05% Extra on
          Residential Property Facing Commercial Area. The management can however revise the charges for premium
          location property, which shall be determined at the time of booking.`}
        para4={`Note: Plot/property on 30ft to 40ft road there shall be no extra charges for 08,10 & 20-Marla.`}
        website="alnoor"
        para2={`Processing charges for residential plots shall be Rs. 1000/ Marla, Rs. 2000/ Marla for homes,
          for 4 Marla commercial plots shall be Rs.25000/. The file processing charges shall be non-refundable while
          remaining amount shall be credited against the payment plan/total plot price.
           `}
        para1={`
          Development Charges are included for Residential Plots, 5 Marla Home and Cash Plan. The prices are
          subject to change without prior notice.
          `}
        RatesPlots={() => <RatesPlots website="alnoor" />}
      />
      <div className="container amenities" id="amenities">
        <div className="row">
          <div className="col-md-12">
            <div className="amenities-heading-section">
              <h1 className="amenities-heading">Amenities</h1>
            </div>
            <Slider {...settings} className="amenities-logos slider">
              <div className="slide1">
                <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/alJalilMainPage/amenities/Mask+Group+112.png" />
                <div className="amenities-content ament1">
                  <h5 className="amenities-text">Gated Community</h5>
                </div>
              </div>
              <div className="slide1">
                <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/alJalilMainPage/amenities/Mask+Group+101.png" />
                <div className="amenities-content ament2">
                  <h5 className="amenities-text">Main Boulevard</h5>
                </div>
              </div>
              <div className="slide1">
                <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/alJalilMainPage/amenities/Mask+Group+113.png" />
                <div className="amenities-content ament3">
                  <h5 className="amenities-text">Jamia Masjid</h5>
                </div>
              </div>

              <div className="slide1">
                <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/alJalilMainPage/amenities/Mask+Group+114.png" />
                <div className="amenities-content ament4">
                  <h5 className="amenities-text">Theme Park</h5>
                </div>
              </div>

              <div className="slide1">
                <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/alJalilMainPage/amenities/Mask+Group+104.png" />
                <div className="amenities-content ament5">
                  <h5 className="amenities-text">Educational Institution</h5>
                </div>
              </div>

              <div className="slide1">
                <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/alJalilMainPage/amenities/Mask+Group+105.png" />
                <div className="amenities-content ament6">
                  <h5 className="amenities-text">Health Care Centre</h5>
                </div>
              </div>

              <div className="slide1">
                <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/alJalilMainPage/amenities/Mask+Group+106.png" />
                <div className="amenities-content ament7">
                  <h5 className="amenities-text">Community Club</h5>
                </div>
              </div>

              <div className="slide1">
                <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/alJalilMainPage/amenities/Mask+Group+107.png" />
                <div className="amenities-content ament8">
                  <h5 className="amenities-text">Al-Jalil Mall</h5>
                </div>
              </div>

              <div className="slide1">
                <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/alJalilMainPage/amenities/Mask+Group+115.png" />
                <div className="amenities-content ament9">
                  <h5 className="amenities-text">Underground Electricity</h5>
                </div>
              </div>

              <div className="slide1">
                <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/alJalilMainPage/amenities/Mask+Group+109.png" />
                <div className="amenities-content ament10">
                  <h5 className="amenities-text">24 Hours Power Backup</h5>
                </div>
              </div>

              <div className="slide1">
                <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/alJalilMainPage/amenities/Mask+Group+110.png" />
                <div className="amenities-content ament11">
                  <h5 className="amenities-text">Modern Sewerage System</h5>
                </div>
              </div>
              <div className="slide1">
                <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/alJalilMainPage/amenities/Mask+Group+111.png" />
                <div className="amenities-content ament12">
                  <h5 className="amenities-text">Water Filtration Plant</h5>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default WestMarinaWebsite;