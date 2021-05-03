import React from 'react';

const VideoSection = ({ img1, marinaClass, img2, img3, img4, video, classes}) => {
  const handleVideoOpen = () => {
    const thevid = document.getElementById('thevideo');
    const thumbnail = document.getElementById('thumbnail');
    if (thevid.style.display === 'block'){
      thevid.style.display='none';
      return;
    }
    thumbnail.style.opacity = 0;
    thevid.style.display='block';
    thevid.style.width='64%';
    thevid.style.margin='32px';
  }
  return (
     <div className={`container-fluid ${classes}-about ${marinaClass}`}>
       <div className="row">
         <div className="col-md-12 video-section">
           <div className="video-section">
             <img className="img-fluid subtraction" src={img1}
                alt="Subtraction" />
                  <span
                   onClick={handleVideoOpen}>
                    <img className="img-fluid video-thumbnail" id="thumbnail" src={img2}
                     alt="Video Thumbnail"/>
                  </span>
               <span className="video-thumbnail" id="thevideo" style={{ display: "none" }}>
                  <iframe
                    className="video-link-small-screen" width="100%" height="550"
                    src={video}
                    frameBorder="0"
                    allowFullScreen="" include="">

                  </iframe>
              </span>
               <img
                   style={{ padding: marinaClass ? 42 : 0}}
                   className="img-fluid video-rect" src={img3}
                    alt="Video Rectangle" />
                 <img  className="img-fluid subtraction" src={img4}
                      alt="Subtraction 1" />
           </div>
         </div>
       </div>
     </div>
  );
};

export default VideoSection;