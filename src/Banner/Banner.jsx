import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Simple cn function replacement
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Simple Marquee component replacement
const Marquee = ({ children, pauseOnHover = false, vertical = false, reverse = false, className = "" }) => {
  return (
    <div 
      className={`marquee ${pauseOnHover ? 'pause-on-hover' : ''} ${vertical ? 'vertical' : ''} ${reverse ? 'reverse' : ''} ${className}`}
    >
      <div className="marquee-content">
        {children}
      </div>
    </div>
  );
};

const reviews = [
  {
    
    body: "Electcare's industrial solutions have revolutionized our manufacturing process. Highly recommended!",
    bgImage: "./12.png"
  },
  {
    
    body: "The cement industry expertise provided by Electcare helped us optimize our production by 35%.",
    img: "https://avatar.vercel.sh/sarah",
    bgImage: "./2.png"
  },
  {
    
    body: "Their chemical industry solutions are cutting-edge. We've seen a significant improvement in efficiency.",
    img: "https://avatar.vercel.sh/michael",
    bgImage: "./3.png"
  },
  {
    
    body: "The textile industry solutions provided by Electcare have transformed our production line.",
    img: "https://avatar.vercel.sh/emma",
    bgImage: "./4.png"
  },
  {
   
    body: "We've been using Electcare's paper industry solutions for years and couldn't be happier with the results.",
    img: "https://avatar.vercel.sh/david",
    bgImage: "./5.png"
  },
  {
 
    body: "The beverage industry expertise from Electcare helped us streamline our operations and reduce costs.",
    img: "https://avatar.vercel.sh/lisa",
    bgImage: "./6.png"
  },
  {
 
    body: "The beverage industry expertise from Electcare helped us streamline our operations and reduce costs.",
    img: "https://avatar.vercel.sh/lisa",
    bgImage: "./7.png"
  },
  {
 
    body: "The beverage industry expertise from Electcare helped us streamline our operations and reduce costs.",
    img: "https://avatar.vercel.sh/lisa",
    bgImage: "./8.png"
  },
  {
 
    body: "The beverage industry expertise from Electcare helped us streamline our operations and reduce costs.",
    img: "https://avatar.vercel.sh/lisa",
    bgImage: "./9.png"
  },
  {
 
    body: "The beverage industry expertise from Electcare helped us streamline our operations and reduce costs.",
    img: "https://avatar.vercel.sh/lisa",
    bgImage: "./10.png"
  },
  {
 
    body: "The beverage industry expertise from Electcare helped us streamline our operations and reduce costs.",
    img: "https://avatar.vercel.sh/lisa",
    bgImage: "./11.png"
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body, bgImage }) => {
  return (
    <figure
      className={cn(
        "review-card relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-300 bg-white hover:bg-gray-50"
      )}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="relative z-10">
        <div className="flex flex-row items-center gap-2 h-25">
        </div>
      </div>
    </figure>
  );
};

const MarqueeDemoVertical = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="marquee-vertical mx-2">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="marquee-vertical mx-2">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white"></div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="banner-container bgbluepage">
      <div className="banner-content">
        <div className="mt-8 ">
          
<h1 className='itheading'>Electcare Industries <br/><span className='bannerkg'>Power Your Future</span></h1>
<p className="text-lg">
            With over 20 years of experience, Electcare provides cutting-edge 
            solutions for various industries including cement, sugar, beverages, 
            chemicals, paper, and textiles. 
          </p> 
          <Link to="/services">
            <button className='btnshading mt-4'>
 Explore <FontAwesomeIcon icon={faAngleRight} style={{ color: '#fff' }} className='mx-1' />
            </button></Link>
        </div>        
        <div className="banner-reviews hidden lg:block">
          <MarqueeDemoVertical />
        </div>
      </div>
    </div>
  );
};

export default Banner;





