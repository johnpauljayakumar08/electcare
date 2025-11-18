import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import service2img from "../assets/2.png";
import service3img from "../assets/3.png";
import service4img from "../assets/4.png";
import service5img from "../assets/5.png";
import service6img from "../assets/6.png";
import service7img from "../assets/7.png";
import service8img from "../assets/8.png";
import service9img from "../assets/9.png";
import service10img from "../assets/10.png";
import service11img from "../assets/11.png";
import "./Swipingcard.css";
import { EffectCoverflow, Autoplay } from 'swiper/modules';
function SwiperCard3D() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        {/* <Swiper
  modules={[EffectCoverflow, Autoplay]}
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 2,
    slideShadows: false,
  }}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  breakpoints={{
    0: { slidesPerView: 1, spaceBetween: 15 },      // mobile
    640: { slidesPerView: 1.5, spaceBetween: 20 },  // small tablet
    768: { slidesPerView: 2, spaceBetween: 25 },    // large tablet
    1024: { slidesPerView: 3, spaceBetween: 30 },   // laptop / desktop
  }}
  className="mySwiper"
> */}

       
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="2"
          loop={true} 
          coverflowEffect={{
            rotate: 0, 
            stretch: 10, 
            depth: 200, 
            modifier: 2, 
            slideShadows: false,
          }}
          autoplay={{
            delay: 5000, 
            disableOnInteraction: false, 
          }}
          className='mySwiper'>
          <SwiperSlide>
            <div className="procard rounded-xl overflow-hidden shadow-lg">
              <img src={service10img} title='Repairing' alt=" KG Genius Labs creates value with tailored IT Services, aligning services with your business objectives" className="w-full h-68 object-cover" />
              
              <div className="bg-gray-800 text-white p-4">
                <h5 className="text-center font-bold">Repairing</h5>
                <p className="text-justify">From minor repairs to complex issues, we ensure minimal downtime and reliable performance.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="procard rounded-xl overflow-hidden shadow-lg">
              <img src={service4img} title='AMC' alt="The KGGL Digital Marketing Team provides tailored advertising solutions to enhance client retention and maximize conversions, driving your brand's digital success" className="w-full h-68 object-cover" />
              
              <div className="bg-gray-800 text-white p-4">
                <h5 className="text-center font-bold">AMC</h5>
                <p className="text-justify">Affordable yearly maintenance plans for reliable performance and peace of mind.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="procard rounded-xl overflow-hidden shadow-lg">
              <img src={service5img} title='CMC' alt="Professional HR consultant working with a diverse team" className="w-full h-68 object-cover" />
             
              <div className="bg-gray-800 text-white p-4">
                <h5 className="text-center font-bold">CMC</h5>
                <p className="text-justify">All-in-one coverage with servicing, repairs, and spare parts included.</p>
              </div>
            </div>
          </SwiperSlide>
           <SwiperSlide>
            <div className="procard rounded-xl overflow-hidden shadow-lg">
              <img src={service6img} title='Genuine Spares Supply' alt="Professional HR consultant working with a diverse team" className="w-full h-68 object-cover" />
             
              <div className="bg-gray-800 text-white p-4">
                <h5 className="text-center font-bold">Genuine Spares Supply</h5>
                <p className="text-justify"> Authentic spare parts for safe, reliable, and long-lasting performance.</p>
              </div>
            </div>
          </SwiperSlide>
           <SwiperSlide>
            <div className="procard rounded-xl overflow-hidden shadow-lg">
              <img src={service6img} title='Genuine Spares Supply' alt="Professional HR consultant working with a diverse team" className="w-full h-68 object-cover" />
             
              <div className="bg-gray-800 text-white p-4">
                <h5 className="text-center font-bold">Retrofitting Solutions</h5>
                <p className="text-justify">Cost-effective upgrades to modernize systems and improve efficiency.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="procard rounded-xl overflow-hidden shadow-lg">
              <img src={service7img} title='Erection Support' alt="Professional HR consultant working with a diverse team" className="w-full h-68 object-cover" />
             
              <div className="bg-gray-800 text-white p-4">
                <h5 className="text-center font-bold">Erection Support</h5>
                <p className="text-justify">Safe, precise installation ensuring proper setup and maximum efficiency.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="procard rounded-xl overflow-hidden shadow-lg">
              <img src={service8img} title='On Site Support' alt="Professional HR consultant working with a diverse team" className="w-full h-68 object-cover" />
             
              <div className="bg-gray-800 text-white p-4">
                <h5 className="text-center font-bold">On Site Support</h5>
                <p className="text-justify">Expert troubleshooting and repairs delivered directly at your location.</p>
              </div>
            </div>
          </SwiperSlide>
           <SwiperSlide>
            <div className="procard rounded-xl overflow-hidden shadow-lg">
              <img src={service9img} title='Maintenance Support' alt="Professional HR consultant working with a diverse team" className="w-full h-68 object-cover" />
             
              <div className="bg-gray-800 text-white p-4">
                <h5 className="text-center font-bold">Maintenance Support</h5>
                <p className="text-justify">Preventive and corrective care for uninterrupted, smooth operations.</p>
              </div>
            </div>
          </SwiperSlide>
           <SwiperSlide>
            <div className="procard rounded-xl overflow-hidden shadow-lg">
              <img src={service11img} title='Maintenance Support' alt="Professional HR consultant working with a diverse team" className="w-full h-68 object-cover" />
             
              <div className="bg-gray-800 text-white p-4">
                <h5 className="text-center font-bold">Online Support</h5>
                <p className="text-justify">Instant remote troubleshooting and expert guidance anytime, anywhere.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperCard3D;
